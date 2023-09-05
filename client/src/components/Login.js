import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './ResponsiveAppBar'; // Import the ResponsiveAppBar
import Footer from './Footer'; // Import the Footer
import { styled } from "@mui/system";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh', // Use minHeight to fill the entire viewport vertically
  backgroundColor: "#F1F0E8",
  // padding: theme.spacing(4), // Add padding to create space for AppBar and Footer
  '& .formBox': {marginTop: "200px"},
}));

const Login = ({ navigateToRegister, navigateToItems }) => {
  return (
    <div className='loginContainer' style={{display:"flex", flexDirection:"column"}}>
      <ResponsiveAppBar />
      <StyledContainer>
    
         
     {/* Use the ResponsiveAppBar component */}  
      <div className='formBox' >
      <TextField
        id="Email"
        label="Email"
        defaultValue="example@example.com"
      />
      <TextField
        id="filled-error-helper-text"
        label="Password"
        defaultValue="Password"
        helperText="Must be 8 characters."
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginRight: '141px',
        }}
      >
        <Button variant="contained" onClick={navigateToItems} style={{backgroundColor:"#F1C27B"}}>Login</Button>
        <Button variant="contained" onClick={navigateToRegister} >Sign Up</Button>
      </div>
      </div>
    </StyledContainer>
    <Footer /> 
    </div>
  );
}

export default Login;
