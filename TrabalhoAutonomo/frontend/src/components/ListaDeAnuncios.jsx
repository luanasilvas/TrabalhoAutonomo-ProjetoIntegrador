import React, { useEffect, useState } from 'react';
import { obterTodosAnuncios } from '../services/api'; // Importa a função da API
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const ListaDeAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await obterTodosAnuncios(); // Usa a função da API
        setAnuncios(response.data);
      } catch (error) {
        console.error('Erro ao carregar os anúncios', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnuncios();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6" color="error">Erro ao carregar os anúncios</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Anúncios
      </Typography>
      {anuncios.length > 0 ? (
        <Grid container spacing={3}>
          {anuncios.map((anuncio) => (
            <Grid item xs={12} sm={6} md={4} key={anuncio.id_anuncio}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {anuncio.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {anuncio.descricao}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                    Preço: R$ {anuncio.preco}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">Nenhum anúncio encontrado</Typography>
      )}
    </Box>
  );
};

export default ListaDeAnuncios;
