import React, { useEffect, useState } from 'react';
import { getAnuncios } from '../services/anunciosService';

const ListaDeAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    const fetchAnuncios = async () => {
      try {
        const data = await getAnuncios();
        setAnuncios(data);
      } catch (error) {
        console.error('Erro ao carregar os anúncios', error);
      }
    };

    fetchAnuncios();
  }, []);

  return (
    <div>
      {anuncios.map(anuncio => (
        <div key={anuncio.id}>
          <h2>{anuncio.titulo}</h2>
          <p>{anuncio.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaDeAnuncios;
