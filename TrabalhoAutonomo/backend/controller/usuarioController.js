const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Cria o token JWT
    const token = jwt.sign({ id: usuario.id_usuario, tipo_usuario: usuario.tipo_usuario }, 'token', { expiresIn: '1h' });

    // Retorna o token e o tipo de usuário
    res.json({ token, tipo_usuario: usuario.tipo_usuario });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = { login };
