import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { categorias } from '../constants/categorias'; // Importando as categorias
import { TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

export default function CriarAnuncio() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); // Estado para a categoria
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtendo o ID do trabalhador logado no localStorage
    const id_trabalhador = localStorage.getItem('id');

    if (!id_trabalhador) {
      alert('Erro: Você precisa estar logado como trabalhador para criar um anúncio.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/anuncios/anuncio', {
        id_trabalhador,
        titulo,
        descricao,
        preco,
        categoria: categoriaSelecionada, // Incluindo a categoria selecionada
      });

      console.log('Anúncio criado:', res.data);
      navigate('/lista-anuncios');
    } catch (error) {
      console.error('Erro ao criar anúncio:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        margin: '0 auto',
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Criar Anúncio
      </Typography>

      <TextField
        label="Título do Anúncio"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Descrição"
        variant="outlined"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />

      <TextField
        label="Preço"
        variant="outlined"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="categoria-label">Categoria</InputLabel>
        <Select
          labelId="categoria-label"
          id="categoria"
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          label="Categoria"
          required
        >
          <MenuItem value="">
            <em>Selecione uma Categoria</em>
          </MenuItem>
          {categorias.map((categoria) => (
            <MenuItem key={categoria.id} value={categoria.nome}>
              {categoria.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Criar Anúncio
      </Button>
    </Box>
  );
}
