const db = require('../models');
const Anuncio = db.Anuncio;

// Função para buscar todos os anúncios
exports.getAllAnuncios = async (req, res) => {
  try {
    // Usa Sequelize para buscar todos os registros na tabela 'Anuncios'
    const anuncios = await Anuncio.findAll();
    res.status(200).json(anuncios); // Retorna a lista de anúncios com status 200
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncios.', erro: err }); // Tratamento de erro com status 500
  }
};

// Função para criar um anúncio
exports.createAnuncio = async (req, res) => {
  const { titulo, descricao, preco, id_trabalhador, categoria } = req.body; // Desestruturação do corpo da requisição
  
  console.log('Dados recebidos:', { titulo, descricao, preco, id_trabalhador, categoria });

  // Verifica se o ID do trabalhador foi passado
  if (!id_trabalhador) {
    return res.status(400).json({ mensagem: 'ID do trabalhador é necessário.' }); // Retorna erro de requisição inválida
  }

  // Verifica se a categoria foi passada
  if (!categoria) {
    return res.status(400).json({ mensagem: 'Categoria é necessária.' });
  }

  try {
    // Cria um novo anúncio no banco de dados
    const novoAnuncio = await Anuncio.create({
      titulo,
      descricao,
      preco,
      id_trabalhador,
      categoria // Adiciona categoria
    });
    console.log('Anúncio criado:', novoAnuncio);
    res.status(201).json({ mensagem: 'Anúncio criado com sucesso!', anuncio: novoAnuncio }); // Retorna o anúncio criado com status 201
  } catch (err) {
    console.error('Erro ao criar anúncio:', err);
    res.status(500).json({ mensagem: 'Erro ao criar anúncio.', erro: err.message }); // Tratamento de erro com status 500
  }
};

// Função para buscar um anúncio por ID
exports.getAnuncioById = async (req, res) => {
  const { id } = req.params; // Pega o ID da URL
  try {
    const anuncio = await Anuncio.findByPk(id); // Busca o anúncio pelo ID primário
    if (anuncio) {
      res.status(200).json(anuncio); // Retorna o anúncio encontrado
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' }); // Retorna erro caso o anúncio não exista
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar anúncio.', erro: err }); // Tratamento de erro com status 500
  }
};

// Função para atualizar um anúncio
exports.updateAnuncio = async (req, res) => {
  const { id } = req.params; // Pega o ID do anúncio a ser atualizado
  const { titulo, descricao, preco, id_trabalhador, categoria } = req.body; // Adiciona categoria na atualização

  try {
    // Atualiza o anúncio com os dados fornecidos
    const [updated] = await Anuncio.update(
      { titulo, descricao, preco, id_trabalhador, categoria }, // Inclui categoria
      { where: { id_anuncio: id } } // Corrige o nome da coluna
    );
    if (updated) {
      res.status(200).json({ mensagem: 'Anúncio atualizado com sucesso!' }); // Sucesso na atualização
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' }); // Erro se o anúncio não foi encontrado
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar anúncio.', erro: err }); // Tratamento de erro com status 500
  }
};

// Função para deletar um anúncio
exports.deleteAnuncio = async (req, res) => {
  const { id } = req.params; // Pega o ID do anúncio a ser deletado
  try {
    const deleted = await Anuncio.destroy({ where: { id_anuncio: id } }); // Deleta o anúncio
    if (deleted) {
      res.status(200).json({ mensagem: 'Anúncio deletado com sucesso!' }); // Sucesso na exclusão
    } else {
      res.status(404).json({ mensagem: 'Anúncio não encontrado.' }); // Erro se o anúncio não foi encontrado
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar anúncio.', erro: err }); // Tratamento de erro com status 500
  }
};
