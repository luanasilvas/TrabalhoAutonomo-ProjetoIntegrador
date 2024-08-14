import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

function PerfilTrabalhador() {
  const [editar, setEditar] = useState(false);
  const [descricao, setDescricao] = useState('');

  const handleSave = () => {
    // Adicione a lógica para salvar as alterações
    setEditar(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Perfil do Trabalhador
        </Typography>
        {editar ? (
          <form>
            <TextField
              label="Descrição"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ mt: 2 }}
            >
              Salvar
            </Button>
          </form>
        ) : (
          <Box>
            <Typography variant="h6">Descrição: {descricao}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setEditar(true)}
              sx={{ mt: 2 }}
            >
              Editar Perfil
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default PerfilTrabalhador;
