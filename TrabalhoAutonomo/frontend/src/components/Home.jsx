import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/img/anton-SnKfmC1I9fU-unsplash.jpg'; // Importação de imagens para o carrossel
import img2 from '../assets/img/bermix-studio-nZZfP9QiQ6w-unsplash.jpg';
import img3 from '../assets/img/jeswin-thomas-dfRrpfYD8Iw-unsplash.jpg';
import img4 from '../assets/img/kal-visuals-zE3jMxLFCIg-unsplash.jpg';
import img5 from '../assets/img/marc-mueller-Lg8xTZjs6Lg-unsplash.jpg';
import img6 from '../assets/img/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg';
import img7 from '../assets/img/robinson-greig-HrnAxAUwle8-unsplash.jpg';
import img8 from '../assets/img/samsung-memory-seUxMX-DhAQ-unsplash.jpg';

function Home() {
  // Estado para controlar se a barra lateral está aberta ou fechada
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Estado para controlar o elemento de ancoragem do menu de subcategorias
  const [anchorEl, setAnchorEl] = useState(null);

  // Estado para armazenar as subcategorias disponíveis para a categoria selecionada
  const [subcategorias, setSubcategorias] = useState([]);

  // Hook para navegação programática entre páginas
  const navigate = useNavigate();

  // Função para abrir a barra lateral
  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  // Função para fechar a barra lateral
  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  // Função que é chamada ao clicar em uma categoria; define o menu de subcategorias
  const handleCategoriaClick = (event, categoria) => {
    setAnchorEl(event.currentTarget); // Define o elemento que ancorará o menu de subcategorias

    // Define as subcategorias com base na categoria clicada
    switch (categoria) {
      case 'Assistência Técnica':
        setSubcategorias(['Eletrônicos', 'Eletrodomésticos', 'Computadores']);
        break;
      case 'Aulas':
        setSubcategorias(['Música', 'Idiomas', 'Reforço Escolar']);
        break;
      case 'Design e Tecnologia':
        setSubcategorias(['Aparelhos Eletrônicos', 'Eletrodomésticos', 'Áudio e Vídeo', 'Web Design', 'Design Gráfico']);
        break;
      case 'Eventos':
        setSubcategorias(['Buffet', 'Decoração', 'Confeitaria', 'Carcés', 'DJs, Bandas e Cantores', 'Fotógrafo']);
        break;
      case 'Moda e Beleza':
        setSubcategorias(['Cabeleireiro(a)', 'Corte e Costura', 'Artesanato', 'Manicure', 'Estética', 'Maquiador(a)']);
        break;
      case 'Reforma e Reparos':
        setSubcategorias(['Pedreiro', 'Serralheiro', 'Serviços Gerais', 'Pintor']);
        break;
      case 'Serviços Domésticos':
        setSubcategorias(['Diarista', 'Babá', 'Cozinheira(o)', 'Lavadeira e Passadeira']);
        break;
      case 'Mudança e Automotivos':
        setSubcategorias(['Mudança', 'Transporte de Veículos']);
        break;
      case 'Pets':
        setSubcategorias(['Adestrador', 'Passeador', 'Banho e Tosa']);
        break;
      default:
        setSubcategorias([]);
        break;
    }
  };

  // Função que navega para a página de anúncios com a subcategoria selecionada
  const handleSubcategoriaClick = (subcategoria) => {
    navigate('/anuncios', { state: { subcategoria } });
    handleMenuClose();
  };

  // Função para fechar o menu de subcategorias
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Definição das categorias disponíveis na plataforma
  const categorias = [
    'Assistência Técnica', 'Aulas', 'Design e Tecnologia', 
    'Eventos', 'Moda e Beleza', 'Reformas e Construção', 
    'Serviços Domésticos', 'Fretes e Mudanças', 'Pets'
  ];

  // Definição dos serviços principais a serem exibidos no carrossel
  const servicos = [
    {
      nome: 'Diarista',
      descricao: '',
      imagem: img1,
    },
    {
      nome: 'Mestre de obra',
      descricao: 'Descrição do serviço 2',
      imagem: img2,
    },
    {
      nome: 'Eletricista',
      descricao: 'Descrição do serviço 3',
      imagem: img3,
    },
    {
      nome: 'Editor de videos',
      descricao: 'Descrição do serviço 4',
      imagem: img4,
    },
    {
      nome: 'Desenvolvedor',
      descricao: 'Descrição do serviço 5',
      imagem: img5,
    },
    {
      nome: 'Redator',
      descricao: 'Descrição do serviço 6',
      imagem: img6,
    },
    {
      nome: 'Mudanças',
      descricao: 'Descrição do serviço 7',
      imagem: img7,
    },
    {
      nome: 'Fotografo',
      descricao: 'Descrição do serviço 8',
      imagem: img8,
    },
  ];

  const dicasSeguranca = [
    {
      titulo: 'Dica 1',
      descricao: 'Descrição da dica 1',
      imagem: 'link_da_imagem_1',
    },
    {
      titulo: 'Dica 2',
      descricao: 'Descrição da dica 2',
      imagem: 'link_da_imagem_2',
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Componente da barra lateral */}
      <Sidebar open={sidebarOpen} onClose={handleDrawerClose} />
      
      {/* Conteúdo principal */}
      <div style={{ flexGrow: 1 }}>
        
        {/* Componente de navegação superior */}
        <Navbar onSidebarOpen={handleDrawerOpen} />
        
        {/* Container principal da página */}
        <Container maxWidth="lg" style={{ padding: 20 }}>
          
          {/* Bem-vindo à Plataforma */}
          <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Bem-vindo à Plataforma de Trabalho Autônomo
            </Typography>
            
            {/* Grid de categorias */}
            <Grid container spacing={2}>
              {categorias.map((categoria) => (
                <Grid item xs={12} sm={6} md={4} key={categoria}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    onClick={(event) => handleCategoriaClick(event, categoria)}
                  >
                    {categoria}
                  </Button>
                </Grid>
              ))}
            </Grid>

            {/* Menu de subcategorias */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {subcategorias.map((subcategoria, index) => (
                <MenuItem key={index} onClick={() => handleSubcategoriaClick(subcategoria)}>
                  {subcategoria}
                </MenuItem>
              ))}
            </Menu>

            {/* Carrossel de Principais Serviços */}
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

            {/* Seção sobre o site */}
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Sobre o Site
              </Typography>
              <Typography variant="body1">
                Nossa plataforma é dedicada a conectar trabalhadores autônomos com clientes em busca de serviços diversos. 
                Oferecemos uma ampla gama de categorias e subcategorias para ajudar nossos usuários a encontrar o profissional certo.
              </Typography>
            </Box>

            {/* Carrossel de Dicas de Segurança */}
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
