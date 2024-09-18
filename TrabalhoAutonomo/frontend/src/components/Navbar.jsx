import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Importa o Sidebar criado

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Estado para abrir/fechar o Drawer

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/signup');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer} // Abre/Fecha o Drawer
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Botão de Voltar para Home */}
          <IconButton color="inherit" onClick={handleGoHome}>
            <HomeIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Autonomeu
          </Typography>

          {isLoggedIn && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar open={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
}

export default Navbar;
