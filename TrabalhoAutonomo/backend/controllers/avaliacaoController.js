const db = require('../db/dbConnection'); // Ajuste o caminho conforme necessário
const Avaliacao = db.Avaliacao;

// Função para criar uma avaliação
const criarAvaliacao = async (req, res) => {
  const { id_trabalhador, id_cliente, comentario, nota } = req.body; // Desestruturação dos dados da requisição
  try {
    const novaAvaliacao = await Avaliacao.create({
      id_trabalhador,
      id_cliente,
      comentario,
      nota
    });
    res.status(201).json(novaAvaliacao); // Retorna a avaliação criada
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avaliação', error }); // Tratamento de erro com status 500
  }
};

// Função para buscar avaliações por trabalhador
const obterAvaliacoesPorTrabalhador = async (req, res) => {
  const { id_trabalhador } = req.params; // Pega o ID do trabalhador da URL
  try {
    const avaliacoes = await Avaliacao.findAll({ where: { id_trabalhador } }); // Busca todas as avaliações do trabalhador
    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma avaliação encontrada para este trabalhador' });
    }
    res.status(200).json(avaliacoes); // Retorna as avaliações encontradas
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter avaliações', error }); // Tratamento de erro com status 500
  }
};

// Função para buscar avaliações por cliente
const obterAvaliacoesPorCliente = async (req, res) => {
  const { id_cliente } = req.params; // Pega o ID do cliente da URL
  try {
    const avaliacoes = await Avaliacao.findAll({ where: { id_cliente } }); // Busca todas as avaliações do cliente
    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma avaliação encontrada para este cliente' });
    }
    res.status(200).json(avaliacoes); // Retorna as avaliações encontradas
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter avaliações', error }); // Tratamento de erro com status 500
  }
};

module.exports = { criarAvaliacao, obterAvaliacoesPorTrabalhador, obterAvaliacoesPorCliente };