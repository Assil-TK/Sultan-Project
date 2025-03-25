import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Card, CardContent, CardMedia, Grid, ButtonBase } from '@mui/material';
import logo from '../assets/effia.png'; 
import Hero from '../assets/hero.png';
import centreVille from '../assets/centre.jpg';
import culturel from '../assets/cult.jpg';
import voirie from '../assets/roul.jpg';
import ParkingImage from '../assets/services.jpg';

const parkingOptions = [
  { title: 'Parking De Centre-Ville', description: 'Parking du Centre, Parking Cathédrale, Parking Laderoute...', image: centreVille },
  { title: 'Parking « Culturel »', description: 'Parking IPO, Parking Kinopolis...', image: culturel },
  { title: 'Parking De Voirie', description: 'Stationnement dans la ville de Braine-le-Comte, Stationnement dans la ville de Roussel...', image: voirie },
];

const Header = () => (
  <AppBar position="fixed" sx={{ backgroundColor: '#1B374C', borderBottom: '5px solid #F39325' }}>
    <Toolbar>
      <Box component="img" src={logo} alt="EFFIA Logo" sx={{ height: 20 }} />
      <Box sx={{ flexGrow: 1 }} />
      <Button color="inherit" sx={{ fontFamily: 'Fira Sans, sans-serif' }}>QUI SOMMES NOUS ?</Button>
      <Button variant="outlined" color="inherit" sx={{ marginLeft: 2 }}>FR +</Button>
    </Toolbar>
  </AppBar>
);

const HeroSection = () => (
  <Box
    sx={{
      width: '100%',
      height: '480px',
      backgroundImage: `url(${Hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
    }}
  >
    <Typography variant="h4" sx={{ fontFamily: 'Fira Sans, sans-serif' }}>Bienvenue dans nos parkings</Typography>
  </Box>
);

const ParkingOptions = () => (
  <Box sx={{ padding: '6% 8% 3%', textAlign: 'center', fontFamily: 'Fira Sans, sans-serif' }}>
    <Typography variant="h4" gutterBottom>Réservez votre place ou souscrivez un abonnement dans le parking qui vous convient</Typography>
    <Grid container spacing={4} justifyContent="center" padding={5}>
      {parkingOptions.map((option, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ButtonBase sx={{ width: '100%', borderRadius: '10px' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia component="img" alt={option.title} height="200" image={option.image} title={option.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{option.title}</Typography>
                <Typography variant="body2" color="text.secondary">{option.description}</Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const ServicesSection = () => (
  <Box
    sx={{
      width: '100%',
      height: '500px',
      backgroundImage: `url(${ParkingImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      textAlign: 'center',
    }}
  >
    <Box sx={{ zIndex: 1, padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        EFFIA, acteur majeur du stationnement en Belgique.
      </Typography>
      <Typography variant="body1">
        EFFIA, filiale du groupe Keolis, s'installe au cœur des enjeux de la mobilité. Près de nos clients, nous facilitons leurs déplacements.
      </Typography>
      <Box sx={{ padding: '4% 0', display: 'flex', justifyContent: 'center' }}>
        {[['38', 'villes'], ['81', 'parkings'], ['44 220', 'places']].map(([number, label], i) => (
          <Box key={i} sx={{ margin: '0 10px', textAlign: 'center' }}>
            <Typography variant="h5">{number}</Typography>
            <Typography variant="body1">{label}</Typography>
          </Box>
        ))}
      </Box>
      <Button variant="outlined" sx={{ marginTop: '20px', borderColor: '#FFFFFF', color: '#FFFFFF' }}>
        DÉCOUVREZ TOUS NOS SERVICES
      </Button>
    </Box>
  </Box>
);



const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <ParkingOptions />
    <ServicesSection />
  </>
);

export default HomePage;
