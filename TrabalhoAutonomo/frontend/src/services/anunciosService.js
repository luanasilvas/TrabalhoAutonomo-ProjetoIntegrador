import api from './api';

export const getAnuncios = async () => {
  try {
    const response = await api.get('/anuncios');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    throw error;
  }
};

export const criarAnuncio = async (dados) => {
  try {
    const response = await api.post('/anuncios', dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar anúncio:", error);
    throw error;
  }
};

export const removerAnuncio = async (id) => {
  try {
    const response = await api.delete(`/anuncios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao remover anúncio:", error);
    throw error;
  }
};
