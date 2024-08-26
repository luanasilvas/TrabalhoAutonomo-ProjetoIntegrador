const Usuario = require('../models/usuarioModel');
const Clientes = require('../models/clientesModel');

const criarCliente = async (req, res) => {
  const { nome, email, senha, localizacao } = req.body;

  try {

    const hashSenha = await bcrypt.hash(senha, 10);

    // aqui cria um usuario e escolhe o tipo cliente
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hashSenha,
      tipo_usuario: 'cliente'
    });

    // Aqui cria o cliente
    const novoCliente = await Cliente.create({
      id_usuario: novoUsuario.id_usuario,
      localizacao
    });

    res.status(201).json({ usuario: novoUsuario, cliente: novoCliente });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar cliente' });
  }
};

const obterClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findOne({ where: { id_cliente: id }, include: Usuario });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter cliente' });
  }
};

module.exports = { criarCliente, obterClientePorId };
