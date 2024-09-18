import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, IconButton, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Close, Home, AccountCircle, Settings, Add, ExitToApp } from '@mui/icons-material';

function Sidebar({ open, onClose }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Corrija a chave aqui para 'user'
    const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
    setUserData(storedUserData);
  }, []);

  const handleProfileClick = () => {
    navigate(`/perfil-${userData.type?.toLowerCase()}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open} onClose={onClose}>
      <div style={{ width: 240 }}>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
          <IconButton onClick={onClose} style={{ position: 'absolute', top: 16, right: 16 }}>
            <Close />
          </IconButton>
          <Avatar
            src={userData.foto_perfil || "/default-avatar.jpg"}
            style={{ width: 80, height: 80, marginBottom: 16 }}
            onClick={handleProfileClick}
          />
          <h4>{userData.nome || 'Usuário'}</h4>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button onClick={handleProfileClick}>
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem button onClick={() => navigate('/settings')}>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
          {userData.type === 'trabalhador' && (
            <ListItem button onClick={() => navigate('/criar-anuncio')}>
              <ListItemIcon><Add /></ListItemIcon>
              <ListItemText primary="Criar Anúncio" />
            </ListItem>
          )}
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><ExitToApp /></ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default Sidebar;
