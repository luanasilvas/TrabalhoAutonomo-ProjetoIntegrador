import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

// Funções para a API de Trabalhadores
export const criarTrabalhador = (data) => api.post('/trabalhadores/trabalhador', data);
export const obterTrabalhadorPorId = (id) => api.get(`/trabalhadores/trabalhador/${id}`);
export const obterTodosTrabalhadores = () => api.get('/trabalhadores/trabalhador');
export const editarTrabalhador = (id, data) => api.put(`/trabalhadores/trabalhador/${id}`, data);
export const excluirTrabalhador = (id) => api.delete(`/trabalhadores/trabalhador/${id}`);

// Funções para a API de Clientes
export const criarCliente = (data) => api.post('/clientes/cliente', data);
export const obterClientePorId = (id) => api.get(`/clientes/cliente/${id}`);
export const obterTodosClientes = () => api.get('/clientes/cliente');
export const editarCliente = (id, data) => api.put(`/clientes/cliente/${id}`, data);
export const excluirCliente = (id) => api.delete(`/clientes/cliente/${id}`);

// Funções para a API de Anúncios
export const criarAnuncio = (data) => {
  const headers = { 'Content-Type': 'multipart/form-data' }; // Use `multipart/form-data` para arquivos
  return api.post('/anuncios', data, { headers });
};
export const obterAnuncioPorId = (id) => api.get(`/anuncios/${id}`);
export const obterTodosAnuncios = () => api.get('/anuncios');
export const editarAnuncio = (id, data) => {
  const headers = { 'Content-Type': 'multipart/form-data' }; // Use `multipart/form-data` para arquivos
  return api.put(`/anuncios/${id}`, data, { headers });
};
export const excluirAnuncio = (id) => api.delete(`/anuncios/${id}`);

// Correção na função para obter anúncios por categoria
export const obterAnunciosPorCategoria = (categoriaId) => api.get(`/anuncios?categoria=${categoriaId}`);

// Funções para a API de Propostas
export const criarProposta = (data) => api.post('/propostas/proposta', data);
export const obterPropostaPorId = (id) => api.get(`/propostas/proposta/${id}`);
export const obterTodasPropostas = () => api.get('/propostas/proposta');
export const editarProposta = (id, data) => api.put(`/propostas/proposta/${id}`, data);
export const excluirProposta = (id) => api.delete(`/propostas/proposta/${id}`);

// Funções para a API de Avaliações
export const criarAvaliacao = (data) => api.post('/avaliacoes/avaliacao', data);
export const obterAvaliacoesPorTrabalhador = (id) => api.get(`/avaliacoes/trabalhador/${id}`);
export const obterAvaliacoesPorCliente = (id) => api.get(`/avaliacoes/cliente/${id}`);

// Função para login
export const login = (email, senha) => api.post('/login/login', { email, senha });

export default api;
