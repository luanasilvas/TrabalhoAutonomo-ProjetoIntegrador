const db = require('../models');
const Usuario = db.Usuario;

// Criar um novo usuário
exports.cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = await Usuario.create({ nome, email, senha });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ message: 'Erro ao listar usuários', error: error.message });
  }
};

// Obter um usuário por ID
exports.obterUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    res.status(500).json({ message: 'Erro ao obter usuário', error: error.message });
  }
};

// Atualizar um usuário
exports.atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, username, senha } = req.body;

  try {
    const [updated] = await Usuario.update({ nome, email, username, senha }, { where: { id_usuario: id } });
    if (updated) {
      const usuarioAtualizado = await Usuario.findByPk(id);
      res.status(200).json({ message: 'Usuário atualizado com sucesso!', usuario: usuarioAtualizado });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
  }
};

// Excluir um usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Usuario.destroy({ where: { id_usuario: id } });
    if (deleted) {
      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ message: 'Erro ao excluir usuário', error: error.message });
  }
};