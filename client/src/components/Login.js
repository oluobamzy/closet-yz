import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login({navigateToRegister, navigateToItems}) {
  return (
    <Box
      component="form"
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
          gap: '10px', // Adjust the gap between buttons as needed
          marginTop: '50px', // Add margin to separate buttons from the form fields
          marginRight: '141px', // Add margin to separate buttons from the form fields

        }}
      >
        <Button variant="contained" onClick={navigateToItems}>Login</Button>
        <Button variant="contained" onClick={navigateToRegister}>Sign Up</Button>
      </div>
    </Box>
  );
}
