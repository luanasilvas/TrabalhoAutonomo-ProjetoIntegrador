import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

function AvaliacaoFeedback() {
  const { id } = useParams();
  const [avaliacao, setAvaliacao] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Avaliação e Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Avaliação (1-5)"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
          />
          <TextField
            label="Comentário"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Enviar Avaliação
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AvaliacaoFeedback;
