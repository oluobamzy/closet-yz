import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: "#F1F0E8",
}));

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your login logic here
    const { username, password } = formData;
    // Send a request to your backend to validate the credentials
    // Example:
    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the dashboard or home page on successful login
          navigate('/dashboard');
        } else {
          // Handle login failure, show an error message, etc.
          console.error('Login failed');
          
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className='loginContainer'>
      <ResponsiveAppBar />
      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ backgroundColor: "#F1C27B", marginTop: '10px' }}
          >
            Login
          </Button>
        </form>
        <Button
          variant="text"
          onClick={() => navigate('/register')}
          style={{ marginTop: '10px' }}
        >
          Sign Up
        </Button>
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default Login;
