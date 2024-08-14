// src/components/Home.jsx
import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} onClose={handleDrawerClose} />
      <div style={{ flexGrow: 1 }}>
        <Navbar onSidebarOpen={handleDrawerOpen} />
        <div style={{ padding: 20 }}>
          <Container maxWidth="lg">
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Bem-vindo à Plataforma de Trabalho Autônomo
              </Typography>
              <Button
                component={Link}
                to="/registrar-usuario"
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
              >
                Registrar
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                color="secondary"
              >
                Entrar
              </Button>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
