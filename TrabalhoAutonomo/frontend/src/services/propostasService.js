import api from './api';

export const getPropostas = async () => {
  try {
    const response = await api.get('/propostas');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar propostas:", error);
    throw error;
  }
};

export const enviarProposta = async (dados) => {
  try {
    const response = await api.post('/propostas', dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar proposta:", error);
    throw error;
  }
};

export const getPropostasPorUsuario = async (idUsuario) => {
  try {
    const response = await api.get(`/propostas/usuario/${idUsuario}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar propostas do usuário:", error);
    throw error;
  }
};
