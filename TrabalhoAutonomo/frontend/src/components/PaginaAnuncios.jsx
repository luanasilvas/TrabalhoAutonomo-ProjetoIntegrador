import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Anuncios() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Anúncios
        </Typography>
        <Button
          component={Link}
          to="/anuncio-novo"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Criar Novo Anúncio
        </Button>
        {/* Lista de anúncios */}
      </Box>
    </Container>
  );
}

export default Anuncios;
