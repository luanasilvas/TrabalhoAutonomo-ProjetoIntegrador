const db = require('../models');
const Anuncio = db.Anuncio;

// Função para buscar todos os anúncios
exports.getAllAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.findAll();
    res.status(200).json(anuncios);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncios.', erro: err.message });
  }
};

// Função para criar um anúncio
exports.createAnuncio = async (req, res) => {
  const { titulo, descricao, preco, id_trabalhador, categoria } = req.body;

  console.log('Dados recebidos:', { titulo, descricao, preco, id_trabalhador, categoria });

  if (!id_trabalhador) {
    return res.status(400).json({ mensagem: 'ID do trabalhador é necessário.' });
  }

  if (!categoria) {
    return res.status(400).json({ mensagem: 'Categoria é necessária.' });
  }

  try {
    const novoAnuncio = await Anuncio.create({
      titulo,
      descricao,
      preco,
      id_trabalhador,
      categoria
    });
    console.log('Anúncio criado:', novoAnuncio);
    res.status(201).json({ mensagem: 'Anúncio criado com sucesso!', anuncio: novoAnuncio });
  } catch (err) {
    console.error('Erro ao criar anúncio:', err);
    res.status(500).json({ mensagem: 'Erro ao criar anúncio.', erro: err.message });
  }
};

// Função para obter anúncios por categoria
exports.getAnunciosPorCategoria = async (req, res) => {
  const categoria = req.query.categoria;
  console.log(`Categoria recebida: ${categoria}`); // Adicione isto para depuração
  try {
    const anuncios = await Anuncio.findAll({ where: { categoria: categoria } });
    res.json(anuncios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar anúncios' });
  }
};

// Função para buscar um anúncio por ID
exports.getAnuncioById = async (req, res) => {
  const { id } = req.params;
  try {
    const anuncio = await Anuncio.findByPk(id);
    if (anuncio) {
      res.status(200).json(anuncio);
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncio.', erro: err.message });
  }
};

// Função para atualizar um anúncio
exports.updateAnuncio = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, preco, id_trabalhador, categoria } = req.body;

  try {
    const [updated] = await Anuncio.update(
      { titulo, descricao, preco, id_trabalhador, categoria },
      { where: { id_anuncio: id } }
    );
    if (updated) {
      res.status(200).json({ mensagem: 'Anúncio atualizado com sucesso!' });
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar anúncio.', erro: err.message });
  }
};

// Função para deletar um anúncio
exports.deleteAnuncio = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Anuncio.destroy({ where: { id_anuncio: id } });
    if (deleted) {
      res.status(200).json({ mensagem: 'Anúncio deletado com sucesso!' });
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar anúncio.', erro: err.message });
  }
};
