import React, { useState, useEffect } from 'react';
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

    const idTrabalhador = localStorage.getItem('idTrabalhador');

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

      const response = await axios.post('http://localhost:3000/anuncios/criar', formData, {
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
          <FormControl fullWidth margin="normal">
            <InputLabel>Categorias</InputLabel>
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria} value={categoria}>
                  {categoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" component="label" fullWidth>
            Upload de Foto
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Criar Anúncio
          </Button>
          {mensagem && (
            <Typography color={mensagem.includes('Erro') ? 'error' : 'success'} sx={{ mt: 2 }}>
              {mensagem}
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
}

export default CriarAnuncio;
