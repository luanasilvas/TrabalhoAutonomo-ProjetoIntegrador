const db = require('../models');
const Anuncio = db.Anuncio;

exports.getAllAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.findAll(); // Usa Sequelize para buscar todos os anúncios
    res.status(200).json(anuncios);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncios.', erro: err });
  }
};

exports.createAnuncio = async (req, res) => {
  const { titulo, descricao, preco, id_profissional } = req.body;
  try {
    const novoAnuncio = await Anuncio.create({
      titulo,
      descricao,
      preco,
      id_profissional
    }); // Usa Sequelize para criar um novo anúncio
    res.status(201).json({ mensagem: 'Anúncio criado com sucesso!', anuncio: novoAnuncio });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar anúncio.', erro: err });
  }
};

exports.getAnuncioById = async (req, res) => {
  const { id } = req.params;
  try {
    const anuncio = await Anuncio.findByPk(id); // Usa Sequelize para buscar um anúncio por ID
    if (anuncio) {
      res.status(200).json(anuncio);
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncio.', erro: err });
  }
};

exports.updateAnuncio = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, preco, id_profissional } = req.body;
  try {
    const [updated] = await Anuncio.update(
      { titulo, descricao, preco, id_profissional },
      { where: { id } }
    ); // Usa Sequelize para atualizar o anúncio
    if (updated) {
      res.status(200).json({ mensagem: 'Anúncio atualizado com sucesso!' });
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar anúncio.', erro: err });
  }
};

exports.deleteAnuncio = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Anuncio.destroy({ where: { id } }); // Usa Sequelize para deletar o anúncio
    if (deleted) {
      res.status(200).json({ mensagem: 'Anúncio deletado com sucesso!' });
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar anúncio.', erro: err });
  }
};