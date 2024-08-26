import React from 'react';
import { useLocation } from 'react-router-dom';

function PaginaAnuncios() {
  const location = useLocation();
  const { subcategoria } = location.state || {};

  return (
    <div>
      <h1>Anúncios para {subcategoria}</h1>
      {/* Lógica para exibir os anúncios aqui */}
    </div>
  );
}

export default PaginaAnuncios;
