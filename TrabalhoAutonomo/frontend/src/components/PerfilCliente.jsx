import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Divider, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import axios from 'axios';

function PerfilCliente() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    age: '',
    location: '',
    reviews: [],
    hiringHistory: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Substitua com a URL real da sua API
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddHiring = () => {
    const newHiring = { id: user.hiringHistory.length + 1, service: 'Novo Serviço', date: '2024-08-15', status: 'Pendente' };
    setUser((prevUser) => ({
      ...prevUser,
      hiringHistory: [...prevUser.hiringHistory, newHiring],
    }));
  };

  const handleDeleteHiring = (id) => {
    const updatedHistory = user.hiringHistory.filter((hire) => hire.id !== id);
    setUser((prevUser) => ({
      ...prevUser,
      hiringHistory: updatedHistory,
    }));
  };

  const handleDeleteProfile = () => {
    console.log('Perfil deletado');
  };

  return (
    <Container maxWidth="md" style={{ padding: 20 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          src={user.profilePicture}
          style={{ width: 120, height: 120, marginRight: 20 }}
        />
        <Box>
          {isEditing ? (
            <>
              <TextField label="Nome" name="name" value={user.name} onChange={handleProfileChange} fullWidth sx={{ mb: 2 }} />
              <TextField label="Email" name="email" value={user.email} onChange={handleProfileChange} fullWidth sx={{ mb: 2 }} />
              <TextField
                label="Bio"
                name="bio"
                value={user.bio}
                onChange={handleProfileChange}
                fullWidth
                sx={{ mb: 2 }}
                multiline
                rows={3}
              />
              <TextField label="Idade" name="age" value={user.age} onChange={handleProfileChange} fullWidth sx={{ mb: 2 }} />
              <TextField label="Localização" name="location" value={user.location} onChange={handleProfileChange} fullWidth sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" onClick={handleEditToggle}>Salvar</Button>
            </>
          ) : (
            <>
              <Typography variant="h4">{user.name}</Typography>
              <Typography variant="body1" color="text.secondary">{user.email}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{user.bio}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Idade: {user.age}</Typography>
              <Typography variant="body2" color="text.secondary">Localização: {user.location}</Typography>
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
        <Button variant="outlined" color="secondary" onClick={handleEditToggle} sx={{ mr: 2 }}>
          {isEditing ? 'Cancelar' : 'Editar Perfil'}
        </Button>
        <Button variant="outlined" color="error" onClick={handleDeleteProfile}>
          Excluir Perfil
        </Button>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Avaliações
      </Typography>
      {user.reviews.length > 0 ? (
        <Box sx={{ mb: 4 }}>
          {user.reviews.map((review) => (
            <Card key={review.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  {review.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.comment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Avaliação: {review.rating} estrelas
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Nenhuma avaliação disponível.
        </Typography>
      )}

      <Divider sx={{ mb: 4 }} />
      
      <Typography variant="h6" gutterBottom>
        Histórico de Contratações
      </Typography>
      {user.hiringHistory.length > 0 ? (
        <Grid container spacing={2}>
          {user.hiringHistory.map((hire) => (
            <Grid item xs={12} sm={6} key={hire.id}>
              <Card>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Serviço: {hire.service}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data: {hire.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {hire.status}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" color="error" onClick={() => handleDeleteHiring(hire.id)} sx={{ mt: 1 }}>
                      Excluir Contratação
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Nenhum histórico de contratações disponível.
        </Typography>
      )}

      <Button variant="contained" color="primary" onClick={handleAddHiring} sx={{ mt: 4 }}>
        Adicionar Nova Contratação
      </Button>
    </Container>
  );
}

export default PerfilCliente;
