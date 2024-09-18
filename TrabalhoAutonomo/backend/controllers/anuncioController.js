const db = require('../models/index');

// Função para obter todos os anúncios
exports.getAllAnuncios = async (req, res) => {
  try {
    const anuncios = await db.Anuncio.findAll();
    res.status(200).json(anuncios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os anúncios', error });
  }
};

// Função para criar um novo anúncio
exports.createAnuncio = async (req, res) => {
  try {
    const novoAnuncio = await db.Anuncio.create(req.body);
    res.status(201).json(novoAnuncio);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o anúncio', error });
  }
};

// Função para obter um anúncio por ID
exports.getAnuncioById = async (req, res) => {
  try {
    const anuncio = await db.Anuncio.findByPk(req.params.id);
    if (anuncio) {
      res.status(200).json(anuncio);
    } else {
      res.status(404).json({ message: 'Anúncio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o anúncio', error });
  }
};

// Função para atualizar um anúncio
exports.updateAnuncio = async (req, res) => {
  try {
    const [updated] = await db.Anuncio.update(req.body, {
      where: { id_anuncio: req.params.id }
    });
    if (updated) {
      const updatedAnuncio = await db.Anuncio.findByPk(req.params.id);
      res.status(200).json(updatedAnuncio);
    } else {
      res.status(404).json({ message: 'Anúncio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o anúncio', error });
  }
};

// Função para excluir um anúncio
exports.deleteAnuncio = async (req, res) => {
  try {
    const deleted = await db.Anuncio.destroy({
      where: { id_anuncio: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Anúncio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o anúncio', error });
  }
};

// Função para obter anúncios por categoria
exports.getAnunciosPorCategoria = async (req, res) => {
  try {
    const anuncios = await db.Anuncio.findAll({
      where: {
        categoria_id: req.params.categoriaId
      }
    });
    res.status(200).json(anuncios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar anúncios por categoria', error });
  }
};
