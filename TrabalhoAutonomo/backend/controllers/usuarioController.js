const db = require('../models');
const Usuario = db.Usuario;

exports.cadastrarUsuario = async (req, res) => {
  const { nome, email, username, senha } = req.body;

  try {
    const novoUsuario = await Usuario.create({
      nome,
      email,
      username,
      senha
    });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
};