import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function Register() {
  // const history = useHistory();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/auth/register", {
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
  
  return (
    <div className='register'>
      <ResponsiveAppBar />
      <StyledContainer>
    <Box
      component="form"
      onSubmit={handleSubmit} // Handle form submission with onSubmit
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height to fill the viewport vertically
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-error"
        label="username"
        name='username'
        value={formData.username}
        onChange={handleChange}
      />
      <TextField
        id="outlined-error"
        label="First Name"
        name='first_name'
        value={formData.first_name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-error-helper-text"
        label="Last Name"
        name='last_name'
        value={formData.last_name}
        onChange={handleChange}
      />
      <TextField
        id="Email"
        label="Email"
        name='email'
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        id="filled-error-helper-text"
        label="Password"
        helperText="Must be 8 characters."
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <div style={{margin:"30px"}}>
        <Button variant="contained" style={{marginRight:"5px"}}>Login</Button>
        <Button variant="contained" type='submit'>Sign Up</Button>
      </div>
    </Box>
    </StyledContainer>
    <Footer />
    </div>
  );
}
