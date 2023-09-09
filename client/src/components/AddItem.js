import React, { useState } from 'react';
import axios from "axios";

import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function AddItemForm() {
  const currentDate = new Date().toISOString().substr(0, 10);
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    item_name: '',
    category: 'Category1',
    color: '',
    purchase_date: currentDate,
    // use_count: 0,
    img_src:"",
    description: '',
    season: 'ALL',
    closet_id: '', // Initialize with the first option or default
    last_worn_date: currentDate,
    size: 'NA',
    brand_name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleImageChange = (e) => {
     const file = e.target.files[0];
    // setItemData({...itemData,  img_src: file });
    if (file) {
      const reader = new FileReader();
      console.log({reader});
     reader.onload = (event) => {
      const  base64Img = event.target.result;
      console.log(base64Img);
        setItemData({ ...itemData, img_src: base64Img });
        
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
      reader.readAsDataURL(file)
    }
    
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/items', itemData, {
        withCredentials: true, // If you need to include credentials
      });
  
      if (response.status === 200) {
        // Item added successfully, handle success
        console.log('Item added successfully', itemData);
        navigate('/items');
      } else {
        // Handle error response
        console.log('Item added failed');
      }
    } catch (error) {
      // Handle network error
      console.error(error);
    }
  };

  return (
    <div className='add-item' >
      <ResponsiveAppBar/>
    <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
      <Grid container spacing={2} >
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
              onChange={handleInputChange}
              required
              placeholder="Category1"
            >
              <MenuItem value="Category1">Category1</MenuItem>
              <MenuItem value="Category2">Category2</MenuItem>
              {/* Add more category options */}
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
              <MenuItem value={1}>Closet 1</MenuItem>
              <MenuItem value={2}>Closet 2</MenuItem>
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
              style={{ maxWidth: '100%' }}
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
    <Footer/>
    </div>
  );
}

export default AddItemForm;
