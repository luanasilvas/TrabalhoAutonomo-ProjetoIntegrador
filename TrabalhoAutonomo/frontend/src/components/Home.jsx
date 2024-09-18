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
    // Redireciona para a página de anúncios filtrados pela categoria
    navigate(`/lista-anuncios/${categoriaId}`);
  };

  const servicos = [
    { nome: 'Diarista', descricao: 'Profissional responsável pela limpeza e organização de residências e escritórios.', imagem: img1 },
    { nome: 'Mestre de obra', descricao: 'Especialista em coordenação e execução de projetos de construção e reformas.', imagem: img2 },
    { nome: 'Eletricista', descricao: 'Profissional qualificado para instalação, manutenção e reparo de sistemas elétricos.', imagem: img3 },
    { nome: 'Editor de vídeos', descricao: 'Responsável pela edição e finalização de vídeos para diversos fins, como comerciais e clipes.', imagem: img4 },
    { nome: 'Desenvolvedor', descricao: 'Programador que cria e mantém software, websites e aplicativos.', imagem: img5 },
    { nome: 'Redator', descricao: 'Especialista na criação de textos para blogs, artigos, e conteúdos publicitários.', imagem: img6 },
    { nome: 'Mudanças', descricao: 'Serviço de transporte e mudança de móveis e bens de um local para outro.', imagem: img7 },
    { nome: 'Fotógrafo', descricao: 'Profissional que captura imagens para eventos, portfólios e mais.', imagem: img8 }
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
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;
