import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CriarAnuncio() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtendo o ID do trabalhador logado no localStorage
    const id_trabalhador = localStorage.getItem('id');

    if (!id_trabalhador) {
      alert('Erro: Você precisa estar logado como trabalhador para criar um anúncio.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/anuncios/anuncio', {
        id_trabalhador, // Incluindo o ID do trabalhador logado
        titulo,
        descricao,
        preco
      });

      console.log('Anúncio criado:', res.data);
      navigate('/lista-anuncios'); // Redireciona para a lista de anúncios
    } catch (error) {
      console.error('Erro ao criar anúncio:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do Anúncio"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <button type="submit">Criar Anúncio</button>
    </form>
  );
}
