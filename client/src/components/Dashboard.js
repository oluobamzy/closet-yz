import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { styled } from "@mui/system";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  // Sample data for categories and summary
  const categories = ["Shirts", "Pants", "Shoes", "Accessories", "Others"];
  const categorySummary = {
    Shirts: {
      totalCount: 100, // Replace with actual count for Shirts
      brandData: {
        Brand1: 3,
        Brand2: 5,
        Brand3: 2,
      },
      colorData: {
        Red: 4,
        Blue: 1,
        Green: 3,
      },
      seasonData: {
        Spring: 5,
        Summer: 6,
        Fall: 2,
      },
      lastPurchaseImage:
        "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
      lastPurchaseDate: "2023-09-15", // Replace with actual date
    },
    Pants: {
      // Data for Pants category
      totalCount: 30, // Replace with actual count for Shirts
      brandData: {
        Brand1: 3,
        Brand2: 1,
        Brand3: 2,
      },
      colorData: {
        Red: 4,
        Blue: 3,
        Green: 3,
      },
      seasonData: {
        Spring: 5,
        Summer: 3,
        Fall: 2,
      },
      lastPurchaseImage:
        "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
      lastPurchaseDate: "2023-09-15", // Replace with actual date
    },
    Shoes: {
      // Data for Pants category
      totalCount: 20, // Replace with actual count for Shirts
      brandData: {
        Brand1: 3,
        Brand2: 9,
        Brand3: 2,
      },
      colorData: {
        Red: 4,
        Blue: 5,
        Green: 3,
      },
      seasonData: {
        Spring: 5,
        Summer: 2,
        Fall: 2,
      },
      lastPurchaseImage:
        "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
      lastPurchaseDate: "2023-09-15", // Replace with actual date
    },
    Accessories: {
      // Data for Pants category
      totalCount: 10, // Replace with actual count for Shirts
      brandData: {
        Brand1: 3,
        Brand2: 1,
        Brand3: 2,
      },
      colorData: {
        Red: 4,
        Blue: 3,
        Green: 3,
      },
      seasonData: {
        Spring: 5,
        Summer: 3,
        Fall: 2,
      },
      lastPurchaseImage:
        "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
      lastPurchaseDate: "2023-09-15", // Replace with actual date
    },
    Others: {
      // Data for Pants category
      totalCount: 10, // Replace with actual count for Shirts
      brandData: {
        Brand1: 3,
        Brand2: 10,
        Brand3: 2,
      },
      colorData: {
        Red: 4,
        Blue: 3,
        Green: 3,
      },
      seasonData: {
        Spring: 5,
        Summer: 5,
        Fall: 2,
      },
      lastPurchaseImage:
        "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1", // URL to image
      lastPurchaseDate: "2023-09-15", // Replace with actual date
    },
    // Add data for other categories
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Grid container spacing={2}>
      {/* First Column */}
      <Grid item xs={4}>
        <Paper>
          <List>
            {categories.map((category, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handleCategorySelect(category)}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>

      {/* Second Column */}
      <Grid item xs={8}>
        <Paper>
          <div style={{ padding: "16px" }}>
            {selectedCategory && categorySummary[selectedCategory] ? (
              <div>
                <h2>{selectedCategory}</h2>
                <p>{`Summary for ${selectedCategory}`}</p>
                {/* Total Count */}
                <p>
                  Total Count: {categorySummary[selectedCategory].totalCount}
                </p>
                {/* Flex container for pie charts and image */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px", // Adjust the gap/margin as needed
                    flexWrap: "wrap",
                  }}
                >
                  {/* Pie Chart for brandData */}
                  <div>
                    <h3>Brand Data</h3>
                    <Pie
                      data={{
                        labels: Object.keys(
                          categorySummary[selectedCategory].brandData
                        ),
                        datasets: [
                          {
                            data: Object.values(
                              categorySummary[selectedCategory].brandData
                            ),
                            backgroundColor: [
                              "red",
                              "blue",
                              "green",
                              // Add more colors as needed
                            ],
                          },
                        ],
                      }}
                      options={pieChartOptions}
                      width={300} // Adjust the width as needed
                      height={300} // Adjust the height as needed
                    />
                  </div>

                  {/* Pie Chart for colorData */}
                  <div>
                    <h3>Color Data</h3>
                    <Pie
                      data={{
                        labels: Object.keys(
                          categorySummary[selectedCategory].colorData
                        ),
                        datasets: [
                          {
                            data: Object.values(
                              categorySummary[selectedCategory].colorData
                            ),
                            backgroundColor: [
                              "red",
                              "blue",
                              "green",
                              // Add more colors as needed
                            ],
                          },
                        ],
                      }}
                      options={pieChartOptions}
                      width={300} // Adjust the width as needed
                      height={300} // Adjust the height as needed
                    />
                  </div>

                   {/* Pie Chart for Season */}
                   <div>
                    <h3>Season Data</h3>
                    <Pie
                      data={{
                        labels: Object.keys(
                          categorySummary[selectedCategory].seasonData
                        ),
                        datasets: [
                          {
                            data: Object.values(
                              categorySummary[selectedCategory].seasonData
                            ),
                            backgroundColor: [
                              "red",
                              "blue",
                              "green",
                              // Add more colors as needed
                            ],
                          },
                        ],
                      }}
                      options={pieChartOptions}
                      width={300} // Adjust the width as needed
                      height={300} // Adjust the height as needed
                    />
                  </div>
                </div>
                {/* Last Purchase */}
                <div>
                  <h3>Last Purchase</h3>
                  <img
                    src={categorySummary[selectedCategory].lastPurchaseImage}
                    alt={`Last Purchase for ${selectedCategory}`}
                    style={{
                      width: "300px", // Set width to 300px
                      height: "300px", // Set height to 300px
                      borderRadius: "50%", // Apply a border-radius of 50% for a circular image
                    }}
                  />
                  <p>
                    Purchased on:{" "}
                    {categorySummary[selectedCategory].lastPurchaseDate}
                  </p>
                </div>
              </div>
            ) : (
              <p>Select a category from the list on the left.</p>
            )}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
