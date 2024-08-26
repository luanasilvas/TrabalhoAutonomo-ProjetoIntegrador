import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Rating, Box } from '@mui/material';

const anuncios = [
  {
    id: 1,
    fotoPerfil: 'https://via.placeholder.com/150',
    nomeTrabalhador: 'João Silva',
    avaliacao: 4.5,
    descricao: 'Serviço de jardinagem, manutenção de gramados e paisagismo.',
  },
  {
    id: 2,
    fotoPerfil: 'https://via.placeholder.com/150',
    nomeTrabalhador: 'Maria Souza',
    avaliacao: 4.0,
    descricao: 'Manicure e pedicure profissional, atendimento a domicílio.',
  },
  {
    id: 3,
    fotoPerfil: 'https://via.placeholder.com/150',
    nomeTrabalhador: 'Carlos Lima',
    avaliacao: 3.8,
    descricao: 'Serviços gerais de construção e reparos domésticos.',
  },
];

function Anuncios() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/perfil/${id}`);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Anúncios
      </Typography>
      <Grid container spacing={4}>
        {anuncios.map((anuncio) => (
          <Grid item key={anuncio.id} xs={12} sm={6} md={4}>
            <Card onClick={() => handleClick(anuncio.id)} style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="200"
                image={anuncio.fotoPerfil}
                alt={`Foto de ${anuncio.nomeTrabalhador}`}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{anuncio.nomeTrabalhador}</Typography>
                  <Rating value={anuncio.avaliacao} readOnly precision={0.5} />
                </Box>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {anuncio.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Anuncios;
