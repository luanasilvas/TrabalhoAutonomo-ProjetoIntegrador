import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Card, CardContent, CardMedia, Grid, Divider, Button } from '@mui/material';
import axios from 'axios'; // Importar o axios para fazer requisições HTTP

function PerfilTrabalhador() {
  const [worker, setWorker] = useState({
    name: '',
    profession: '',
    description: '',
    profilePicture: '',
    portfolio: [],
    age: '',
    location: '',
    contact: '',
    skills: [],
    reviews: [],
    hiringHistory: [],
  });

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        // Substitua a URL pelo endpoint real da sua API
        const response = await axios.get('/api/worker/profile'); 
        setWorker(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do trabalhador:', error);
      }
    };

    fetchWorkerData();
  }, []);

  const handleEditProfile = () => {
    console.log('Editar Perfil');
  };

  const handleDeleteProfile = () => {
    console.log('Excluir Perfil');
  };

  const handleAddPortfolio = () => {
    console.log('Adicionar Projeto ao Portfólio');
  };

  const handleEditPortfolio = (index) => {
    console.log('Editar Projeto', index);
  };

  const handleDeletePortfolio = (index) => {
    console.log('Excluir Projeto', index);
  };

  return (
    <Container maxWidth="md" style={{ padding: 20 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          src={worker.profilePicture}
          style={{ width: 120, height: 120, marginRight: 20 }}
        />
        <Box>
          <Typography variant="h4">{worker.name}</Typography>
          <Typography variant="h6" color="text.secondary">{worker.profession}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{worker.description}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Idade: {worker.age}</Typography>
          <Typography variant="body2" color="text.secondary">Localização: {worker.location}</Typography>
          <Typography variant="body2" color="text.secondary">Contato: {worker.contact}</Typography>
          <Typography variant="body2" color="text.secondary">Habilidades: {worker.skills.join(', ')}</Typography>

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleEditProfile} sx={{ mr: 2 }}>
              Editar Perfil
            </Button>
            <Button variant="outlined" color="error" onClick={handleDeleteProfile}>
              Excluir Perfil
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Portfólio
      </Typography>
      <Grid container spacing={2}>
        {worker.portfolio.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Button variant="contained" color="primary" onClick={() => handleEditPortfolio(index)}>
                  Editar
                </Button>
                <Button variant="outlined" color="error" onClick={() => handleDeletePortfolio(index)}>
                  Excluir
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="success" onClick={handleAddPortfolio}>
          Adicionar Projeto
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        Avaliações
      </Typography>
      <Box sx={{ mb: 4 }}>
        {worker.reviews.length > 0 ? (
          worker.reviews.map((review, index) => (
            <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                {review.client}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avaliação: {review.rating} estrelas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comentário: {review.comment}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            Nenhuma avaliação disponível.
          </Typography>
        )}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        Histórico de Contratação
      </Typography>
      <Box sx={{ mb: 4 }}>
        {worker.hiringHistory.length > 0 ? (
          worker.hiringHistory.map((hire, index) => (
            <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                Cliente: {hire.client}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Serviço: {hire.service}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Data: {hire.date}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            Nenhum histórico de contratação disponível.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default PerfilTrabalhador;
