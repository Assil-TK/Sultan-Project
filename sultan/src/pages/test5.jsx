import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F5F5F6'
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h5" color="#1B374C" align="center">
          Login
        </Typography>
        <TextField
          label="Email"
          margin="normal"
          fullWidth
          required
          sx={{
            input: { color: '#000000' },
            '& .MuiInputBase-input': {
              backgroundColor: '#FFFFFF',
              borderRadius: 1,
              padding: '8px'
            }
          }}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          required
          sx={{
            input: { color: '#000000' },
            '& .MuiInputBase-input': {
              backgroundColor: '#FFFFFF',
              borderRadius: 1,
              padding: '8px'
            }
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#F39325',
            '&:hover': { backgroundColor: '#E07A1F' },
            marginTop: 2,
            color: '#FFFFFF'
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;