// EditarAnuncio.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';

const EditarAnuncio = () => {
  const { id } = useParams(); // Pega o ID do anúncio da URL
  const navigate = useNavigate();
  const [anuncioData, setAnuncioData] = useState({
    titulo: '',
    descricao: '',
    preco: ''
  });
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchAnuncio = async () => {
      try {
        const response = await axios.get(`/api/anuncios/${id}`);
        setAnuncioData(response.data);
      } catch (error) {
        setErro('Erro ao buscar o anúncio.');
        console.error('Erro ao buscar o anúncio:', error);
      }
    };

    fetchAnuncio();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnuncioData({ ...anuncioData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/anuncios/${id}`, anuncioData);
      // Redireciona para a página de lista de anúncios após salvar
      navigate('/lista-anuncios');
    } catch (error) {
      setErro('Erro ao salvar as alterações.');
      console.error('Erro ao salvar as alterações:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Editar Anúncio
      </Typography>
      {erro && <Alert severity="error">{erro}</Alert>}
      <TextField
        label="Título"
        name="titulo"
        value={anuncioData.titulo}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Descrição"
        name="descricao"
        value={anuncioData.descricao}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
      />
      <TextField
        label="Preço"
        name="preco"
        value={anuncioData.preco}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSave} 
        fullWidth
        style={{ marginTop: '1rem' }}
      >
        Salvar Alterações
      </Button>
    </Container>
  );
};

export default EditarAnuncio;
