import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

function DetalhesAnuncio() {
  const { id } = useParams();
  // Adicione a lógica para obter os detalhes do anúncio usando o ID

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Detalhes do Anúncio
        </Typography>
        <Typography variant="h6">Descrição: [Descrição]</Typography>
        <Typography variant="h6">Fotos do Portfólio: [Fotos]</Typography>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href={`/proposta/${id}`}
        >
          Enviar Proposta
        </Button>
      </Box>
    </Container>
  );
}

export default DetalhesAnuncio;
