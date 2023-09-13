import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import TopBar from './TopBar';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  padding: theme.spacing(3),
}));

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Closet = () => {
  const navigate = useNavigate();
  const [closets, setClosets] = useState([]);
  const [itemData, setItemData] = useState({
    closet_name: '',
    description: '',
  });

  

  const handleClosetNameChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleAddCloset = (event) => {
    event.preventDefault();
    if (itemData.closet_name.trim() !== '') {
      setClosets([...closets, itemData.closet_name]);
      
    }

    const requestBody = JSON.stringify({itemData});
    console.log('RequestBodyHandleAddCloset------------>', requestBody);

  fetch("http://localhost:8080/api/closets", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("User data added successfully:", data);
    navigate('/additem');
    // Handle success
  })
  .catch((error) => {
    console.error("Error adding user data:", error);
    // Handle error
  });
  };

  return (
    <div className='closet'>
      <ResponsiveAppBar />
      <TopBar />
      <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          My Closets
        </Typography>
        <form onSubmit={handleAddCloset}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Closet Name"
                name='closet_name'
                fullWidth
                variant="outlined"
                value={itemData.closet_name}
                onChange={handleClosetNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="description"
                name='description'
                fullWidth
                variant="outlined"
                value={itemData.description}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Closet
              </Button>
            </Grid>
          </Grid>
        </form>
        <StyledList>
          {closets.map((closet_name, index) => (
            <ListItem key={index}>
              <ListItemText primary={closet_name} />
            </ListItem>
          ))}
        </StyledList>
      </StyledPaper>
    </StyledContainer>
    <Footer />
    </div>
  );
};

export default Closet;
