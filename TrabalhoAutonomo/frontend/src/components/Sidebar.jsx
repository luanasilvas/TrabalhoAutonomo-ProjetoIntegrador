import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, IconButton } from '@mui/material';
import { Home, AccountCircle, Settings, ExitToApp, Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Você pode condicionalmente redirecionar com base no perfil do usuário ou outras regras
    navigate('/perfil-cliente');
    // Ou apenas uma das rotas
    // navigate('/perfil-trabalhador');
  };

  const handleLogout = () => {
    // Adicione aqui a lógica de logout
    navigate('/login');
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
            src="link_para_imagem_de_perfil.jpg" // Substitua com a URL ou caminho da imagem do perfil do usuário
            style={{ width: 80, height: 80, marginBottom: 16 }}
            onClick={handleProfileClick}
          />
          <h4>Nome do Usuário</h4> {/* Substitua com o nome do usuário */}
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
