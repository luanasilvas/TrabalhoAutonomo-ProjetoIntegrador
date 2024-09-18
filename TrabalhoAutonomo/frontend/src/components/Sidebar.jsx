import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, IconButton, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Close, Home, AccountCircle, Settings, Add, ExitToApp } from '@mui/icons-material';

function Sidebar({ open, onClose }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Atualiza o estado do usuário com base nos dados armazenados
    const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
    setUserData(storedUserData);

    // Listener para mudanças no localStorage, para atualizar o Sidebar quando houver mudanças
    const handleStorageChange = () => {
      const updatedUserData = JSON.parse(localStorage.getItem('user')) || {};
      setUserData(updatedUserData);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleProfileClick = () => {
    navigate(`/perfil-${userData.type?.toLowerCase()}`);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Você deseja realmente sair?');
    if (confirmLogout) {
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // Limpa também o token se houver
      setUserData({}); // Limpa o estado do usuário
      navigate('/signup'); // Redireciona para a página de login
    }
  };

  const handleLogin = () => {
    navigate('/signup');
  };

  const handleSignup = () => {
    navigate('/cadastro-usuario');
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open} onClose={onClose}>
      <div style={{ width: 240 }}>
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
          <IconButton onClick={onClose} style={{ position: 'absolute', top: 16, right: 16 }}>
            <Close />
          </IconButton>
          {userData.nome ? (
            <>
              <Avatar
                src={userData.foto_perfil || "/default-avatar.jpg"}
                style={{ width: 80, height: 80, marginBottom: 16 }}
                onClick={handleProfileClick}
              />
              <h4>{userData.nome || 'Usuário'}</h4>
            </>
          ) : (
            <div style={{ padding: '16px' }}>
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="contained" color="secondary" onClick={handleSignup} style={{ marginTop: '8px' }}>
                Cadastrar
              </Button>
            </div>
          )}
        </div>
        <Divider />
        <List>
          {userData.nome ? (
            <>
              <ListItem button onClick={() => navigate('/')}>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Início" />
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
            </>
          ) : null}
        </List>
      </div>
    </Drawer>
  );
}

export default Sidebar;
