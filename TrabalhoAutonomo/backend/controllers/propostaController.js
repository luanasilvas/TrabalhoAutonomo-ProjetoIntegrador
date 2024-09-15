const { Proposta, Cliente, Trabalhador } = require('../models');

// Função para criar uma proposta (POST /propostas)
const criarProposta = async (req, res) => {
  const { id_cliente, id_trabalhador, descricao, valor } = req.body;

  try {
    // Cria uma nova proposta
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

// Função para obter uma proposta por ID (GET /propostas/:id)
const obterPropostaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca a proposta pelo ID
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

// Função para obter todas as propostas (GET /propostas)
const obterTodasPropostas = async (req, res) => {
  try {
    // Busca todas as propostas
    const propostas = await Proposta.findAll();
    res.status(200).json(propostas);
  } catch (error) {
    console.error('Erro ao obter todas as propostas:', error);
    res.status(500).json({ message: 'Erro ao obter propostas', error });
  }
};

// Função para editar uma proposta (PUT /propostas/:id)
const editarProposta = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, status } = req.body;

  try {
    // Busca a proposta pelo ID
    const proposta = await Proposta.findByPk(id);

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    // Atualiza os campos se forem enviados
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

// Função para excluir uma proposta (DELETE /propostas/:id)
const excluirProposta = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca a proposta pelo ID
    const proposta = await Proposta.findByPk(id);

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    // Exclui a proposta
    await proposta.destroy();
    res.status(200).json({ message: 'Proposta excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir proposta:', error);
    res.status(500).json({ message: 'Erro ao excluir proposta', error });
  }
};

module.exports = { criarProposta, obterPropostaPorId, obterTodasPropostas, editarProposta, excluirProposta };
