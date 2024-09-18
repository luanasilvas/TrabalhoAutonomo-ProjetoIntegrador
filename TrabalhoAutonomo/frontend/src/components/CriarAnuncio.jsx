import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CriarAnuncio() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [foto, setFoto] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const categorias = [
    'Assistência Técnica', 'Aulas', 'Design e Tecnologia', 
    'Eventos', 'Moda e Beleza', 'Reformas e Construção', 
    'Serviços Domésticos', 'Fretes e Mudanças', 'Pets'
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
    const idTrabalhador = storedUserData.id;

    if (!idTrabalhador) {
      setMensagem('Você deve estar logado para criar um anúncio.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('descricao', descricao);
      formData.append('preco', preco);
      formData.append('categoria', categoria);
      if (foto) {
        formData.append('foto', foto);
      }
      formData.append('id_trabalhador', idTrabalhador);

      const response = await axios.post('http://localhost:3000/anuncios/anuncio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMensagem('Anúncio criado com sucesso!');
      navigate(`/categoria/${categoria}`);  // Redireciona para a página da categoria
    } catch (error) {
      console.error('Erro ao criar anúncio:', error.response ? error.response.data : error.message);
      setMensagem('Erro ao criar anúncio. Verifique o console para mais detalhes.');
    }
  };

  const handleFileChange = (event) => {
    setFoto(event.target.files[0]);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Criar Anúncio
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <TextField
            label="Preço"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Categoria</InputLabel>
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              label="Categoria"
            >
              {categorias.map((cat) => (
                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Criar Anúncio
          </Button>
          {mensagem && <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>{mensagem}</Typography>}
        </form>
      </Box>
    </Container>
  );
}

export default CriarAnuncio;
