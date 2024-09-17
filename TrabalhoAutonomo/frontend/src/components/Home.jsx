// src/components/Home.jsx
import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/img/anton-SnKfmC1I9fU-unsplash.jpg';
import img2 from '../assets/img/bermix-studio-nZZfP9QiQ6w-unsplash.jpg';
import img3 from '../assets/img/jeswin-thomas-dfRrpfYD8Iw-unsplash.jpg';
import img4 from '../assets/img/kal-visuals-zE3jMxLFCIg-unsplash.jpg';
import img5 from '../assets/img/marc-mueller-Lg8xTZjs6Lg-unsplash.jpg';
import img6 from '../assets/img/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg';
import img7 from '../assets/img/robinson-greig-HrnAxAUwle8-unsplash.jpg';
import img8 from '../assets/img/samsung-memory-seUxMX-DhAQ-unsplash.jpg';
import { categorias } from '../constants/categorias';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };
  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  const handleCategoriaClick = (categoriaId) => {
    // Redireciona diretamente para a página de anúncios filtrados pela categoria
    navigate('lista-anuncios', { state: { categoriaId } });
  };

  const servicos = [
    { nome: 'Diarista', descricao: '', imagem: img1 },
    { nome: 'Mestre de obra', descricao: 'Descrição do serviço 2', imagem: img2 },
    { nome: 'Eletricista', descricao: 'Descrição do serviço 3', imagem: img3 },
    { nome: 'Editor de videos', descricao: 'Descrição do serviço 4', imagem: img4 },
    { nome: 'Desenvolvedor', descricao: 'Descrição do serviço 5', imagem: img5 },
    { nome: 'Redator', descricao: 'Descrição do serviço 6', imagem: img6 },
    { nome: 'Mudanças', descricao: 'Descrição do serviço 7', imagem: img7 },
    { nome: 'Fotografo', descricao: 'Descrição do serviço 8', imagem: img8 }
  ];

  const dicasSeguranca = [
    { titulo: 'Dica 1', descricao: 'Descrição da dica 1', imagem: 'link_da_imagem_1' },
    { titulo: 'Dica 2', descricao: 'Descrição da dica 2', imagem: 'link_da_imagem_2' }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} onClose={handleDrawerClose} />
      <div style={{ flexGrow: 1 }}>
        <Container maxWidth="lg" style={{ padding: 20 }}>
          <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Bem-vindo à Plataforma de Trabalho Autônomo
            </Typography>
            <Grid container spacing={2}>
              {categorias.map((categoria) => (
                <Grid item xs={12} sm={6} md={4} key={categoria.id}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    onClick={() => handleCategoriaClick(categoria.id)}
                  >
                    {categoria.nome}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h5" component="h2" gutterBottom>
              Principais Serviços
            </Typography>
            <Carousel animation="slide" navButtonsAlwaysVisible>
              {servicos.map((servico, index) => (
                <Card key={index} style={{ minWidth: 300, margin: '0 10px' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={servico.imagem}
                    alt={servico.nome}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {servico.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {servico.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Sobre o Site
              </Typography>
              <Typography variant="body1">
                Nossa plataforma é dedicada a conectar trabalhadores autônomos com clientes em busca de serviços diversos. 
                Oferecemos uma ampla gama de categorias para ajudar nossos usuários a encontrar o profissional certo.
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Dicas de Segurança
            </Typography>
            <Carousel animation="slide" navButtonsAlwaysVisible>
              {dicasSeguranca.map((dica, index) => (
                <Card key={index} style={{ minWidth: 300, margin: '0 10px' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={dica.imagem}
                    alt={dica.titulo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {dica.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dica.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;
