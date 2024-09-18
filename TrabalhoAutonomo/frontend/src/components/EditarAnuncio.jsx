// EditarAnuncio.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarAnuncio = () => {
  const { id } = useParams(); // Pega o ID do anúncio da URL
  const navigate = useNavigate();
  const [anuncioData, setAnuncioData] = useState({
    titulo: '',
    descricao: '',
    preco: ''
  });

  useEffect(() => {const fetchAnuncio = async () => {
    try {
      console.log(`URL da requisição: http://localhost:5173/api/anuncios/${id}`);
      const response = await axios.get(`/api/anuncios/${id}`);
      // Código para manipular a resposta
    } catch (error) {
      console.error("Erro ao buscar o anúncio:", error);
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
      // Redireciona para a página correta após salvar
      navigate(`/detalhes-anuncio/${id}`);
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
    }
  };

  return (
    <div>
      <h2>Editar Anúncio</h2>
      <input
        type="text"
        name="titulo"
        value={anuncioData.titulo}
        onChange={handleInputChange}
        placeholder="Título"
      />
      <textarea
        name="descricao"
        value={anuncioData.descricao}
        onChange={handleInputChange}
        placeholder="Descrição"
      />
      <input
        type="text"
        name="preco"
        value={anuncioData.preco}
        onChange={handleInputChange}
        placeholder="Preço"
      />
      <button onClick={handleSave}>Salvar Alterações</button>
    </div>
  );
};

export default EditarAnuncio;
