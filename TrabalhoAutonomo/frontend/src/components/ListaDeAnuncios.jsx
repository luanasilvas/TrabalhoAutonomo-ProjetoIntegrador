import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaDeAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true); // Adicionado para gerenciar o estado de carregamento
  const [error, setError] = useState(null); // Adicionado para gerenciar erros

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await axios.get('/api/anuncios'); // Altere o URL para o endpoint da sua API
        setAnuncios(response.data);
      } catch (error) {
        console.error('Erro ao carregar os anúncios', error);
        setError(error);
      } finally {
        setLoading(false); // Remove o carregamento após a requisição
      }
    };

    fetchAnuncios();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os anúncios</div>;
  }

  return (
    <div>
      {anuncios.length > 0 ? (
        anuncios.map(anuncio => (
          <div key={anuncio.id}>
            <h2>{anuncio.titulo}</h2>
            <p>{anuncio.descricao}</p>
          </div>
        ))
      ) : (
        <div>Nenhum anúncio encontrado</div>
      )}
    </div>
  );
};

export default ListaDeAnuncios;
