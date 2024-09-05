import api from './api';

export const getAvaliacoes = async () => {
  try {
    const response = await api.get('/avaliacoes');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    throw error;
  }
};

export const enviarAvaliacao = async (dados) => {
  try {
    const response = await api.post('/avaliacoes', dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar avaliação:", error);
    throw error;
  }
};

export const getAvaliacoesPorUsuario = async (idUsuario) => {
  try {
    const response = await api.get(`/avaliacoes/usuario/${idUsuario}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar avaliações do usuário:", error);
    throw error;
  }
};
