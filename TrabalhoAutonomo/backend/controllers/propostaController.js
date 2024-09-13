// controllers/propostaController.js
const { Proposta, Cliente, Trabalhador } = require('../models');

const criarProposta = async (req, res) => {
  const { id_cliente, id_trabalhador, descricao, valor } = req.body;

  try {
    const novaProposta = await Proposta.create({
      id_cliente,
      id_trabalhador,
      descricao,
      valor,
    });

    res.status(201).json(novaProposta);
  } catch (error) {
    console.error('Erro ao criar proposta:', error);
    res.status(500).json({ message: 'Erro ao criar proposta', error });
  }
};

const obterPropostaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const proposta = await Proposta.findByPk(id);

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    res.status(200).json(proposta);
  } catch (error) {
    console.error('Erro ao obter proposta:', error);
    res.status(500).json({ message: 'Erro ao obter proposta', error });
  }
};

const obterTodasPropostas = async (req, res) => {
  try {
    const propostas = await Proposta.findAll();
    res.status(200).json(propostas);
  } catch (error) {
    console.error('Erro ao obter todas as propostas:', error);
    res.status(500).json({ message: 'Erro ao obter propostas', error });
  }
};

const editarProposta = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, status } = req.body;

  try {
    const proposta = await Proposta.findByPk(id);

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    proposta.descricao = descricao || proposta.descricao;
    proposta.valor = valor || proposta.valor;
    proposta.status = status || proposta.status;

    await proposta.save();

    res.status(200).json(proposta);
  } catch (error) {
    console.error('Erro ao editar proposta:', error);
    res.status(500).json({ message: 'Erro ao editar proposta', error });
  }
};

const excluirProposta = async (req, res) => {
  const { id } = req.params;

  try {
    const proposta = await Proposta.findByPk(id);

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    await proposta.destroy();
    res.status(200).json({ message: 'Proposta excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir proposta:', error);
    res.status(500).json({ message: 'Erro ao excluir proposta', error });
  }
};

module.exports = { criarProposta, obterPropostaPorId, obterTodasPropostas, editarProposta, excluirProposta };
