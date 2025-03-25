import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      // Simulate a login API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setError(null);
      alert('Login successful!');
    } catch (err) {
      setError(err.message);
    }
    setIsLoggingIn(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1B374C',
      }}
    >
      <Typography variant="h2" color="#FFFFFF">
        Login Page
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {error && <Typography color="red">{error}</Typography>}
        <Button
          type="submit"
          disabled={isLoggingIn}
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default Login;