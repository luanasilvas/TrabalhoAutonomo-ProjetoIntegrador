import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Anuncios = () => {
  const [anuncios, setAnuncios] = useState([]); // Estado para armazenar os anúncios
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const location = useLocation(); // Hook para obter o estado da localização
  const subcategoria = location.state?.subcategoria; // Obtém a subcategoria do estado da localização

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        // Requisição GET para buscar anúncios com base na subcategoria
        const response = await axios.get('/api/anuncios', {
          params: { categoria: subcategoria } // Passa a subcategoria como parâmetro de consulta
        });
        setAnuncios(response.data); // Atualiza o estado com os dados dos anúncios
      } catch (error) {
        console.error('Erro ao carregar os anúncios', error); // Trata erros na requisição
      } finally {
        setLoading(false); // Define o estado de carregamento como falso após a requisição
      }
    };

    fetchAnuncios(); // Chama a função para buscar anúncios
  }, [subcategoria]); // Dependência para re-executar o efeito quando a subcategoria mudar

  if (loading) {
    return <div>Carregando...</div>; // Exibe mensagem de carregamento enquanto os dados são buscados
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Anúncios - {subcategoria} {/* Exibe o título da página com a subcategoria */}
      </Typography>
      <Grid container spacing={4}>
        {anuncios.map((anuncio) => (
          <Grid item key={anuncio.id_anuncio} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={anuncio.imagem || 'link_para_imagem_default.jpg'} // Exibe imagem do anúncio ou uma imagem padrão
                alt={`Imagem do anúncio ${anuncio.titulo}`}
              />
              <CardContent>
                <Typography variant="h6">{anuncio.titulo}</Typography> {/* Exibe o título do anúncio */}
                <Typography variant="body2" color="textSecondary">
                  {anuncio.descricao} {/* Exibe a descrição do anúncio */}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Preço: {anuncio.preco} {/* Exibe o preço do anúncio */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Anuncios;
