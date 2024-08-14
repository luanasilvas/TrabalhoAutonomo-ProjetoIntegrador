import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        {/* Adicione as seções do painel de controle aqui */}
      </Box>
    </Container>
  );
}

export default Dashboard;
