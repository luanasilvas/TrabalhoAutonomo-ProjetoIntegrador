const db = require('../models');
const Proposta = db.Proposta;

const criarProposta = async (req, res) => {
  const { id_anuncio, id_cliente, mensagem, preco_oferecido } = req.body;

  try {
    const novaProposta = await Proposta.create({
      id_anuncio,
      id_cliente,
      mensagem,
      preco_oferecido,
      status: 'pendente'
    });

    res.status(201).json(novaProposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar proposta', error });
  }
};

const obterPropostaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const proposta = await Proposta.findOne({ where: { id_proposta: id } });
    
    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    res.status(200).json(proposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter proposta', error });
  }
};

const atualizarStatusProposta = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const proposta = await Proposta.findOne({ where: { id_proposta: id } });

    if (!proposta) {
      return res.status(404).json({ message: 'Proposta não encontrada' });
    }

    proposta.status = status;
    await proposta.save();

    res.status(200).json(proposta);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar proposta', error });
  }
};

module.exports = { criarProposta, obterPropostaPorId, atualizarStatusProposta };
