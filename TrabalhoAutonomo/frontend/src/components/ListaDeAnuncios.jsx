import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ListaDeAnuncios() {
  const { categoriaId } = useParams(); // Certifique-se de que o parâmetro é 'categoriaId'
  const [anuncios, setAnuncios] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/anuncios?categoria=${categoriaId}`);
        setAnuncios(response.data);
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
        setError('Erro ao buscar anúncios. Verifique o console para mais detalhes.');
      }
    };

    fetchAnuncios();
  }, [categoriaId]);

  const handleViewAnuncio = (id) => {
    navigate(`/anuncio/${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Anúncios - {categoriaId}
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Grid container spacing={2}>
        {anuncios.length > 0 ? (
          anuncios.map((anuncio) => (
            <Grid item xs={12} sm={6} md={4} key={anuncio.id_anuncio}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={anuncio.foto || '/default-image.jpg'} // Use `foto` se o nome da chave for `foto`
                  alt={anuncio.titulo}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {anuncio.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {anuncio.descricao}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    R${anuncio.preco || 'Gratuito'}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" onClick={() => handleViewAnuncio(anuncio.id_anuncio)}>
                    Ver Detalhes
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center">
            Nenhum anúncio encontrado.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default ListaDeAnuncios;
