import { useState } from 'react';
import './AddItem.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function AddItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    img_src: null,
    item_name: "",
    category: "",
    color: "",
    purchase_date: "",
    closet_id: "",
    description: "",
    season: "",
    last_worn_date: "",
    size: "",
    brand_name: "",
  });

  console.log("FORMDATE ------------->", formData)
  // State to hold the URL of the selected image for preview
  const [imagePreview, setImagePreview] = useState(null);

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    //backgroundColor: "#F1F0E8",
  }));

  const submit = async (event) => {
    event.preventDefault();
  
    // Access the form data from the state object
    const { img_src, item_name, category, color, purchase_date, closet_id, description, season, last_worn_date, size, brand_name } = formData;
  
    // Send the form data to the server
    await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Response------->", response)
        return response.json();
      })
      .then((data) => {
        console.log("User data added successfully:", data);
        navigate('/items');
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding user data:", error);
        // Handle error
      });
  };
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    // If the input is a file input, update the 'file' property
    if (name === "img_src") {
      console.log("FormImage---------->", name)
      setFormData({
        ...formData,
        [name]: files[0], // Use the selected file
      });

      // Create a URL for the selected image and set it for preview
      if (files[0]) {
        const imageUrl = URL.createObjectURL(files[0]);
        setImagePreview(imageUrl);
      } else {
        setImagePreview(null);
      }
    } else {
      // Otherwise, update other form fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="AddItem">
      <ResponsiveAppBar />
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", marginTop: "200px", maxWidth:"300px", justifyContent:"center",alignItems:"center" }}>
          {/* Image Preview */}
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '150px', maxHeight: '150px', marginBottom:"20px" }} />}
          <input
            name="img_src"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleInputChange}
          />
          <input
            name="item_name"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            name="brand_name"
            type="text"
            placeholder="Brand Name"
            onChange={handleInputChange}
          />
          <input
            name="season"
            type="text"
            placeholder="season"
            onChange={handleInputChange}
            />
          <input
            name="category"
            type="text"
            placeholder="category"
            onChange={handleInputChange}
            />
          <input
            name="color"
            type="text"
            placeholder="color"
            onChange={handleInputChange}
            />
          <input
            name="size"
            type="text"
            placeholder="size"
            onChange={handleInputChange}
            />
          <input
            name="last_worn_date"
            type="date"
            placeholder="lastWornDate"
            onChange={handleInputChange}
            />
          <input
            name="purchase_date"
            type="date"
            placeholder="purchaseDate"
            onChange={handleInputChange}
            />
            <input
            name="closet_id"
            type="text"
            placeholder="closet_name"
            onChange={handleInputChange}
          />
          <div className='addItem-btn'>
            <Button type="submit" style={{ backgroundColor: "#96B6C5" }}>Submit</Button>
          </div>
        </form>
      <Footer />
    </div>
  );
}
