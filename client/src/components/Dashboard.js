import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import ResponsiveAppBar from "./ResponsiveAppBar"; // Import the ResponsiveAppBar
import Footer from "./Footer"; // Import the Footer
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const useStyles = styled("div")(({ theme }) => ({
//   flexGrow: 1,
//   marginTop: theme.spacing(2),
// }));

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: "50%", // Adjust the cutout percentage as needed
};

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  // const [summarizedData, setSummarizedData] = useState(null);
  // Replace with actual data from the database
  // Sample data for categories and summary
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
          setDashboardData(data);
        })
        .catch((err) => console.log(err));
    };

    dashboardLoad();
  }, []);
  const [summaryData, setSummaryData] = useState(null);
  useEffect(() => {
    // Call summarizeItems when dashboardData changes
    if (dashboardData) {
      // summarizeItems(dashboardData);
      const summaryDataList = summarizeItems(dashboardData);
      setSummaryData(summaryDataList);

      console.log("summaryData------->", summaryData);
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
      useCount: 0,
    };

    items.forEach((item) => {
      const {
        category,
        subCategory,
        brand_name,
        color,
        season,
        closet_name,
        use_count,
      } = item;

      // Summarize by category
      if (!summary.categories[category]) {
        summary.categories[category] = 0;
      }
      summary.categories[category]++;

      // Summarize by subcategory
      if (!summary.subcategories[subCategory]) {
        summary.subcategories[subCategory] = 0;
      }
      summary.subcategories[subCategory]++;

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

      // Summarize use count
      summary.useCount += use_count;
    });

    return summary;
  };
  // ......................................................................

  /*
  1.Get all items from the database where userid = current user
  2. Get all categories from the database where userid = current user
  3. Get all items from each closet
  
  */
  // const categories = summaryData ? Object.keys(summaryData.categories) : [];

  // const categorySummary = categories.map((category) => ({
  //   [category]: {
  //     totalCount: summaryData.categories[category],
  //     brandData: summaryData.brands,
  //     colorData: summaryData.colors,
  //     seasonData: summaryData.seasons,
  //   },
  // }));

  // // Merge the individual category summaries into a single object
  // const mergedCategorySummary = Object.assign({}, ...categorySummary);

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

  const categories = ["Shirts", "Pants", "Shoes", "Accessories", "Others"];

  const categorySummary = summaryData;
  // const categorySummary = {
  //   Shirts: {
  //     totalCount: 100, // Replace with actual count for Shirts
  //     brandData: {
  //       Brand1: 3,
  //       Brand2: 5,
  //       Brand3: 2,
  //     },
  //     colorData: {
  //       Red: 4,
  //       Blue: 1,
  //       Green: 3,
  //     },
  //     seasonData: {
  //       Spring: 5,
  //       Summer: 6,
  //       Fall: 2,
  //     },
  //     lastPurchaseImage:
  //       "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
  //     lastPurchaseDate: "2023-09-15", // Replace with actual date
  //   },
  //   Pants: {
  //     // Data for Pants category
  //     totalCount: 30, // Replace with actual count for Shirts
  //     brandData: {
  //       Brand1: 3,
  //       Brand2: 1,
  //       Brand3: 2,
  //     },
  //     colorData: {
  //       Red: 4,
  //       Blue: 3,
  //       Green: 3,
  //     },
  //     seasonData: {
  //       Spring: 5,
  //       Summer: 3,
  //       Fall: 2,
  //     },
  //     lastPurchaseImage:
  //       "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
  //     lastPurchaseDate: "2023-09-15", // Replace with actual date
  //   },
  //   Shoes: {
  //     // Data for Pants category
  //     totalCount: 20, // Replace with actual count for Shirts
  //     brandData: {
  //       Brand1: 3,
  //       Brand2: 9,
  //       Brand3: 2,
  //     },
  //     colorData: {
  //       Red: 4,
  //       Blue: 5,
  //       Green: 3,
  //     },
  //     seasonData: {
  //       Spring: 5,
  //       Summer: 2,
  //       Fall: 2,
  //     },
  //     lastPurchaseImage:
  //       "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
  //     lastPurchaseDate: "2023-09-15", // Replace with actual date
  //   },
  //   Accessories: {
  //     // Data for Pants category
  //     totalCount: 10, // Replace with actual count for Shirts
  //     brandData: {
  //       Brand1: 3,
  //       Brand2: 1,
  //       Brand3: 2,
  //     },
  //     colorData: {
  //       Red: 4,
  //       Blue: 3,
  //       Green: 3,
  //     },
  //     seasonData: {
  //       Spring: 5,
  //       Summer: 3,
  //       Fall: 2,
  //     },
  //     lastPurchaseImage:
  //       "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
  //     lastPurchaseDate: "2023-09-15", // Replace with actual date
  //   },
  //   Others: {
  //     // Data for Pants category
  //     totalCount: 10, // Replace with actual count for Shirts
  //     brandData: {
  //       Brand1: 3,
  //       Brand2: 10,
  //       Brand3: 2,
  //     },
  //     colorData: {
  //       Red: 4,
  //       Blue: 3,
  //       Green: 3,
  //     },
  //     seasonData: {
  //       Spring: 5,
  //       Summer: 5,
  //       Fall: 2,
  //     },
  //     lastPurchaseImage:
  //       "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
  //     lastPurchaseDate: "2023-09-15", // Replace with actual date
  //   },
  //   // Add data for other categories
  // };

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

  return (
    <div>
      <ResponsiveAppBar />
      <StyledContainer>
        <StyledBanner>
          <Grid container spacing={2}>
            {Object.keys(summaryData).map((chartKey) => {
              const chartData = summaryData[chartKey];
              const dataArray = Object.keys(chartData).map((key) => ({
                name: key,
                value: chartData[key],
              }));

              return (
                <Paper
                  key={chartKey}
                  elevation={3}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Typography variant="h6">{`Pie Chart - ${chartKey}`}</Typography>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={dataArray}
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
              );
            })}
          </Grid>
        </StyledBanner>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default Dashboard;
