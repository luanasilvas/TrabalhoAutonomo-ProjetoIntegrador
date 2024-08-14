import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function PerfilCliente() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Perfil do Cliente
        </Typography>
        <Typography variant="h6">Histórico de Contratações: [Lista]</Typography>
        <Typography variant="h6">Avaliações: [Lista]</Typography>
        <Typography variant="h6">Localização: [Localização]</Typography>
      </Box>
    </Container>
  );
}

export default PerfilCliente;
