import React, { useState, useEffect } from "react";

import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddItemForm() {
  const categories = ["Casual/Streetwear", "Formal", "Athletic", "Lounge"];

  const subCategories = {
    "Casual/Streetwear": [
      "Tops",
      "Bottoms",
      "Shoes",
      "Accessories",
      "Underwear",
      "Jackets",
      "Other",
    ],
    Formal: [
      "Tops",
      "Bottoms",
      "Shoes",
      "Accessories",
      "Underwear",
      "Jackets",
      "Other",
    ],
    Athletic: [
      "Tops",
      "Bottoms",
      "Shoes",
      "Jackets",
      "Accessories",
      "Underwear",
      "Other",
    ],
    Lounge: [
      "Tops",
      "Bottoms",
      "Shoes",
      "Accessories",
      "Underwear",
      "Jackets",
      "Other",
    ],
  };

  const [closets, setClosets] = useState([]);
  const currentDate = new Date().toISOString().substr(0, 10);
  const navigate = useNavigate();
  const handleSelectCloset = () => {
    axios("http://localhost:8080/api/closets", {
      withCredentials: true, // If you need to include credentials
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setClosets(response.data);
      console.log("AddItemForm------------>", response.data);
    });
  };
  useEffect(() => {
    handleSelectCloset();
  }, []);
  const [itemData, setItemData] = useState({
    item_name: "",
    category: "Casual/Streetwear", // Set a default category
    subCategory: "Tops", // Set a default sub-category
    color: "",
    purchase_date: currentDate,
    // use_count: 0,
    img_src: "",
    description: "",
    season: "ALL",
    closet_id: "", // Initialize with the first option or default
    last_worn_date: currentDate,
    size: "NA",
    brand_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field is the "Closet" dropdown
    if (name === "closet_id") {
      // Convert the selected value to a number (assuming closet_id is numeric)
      const closetId = parseInt(value, 10);
      setItemData({ ...itemData, closet_id: closetId });
    } else {
      // For other input fields, update as usual
      setItemData({ ...itemData, [name]: value });
    }
  };
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
      subCategory: subCategories[value][0], // Set the default sub-category for the selected category
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // setItemData({...itemData,  img_src: file });
    if (file) {
      const reader = new FileReader();
      console.log({ reader });
      reader.onload = (event) => {
        const base64Img = event.target.result;
        console.log(base64Img);
        setItemData({ ...itemData, img_src: base64Img });
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/items",
        itemData,
        {
          withCredentials: true, // If you need to include credentials
        }
      );

      if (response.status === 200) {
        // Item added successfully, handle success
        console.log("Item added successfully", itemData);
        navigate("/items");
      } else {
        // Handle error response
        console.log("Item added failed");
      }
    } catch (error) {
      // Handle network error
      console.error(error);
    }
  };

  return (
    <div className="add-item">
      <ResponsiveAppBar />
      <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Item Name"
              name="item_name"
              value={itemData.item_name}
              onChange={handleInputChange}
              required
              placeholder="Watch"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={itemData.category}
                onChange={handleCategoryChange}
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Sub-Category</InputLabel>
              <Select
                name="subCategory"
                value={itemData.subCategory}
                onChange={handleInputChange}
                required
              >
                {subCategories[itemData.category].map((subCategory) => (
                  <MenuItem key={subCategory} value={subCategory}>
                    {subCategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={itemData.color}
              onChange={handleInputChange}
              required
              placeholder="Red"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              label="Purchase Date"
              name="purchase_date"
              value={itemData.purchase_date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <input
              name="img_src"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              label="Description"
              name="description"
              value={itemData.description}
              onChange={handleInputChange}
              placeholder="My favourite watch"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Season</InputLabel>
              <Select
                name="season"
                value={itemData.season}
                onChange={handleInputChange}
                placeholder="Winter"
              >
                <MenuItem value="ALL">All Seasons</MenuItem>
                <MenuItem value="Winter">Winter</MenuItem>
                <MenuItem value="Summer">Summer</MenuItem>
                <MenuItem value="Spring">Spring</MenuItem>
                <MenuItem value="Fall">Fall</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Closet</InputLabel>
              <Select
                name="closet_id"
                value={itemData.closet_id}
                onChange={handleInputChange}
                required
              >
                {closets[0].map((closet) => (
                  <MenuItem key={closet.id} value={closet.id}>
                    {closet.closet_name}
                  </MenuItem>
                ))}

                {/* Add more closet options */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              label="Last Use Date"
              name="last_worn_date"
              value={itemData.last_worn_date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Size</InputLabel>
              <Select
                name="size"
                value={itemData.size}
                onChange={handleInputChange}
                required
                placeholder="Small"
              >
                <MenuItem value="NA">Not Applicable</MenuItem>
                <MenuItem value="Small">Small</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Large">Large</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
                {/* Add more size options */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              label="Brand"
              name="brand_name"
              placeholder="Gucci"
              value={itemData.brand_name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            {itemData.img_src && (
              <img
                src={itemData.img_src}
                alt="Selected item"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Add Item
            </Button>
          </Grid>
        </Grid>
      </form>
      <Footer />
    </div>
  );
}

export default AddItemForm;
