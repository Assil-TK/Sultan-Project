import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Image de fond */}
      <Box
        component="img"
        src="/assets/login.jpg"
        alt="background"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay bleu */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 50, 0.2)",
        }}
      />

      <Box
        component="img"
        src="/assets/effia.png"
        alt="logo"
        sx={{
          position: "absolute",
          top: -10,
          left: 30,
          height: 150, // Increase height
          width: "auto", 
        }}
      />
      {/* Formulaire de connexion */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          width: 350,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#1c2b39">
          Connectez-vous !
        </Typography>

        <TextField
          fullWidth
          label="Adresse email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mot de passe"
          type="password"
          variant="outlined"
          margin="normal"
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "#1c2b39",
            color: "white",
            mt: 2,
            "&:hover": { bgcolor: "#14202f" },
          }}
          fullWidth
        >
          Connexion
        </Button>

        <Link href="#" sx={{ display: "block", mt: 2, color: "gray" }}>
          Nouveau compte
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
