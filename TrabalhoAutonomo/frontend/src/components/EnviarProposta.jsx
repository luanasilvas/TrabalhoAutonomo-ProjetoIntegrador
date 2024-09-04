import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

function EnviarProposta() {
  const { id } = useParams();
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Enviar Proposta
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Mensagem"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Enviar Proposta
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EnviarProposta;
