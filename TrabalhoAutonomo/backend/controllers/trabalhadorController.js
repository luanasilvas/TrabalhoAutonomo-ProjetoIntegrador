const bcrypt = require('bcrypt');
const db = require('../models');
const Trabalhador = db.Trabalhador;

// Função para criar um trabalhador
const criarTrabalhador = async (req, res) => {
  const { username, nome, email, senha, descricao, habilidades, localizacao, avaliacao, foto_perfil } = req.body;

  try {
    if (!username || !nome || !email || !senha) {
      return res.status(400).json({ message: 'Os campos username, nome, email e senha são obrigatórios.' });
    }

    const trabalhadorExistente = await Trabalhador.findOne({ where: { email } });
    if (trabalhadorExistente) {
      return res.status(400).json({ message: 'Email já está em uso.' });
    }

    const hashSenha = await bcrypt.hash(senha, 10);

    const novoTrabalhador = await Trabalhador.create({
      username,
      nome,
      email,
      senha: hashSenha,
      descricao,
      habilidades,
      localizacao,
      avaliacao,
      foto_perfil
    });

    res.status(201).json(novoTrabalhador);
  } catch (error) {
    console.error('Erro ao criar trabalhador:', error);
    res.status(500).json({ message: 'Erro ao criar trabalhador', error });
  }
};

// Função para obter um trabalhador por ID
const obterTrabalhadorPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const trabalhador = await Trabalhador.findOne({ 
      where: { id_trabalhador: id }
    });

    if (!trabalhador) {
      return res.status(404).json({ message: 'Trabalhador não encontrado' });
    }

    res.status(200).json(trabalhador);
  } catch (error) {
    console.error('Erro ao obter trabalhador:', error);
    res.status(500).json({ message: 'Erro ao obter trabalhador', error });
  }
};

// Função para obter todos os trabalhadores
const obterTodosTrabalhadores = async (req, res) => {
  try {
    const trabalhadores = await Trabalhador.findAll();
    res.status(200).json(trabalhadores);
  } catch (error) {
    console.error('Erro ao obter todos os trabalhadores:', error);
    res.status(500).json({ message: 'Erro ao obter trabalhadores', error });
  }
};

// Função para editar um trabalhador
const editarTrabalhador = async (req, res) => {
  const { id } = req.params;
  const { username, nome, email, senha, descricao, habilidades, localizacao, avaliacao, foto_perfil } = req.body;

  try {
    const trabalhador = await Trabalhador.findOne({ where: { id_trabalhador: id } });

    if (!trabalhador) {
      return res.status(404).json({ message: 'Trabalhador não encontrado' });
    }

    if (senha) {
      trabalhador.senha = await bcrypt.hash(senha, 10);
    }

    trabalhador.username = username || trabalhador.username;
    trabalhador.nome = nome || trabalhador.nome;
    trabalhador.email = email || trabalhador.email;
    trabalhador.descricao = descricao || trabalhador.descricao;
    trabalhador.habilidades = habilidades || trabalhador.habilidades;
    trabalhador.localizacao = localizacao || trabalhador.localizacao;
    trabalhador.avaliacao = avaliacao || trabalhador.avaliacao;
    trabalhador.foto_perfil = foto_perfil || trabalhador.foto_perfil;

    await trabalhador.save();

    res.status(200).json(trabalhador);
  } catch (error) {
    console.error('Erro ao editar trabalhador:', error);
    res.status(500).json({ message: 'Erro ao editar trabalhador', error });
  }
};

// Função para excluir um trabalhador
const excluirTrabalhador = async (req, res) => {
  const { id } = req.params;

  try {
    const trabalhador = await Trabalhador.findOne({ where: { id_trabalhador: id } });

    if (!trabalhador) {
      return res.status(404).json({ message: 'Trabalhador não encontrado' });
    }

    await trabalhador.destroy();

    res.status(200).json({ message: 'Trabalhador excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir trabalhador:', error);
    res.status(500).json({ message: 'Erro ao excluir trabalhador', error });
  }
};

module.exports = { criarTrabalhador, obterTrabalhadorPorId, obterTodosTrabalhadores, editarTrabalhador, excluirTrabalhador };
