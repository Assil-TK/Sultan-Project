import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1B374C' }}>
      <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#F5F5F6', borderRadius: '8px' }}>
        <Typography variant="h5" color="#000000" textAlign="center">
          Login
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px' }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: '#FFFFFF', borderRadius: '4px' }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, backgroundColor: '#F39325', '&:hover': { backgroundColor: '#E0841B' } }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
//ollama qwen2.5-coder