import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

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
  const [closetName, setClosetName] = useState('');

  const handleClosetNameChange = (event) => {
    setClosetName(event.target.value);
  };

  const handleAddCloset = (event) => {
    event.preventDefault();
    if (closetName.trim() !== '') {
      setClosets([...closets, closetName]);
      setClosetName('');
    }
    fetch("http://localhost:8080/api/closets", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(closetName),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("User data added successfully:", data);
    //navigate('/items');
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
                fullWidth
                variant="outlined"
                value={closetName}
                onChange={handleClosetNameChange}
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
          {closets.map((closetName, index) => (
            <ListItem key={index}>
              <ListItemText primary={closetName} />
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
