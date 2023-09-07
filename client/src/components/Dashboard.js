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
import ResponsiveAppBar from './ResponsiveAppBar'; // Import the ResponsiveAppBar
import Footer from './Footer'; // Import the Footer
import Box from '@mui/material/Box';

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
  /*
  1.Get all items from the database where userid = current user
  2. Get all categories from the database where userid = current user
  3. Get all items from each closet
  
  */
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

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Use minHeight to fill the entire viewport vertically
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
  }
  ));

  return (
    <div className="dashboard">
      <ResponsiveAppBar />
      <StyledContainer>
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
          <StyledBanner>
            <Grid item xs={8} style={{ display: "flex" }}>
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
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "10px", // Adjust the gap/margin as needed
                          flexWrap: "wrap",
                        }}
                      >
                        <div className="pieCharts" style={{display:"flex"}}>
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



                      </div>
                 
                    </div>
                  ) : (
                    <div>
                      <h2>{selectedCategory}</h2>
                      <p>{`Summary for ${selectedCategory}`}</p>
                      {/* Total Count */}
                      <p>
                        Total Count: {categorySummary[categories[0]].totalCount}
                      </p>
                      {/* Flex container for pie charts and image */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "10px", // Adjust the gap/margin as needed
                          flexWrap: "wrap",
                        }}
                      >
                        <div className="pieCharts" style={{display:"flex"}}>
                          {/* Pie Chart for brandData */}
                          <div>
                            <h3>Brand Data</h3>
                            <Pie
                              data={{
                                labels: Object.keys(
                                  categorySummary[categories[0]].brandData
                                ),
                                datasets: [
                                  {
                                    data: Object.values(
                                      categorySummary[categories[0]].brandData
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
                                  categorySummary[categories[0]].colorData
                                ),
                                datasets: [
                                  {
                                    data: Object.values(
                                      categorySummary[categories[0]].colorData
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
                                  categorySummary[categories[0]].seasonData
                                ),
                                datasets: [
                                  {
                                    data: Object.values(
                                      categorySummary[categories[0]].seasonData
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



                      </div>
                 
                    </div>
                  )}
                </div>
              </Paper>
            </Grid>
          </StyledBanner>
        </Grid>
      </StyledContainer>
      <Footer />

    </div>
  );
};

export default Dashboard;
