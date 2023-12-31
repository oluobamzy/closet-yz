import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import ResponsiveAppBar from "./ResponsiveAppBar"; // Import the ResponsiveAppBar
import Footer from "./Footer"; // Import the Footer
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import TopBar from "./TopBar";

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: "50%", // Adjust the cutout percentage as needed
};

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  // Fetch dashboard data when the component mounts
  useEffect(() => {
    const dashboardLoad = () => {
      fetch("http://localhost:8080/api/users/dashboard", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setDashboardData(data ? data : []);
        })
        .catch((err) => console.log(err));
    };

    dashboardLoad();
  }, []);

  // Summarize items when dashboardData changes
  useEffect(() => {
    if (dashboardData) {
      const summaryDataList = summarizeItems(dashboardData);
      setSummaryData(summaryDataList);
    }
  }, [dashboardData]);

  // Function to summarize items
  const summarizeItems = (items) => {
    const summary = {
      categories: {},
      subcategories: {},
      brands: {},
      colors: {},
      seasons: {},
      closets: {},
    };

    items.forEach((item) => {
      const { category, subcategory, brand_name, color, season, closet_name } =
        item;

      // Summarize by category
      if (!summary.categories[category]) {
        summary.categories[category] = 0;
      }
      summary.categories[category]++;

      // Summarize by subcategory
      if (!summary.subcategories[subcategory]) {
        summary.subcategories[subcategory] = 0;
      }
      summary.subcategories[subcategory]++;

      // Summarize by brand
      if (!summary.brands[brand_name]) {
        summary.brands[brand_name] = 0;
      }
      summary.brands[brand_name]++;

      // Summarize by color
      if (!summary.colors[color]) {
        summary.colors[color] = 0;
      }
      summary.colors[color]++;

      // Summarize by season
      if (!summary.seasons[season]) {
        summary.seasons[season] = 0;
      }
      summary.seasons[season]++;

      // Summarize by closet
      if (!summary.closets[closet_name]) {
        summary.closets[closet_name] = 0;
      }
      summary.closets[closet_name]++;
    });

    return summary;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Use minHeight to fill the entire viewport vertically
    backgroundColor: "#F1F0E8",
  }));

  const StyledBanner = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#F1F0E8", // Background color
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    height: "50%",
  }));

  const summaryData1 = {
    chart1: {
      categoryA: 2,
      categoryB: 3,
      categoryC: 4,
    },
    chart2: {
      categoryX: 5,
      categoryY: 6,
      categoryZ: 8,
    },
  };

  const categories = ["Shirts", "Pants", "Shoes", "Accessories", "Others"];

  //Pie chart settings
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveAppBar />
      <TopBar />
      <StyledContainer>
        <StyledBanner>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px", // Adjust the gap/margin as needed
              flexWrap: "wrap",
            }}
          >
            {summaryData
              ? Object.keys(summaryData).map((chartKey, index) => {
                  const chartData = summaryData[chartKey];
                  const dataArray = Object.keys(chartData).map((key) => ({
                    name: key,
                    value: chartData[key],
                  }));

                  return (
                    <Grid item xs={8} key={index}>
                      <Paper
                        elevation={3}
                        style={{
                          padding: "20px",
                          textAlign: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <Typography variant="h6">{`${chartKey
                          .charAt(0)
                          .toUpperCase()}${chartKey.slice(1)}`}</Typography>

                        <PieChart width={400} height={300}>
                          <Pie
                            data={dataArray}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                          >
                            {dataArray.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={`#${Math.floor(
                                  Math.random() * 16777215
                                ).toString(16)}`}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </Paper>
                    </Grid>
                  );
                })
              : null}
          </div>
        </StyledBanner>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default Dashboard;
