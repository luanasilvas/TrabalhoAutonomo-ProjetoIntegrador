const db = require('../models');
const Avaliacao = db.Avaliacao;

const criarAvaliacao = async (req, res) => {
  const { id_trabalhador, id_cliente, comentario, nota } = req.body;

  try {
    const novaAvaliacao = await Avaliacao.create({
      id_trabalhador,
      id_cliente,
      comentario,
      nota
    });

    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar avaliação', error });
  }
};

const obterAvaliacoesPorTrabalhador = async (req, res) => {
  const { id_trabalhador } = req.params;

  try {
    const avaliacoes = await Avaliacao.findAll({ where: { id_trabalhador } });

    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma avaliação encontrada para este trabalhador' });
    }

    res.status(200).json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter avaliações', error });
  }
};

const obterAvaliacoesPorCliente = async (req, res) => {
  const { id_cliente } = req.params;

  try {
    const avaliacoes = await Avaliacao.findAll({ where: { id_cliente } });

    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma avaliação encontrada para este cliente' });
    }

    res.status(200).json(avaliacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter avaliações', error });
  }
};

module.exports = { criarAvaliacao, obterAvaliacoesPorTrabalhador, obterAvaliacoesPorCliente };
