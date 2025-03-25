
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const LoginPage = () => {
  return (
    <Container maxWidth="xs" style={{ backgroundColor: '#F5F5F6', padding: '20px' }}>
      <Typography variant="h4" color="#1B374C" textAlign="center">
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        color="#1B374C"
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        type="password"
        color="#1B374C"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Container>
  );
};

export default LoginPage;
