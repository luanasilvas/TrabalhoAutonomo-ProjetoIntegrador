// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; // Adicione esta linha
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/anuncios" onClick={onClose}>
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary="Anúncios" />
        </ListItem>
        <ListItem button component={Link} to="/perfil-cliente" onClick={onClose}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Perfil Cliente" />
        </ListItem>
        <ListItem button component={Link} to="/perfil-trabalhador" onClick={onClose}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Perfil Trabalhador" />
        </ListItem>
        <ListItem button component={Link} to="/avaliacao-feedback" onClick={onClose}>
          <ListItemIcon><RateReviewIcon /></ListItemIcon>
          <ListItemText primary="Avaliação" />
        </ListItem>
        <ListItem button component={Link} to="/enviar-proposta" onClick={onClose}>
          <ListItemIcon><MailOutlineIcon /></ListItemIcon>
          <ListItemText primary="Enviar Proposta" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
