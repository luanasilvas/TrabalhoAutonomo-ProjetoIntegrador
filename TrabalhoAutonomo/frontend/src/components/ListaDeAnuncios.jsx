import React, { useEffect, useState } from 'react';
import { obterTodosAnuncios } from '../services/api'; // Importa a função da API

const ListaDeAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const response = await obterTodosAnuncios(); // Usa a função da API
        setAnuncios(response.data);
      } catch (error) {
        console.error('Erro ao carregar os anúncios', error);
        setError(error);
      } finally {
        setLoading(false);
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
          <div key={anuncio.id_anuncio}>
            <h2>{anuncio.titulo}</h2>
            <p>{anuncio.descricao}</p>
            <p>Preço: {anuncio.preco}</p>
          </div>
        ))
      ) : (
        <div>Nenhum anúncio encontrado</div>
      )}
    </div>
  );
};

export default ListaDeAnuncios;
