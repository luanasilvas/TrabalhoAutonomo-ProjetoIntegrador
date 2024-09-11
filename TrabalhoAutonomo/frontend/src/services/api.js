import axios from 'axios';

// Criar uma instância do axios com a URL base do back-end
const api = axios.create({
  baseURL: 'http://localhost:3000', // A URL base do servidor de back-end
});

// Função para realizar login
export const login = (email, senha) => {
  // Envia uma requisição POST para a rota de login do back-end
  return api.post('/auth/login', { email, senha });
};

// Função para criar um novo anúncio
export const criarAnuncio = (anuncioData) => {
  // Envia uma requisição POST para a rota de criação de anúncios no back-end
  return api.post('/anuncios', anuncioData);
};

// Função para obter anúncios por categoria
export const obterAnunciosPorCategoria = (categoria) => {
  // Envia uma requisição GET para a rota de obtenção de anúncios, com filtro por categoria
  return api.get(`/anuncios?categoria=${categoria}`);
};

// Função para fazer logout
export const logout = () => {
  // Envia uma requisição POST para a rota de logout do back-end
  return api.post('/auth/logout');
};

// Função para verificar o status de autenticação do usuário
export const isAuthenticated = async () => {
  try {
    // Envia uma requisição GET para verificar se o usuário está autenticado
    const response = await api.get('/auth/status');
    return response.data.authenticated; // Retorna o status de autenticação
  } catch (error) {
    console.error('Erro ao verificar autenticação', error);
    return false;
  }
};

// Função para registrar um novo usuário
export const signup = (userData) => {
  // Envia uma requisição POST para a rota de registro de usuários no back-end
  return api.post('/auth/signup', userData);
};

// Função para recuperar senha (esqueci a senha)
export const recuperarSenha = (email) => {
  // Envia uma requisição POST para a rota de recuperação de senha no back-end
  return api.post('/auth/forgot-password', { email });
};

// Exporta a instância padrão do axios criada com a URL base do back-end
export default api;
