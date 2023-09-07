import { useState } from 'react';
import './AddItem.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AddItem() {
  const [formData, setFormData] = useState({
    file: null,
    itemName: "",
    description: "",
    season: "",
    category: "",
    brandName: "",
    colour: "",
    size: "",
    lastWornDate: "",
    purchaseDate: ""
  });

  // State to hold the URL of the selected image for preview
  const [imagePreview, setImagePreview] = useState(null);

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: "#F1F0E8",
  }));

  const submit = async (event) => {
    event.preventDefault();

    // Access the form data from the state object
    const { file, itemName, description, brand, season, category, colour, size, lastWornDate, purchaseDate } = formData;

    // Send the form data to the server
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    // If the input is a file input, update the 'file' property
    if (name === "file") {
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
      <StyledContainer>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", marginTop: "200px" }}>
          {/* Image Preview */}
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '150px', maxHeight: '150px', marginBottom:"20px" }} />}
          <input
            name="file"
            onChange={handleInputChange}
            type="file"
            accept="image/*"
          />
          <input
            name="description"
            onChange={handleInputChange}
            type="text"
            placeholder="Description"
          />
          <input
            name="itemName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="brandName"
            onChange={handleInputChange}
            type="text"
            placeholder="Brand Name"
          />
          <input
            name="season"
            type="text"
            onChange={handleInputChange}
            placeholder="season"
          />
          <input
            name="category"
            type="text"
            onChange={handleInputChange}
            placeholder="category"
          />
          <input
            name="colour"
            type="text"
            onChange={handleInputChange}
            placeholder="colour"
          />
          <input
            name="size"
            type="text"
            onChange={handleInputChange}
            placeholder="size"
          />
          <input
            name="lastWornDate"
            type="date"
            onChange={handleInputChange}
            placeholder="lastWornDate"
          />
          <input
            name="purchaseDate"
            type="date"
            onChange={handleInputChange}
            placeholder="purchaseDate"
          />
          <div className='addItem-btn'>
            <Button type="submit" style={{ backgroundColor: "#96B6C5" }}>Submit</Button>
          </div>
        </form>
      </StyledContainer>
      <Footer />
    </div>
  );
}
