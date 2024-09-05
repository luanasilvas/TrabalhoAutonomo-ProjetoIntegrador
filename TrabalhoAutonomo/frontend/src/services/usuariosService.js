import api from './api';

export const loginUsuario = async (dados) => {
  try {
    const response = await api.post('/login', dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export const cadastrarUsuario = async (dados) => {
  try {
    const response = await api.post('/usuarios', dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

export const getPerfilUsuario = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar perfil do usuário:", error);
    throw error;
  }
};
