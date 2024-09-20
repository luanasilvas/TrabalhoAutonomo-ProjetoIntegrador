// DetalhesAnuncio.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Button, CircularProgress, Alert, Box } from '@mui/material';

const DetalhesAnuncio = () => {
  const { id } = useParams(); // Pega o ID do anúncio da URL
  const navigate = useNavigate();
  const [anuncio, setAnuncio] = useState(null);
  const [erro, setErro] = useState(null);
  const [userData, setUserData] = useState({}); // Para armazenar os dados do usuário

  useEffect(() => {
    const fetchAnuncio = async () => {
      try {
        const response = await axios.get(`/api/anuncios/${id}`);
        setAnuncio(response.data);
      } catch (error) {
        setErro('Erro ao buscar o anúncio.');
        console.error('Erro ao buscar o anúncio:', error);
      }
    };

    const fetchUserData = () => {
      const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
      setUserData(storedUserData);
    };

    fetchAnuncio();
    fetchUserData();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja excluir este anúncio?')) {
      try {
        await axios.delete(`/api/anuncios/${id}`);
        // Redireciona para a lista de anúncios após a exclusão
        navigate('/lista-anuncios');
      } catch (error) {
        setErro('Erro ao excluir o anúncio.');
        console.error('Erro ao excluir o anúncio:', error);
      }
    }
  };

  if (erro) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Alert severity="error">{erro}</Alert>
      </Container>
    );
  }

  if (!anuncio) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          Carregando...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {anuncio.titulo}
      </Typography>
      <Typography variant="body1" paragraph>
        {anuncio.descricao}
      </Typography>
      <Typography variant="h6" component="p">
        Preço: <strong>{anuncio.preco}</strong>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Data de Publicação: {anuncio.data_publicacao}
      </Typography>
      {/* Novos campos de contato */}
      <Typography variant="subtitle1" component="p">
        Email: <strong>{anuncio.email}</strong>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Telefone: <strong>{anuncio.telefone}</strong>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Redes Sociais: <strong>{anuncio.redes_sociais}</strong>
      </Typography>
      <Box textAlign="center" style={{ marginTop: '1.5rem' }}>
        {userData.type === 'trabalhador' && (
          <>
            <Button 
              variant="contained" 
              color="primary" 
              href={`/editar-anuncio/${anuncio.id_anuncio}`} 
              style={{ marginRight: '1rem' }}
            >
              Editar Anúncio
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={handleDelete}
            >
              Excluir Anúncio
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default DetalhesAnuncio;
