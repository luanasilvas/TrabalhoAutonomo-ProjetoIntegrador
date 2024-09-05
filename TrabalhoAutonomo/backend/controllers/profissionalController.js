const bcrypt = require('bcrypt');
const db = require('../models');
const Usuario = db.Usuario;
const Trabalhador = db.Trabalhador;

const criarTrabalhador = async (req, res) => {
  const { nome, email, senha, descricao, habilidades, localizacao } = req.body;

  try {
    const hashSenha = await bcrypt.hash(senha, 10);

    // Cria um usuário e escolhe o tipo trabalhador
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hashSenha,
      tipo_usuario: 'trabalhador'
    });

    // Cria o trabalhador
    const novoTrabalhador = await Trabalhador.create({
      id_usuario: novoUsuario.id_usuario,
      descricao,
      habilidades,
      localizacao
    });

    res.status(201).json({ usuario: novoUsuario, trabalhador: novoTrabalhador });
  } catch (error) {
    console.error('Erro ao criar trabalhador:', error);
    res.status(500).json({ message: 'Erro ao criar trabalhador', error });
  }
};

const obterTrabalhadorPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const trabalhador = await Trabalhador.findOne({
      where: { id_trabalhador: id },
      include: Usuario,
    });

    if (!trabalhador) {
      return res.status(404).json({ message: 'Trabalhador não encontrado' });
    }

    res.status(200).json(trabalhador);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter trabalhador', error });
  }
};

module.exports = { criarTrabalhador, obterTrabalhadorPorId };


