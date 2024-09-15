import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, IconButton } from '@mui/material';
import { Home, AccountCircle, Settings, ExitToApp, Close, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Sidebar({ open, onClose, user }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      if (user.type === 'cliente') {
        navigate('/perfil-cliente'); // Substitua pela rota do perfil do cliente
      } else if (user.type === 'trabalhador') {
        navigate('/perfil-trabalhador'); // Substitua pela rota do perfil do trabalhador
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleCreateAnuncio = () => {
    navigate('/criar-anuncio'); // Ajuste o caminho conforme sua configuração
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div style={{ width: 240 }}>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
          <IconButton
            onClick={onClose}
            style={{ position: 'absolute', top: 16, right: 16 }}
          >
            <Close />
          </IconButton>
          <Avatar
            src={user?.profilePicture || "link_para_imagem_de_perfil.jpg"} // Substitua com o link da imagem do perfil
            style={{ width: 80, height: 80, marginBottom: 16 }}
            onClick={handleProfileClick}
          />
          <h4>{user?.name || 'Usuário'}</h4>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/home')}>
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
          <ListItem button onClick={handleCreateAnuncio}>
            <ListItemIcon><Add /></ListItemIcon>
            <ListItemText primary="Criar Anúncio" />
          </ListItem>
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
