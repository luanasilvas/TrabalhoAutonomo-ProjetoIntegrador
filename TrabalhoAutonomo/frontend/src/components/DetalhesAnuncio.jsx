import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetalhesAnuncio = () => {
  const { id } = useParams(); // Pega o ID do anúncio da URL
  const [anuncio, setAnuncio] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchAnuncio = async () => {
      if (!id) {
        setErro('ID do anúncio não fornecido.');
        return;
      }

      try {
        const response = await axios.get(`/api/anuncios/${id}`);
        setAnuncio(response.data);
      } catch (error) {
        setErro('Erro ao buscar o anúncio.');
        console.error('Erro ao buscar o anúncio:', error);
      }
    };

    fetchAnuncio();
  }, [id]);

  if (erro) {
    return <p>{erro}</p>;
  }

  if (!anuncio) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>{anuncio.titulo}</h2>
      <p>{anuncio.descricao}</p>
      <p>Preço: {anuncio.preco}</p>
      <p>Data de Publicação: {anuncio.data_publicacao}</p>
      {/* Link para a página de edição */}
      <a href={`/editar-anuncio/${anuncio.id_anuncio}`}>Editar Anúncio</a>
    </div>
  );
};

export default DetalhesAnuncio;
