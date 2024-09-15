const bcrypt = require('bcrypt');
const db = require('../models');
const Cliente = db.Cliente;

// Função para criar um cliente (POST /clientes)
const criarCliente = async (req, res) => {
  const { username, nome, email, senha, historico_contratacoes, avaliacao, localizacao } = req.body;

  try {
    // Validação básica para campos obrigatórios
    if (!username || !nome || !email || !senha) {
      return res.status(400).json({ message: 'Os campos username, nome, email e senha são obrigatórios.' });
    }

    // Verifica se o cliente com o mesmo email já existe
    const clienteExistente = await Cliente.findOne({ where: { email } });
    if (clienteExistente) {
      return res.status(400).json({ message: 'Email já está em uso.' });
    }

    // Hash da senha
    const hashSenha = await bcrypt.hash(senha, 10);

    // Criação de um novo cliente
    const novoCliente = await Cliente.create({
      username,
      nome,
      email,
      senha: hashSenha,
      historico_contratacoes,
      avaliacao,
      localizacao
    });

    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ message: 'Erro ao criar cliente', error });
  }
};

// Função para obter um cliente por ID (GET /clientes/:id)
const obterClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca o cliente pelo ID
    const cliente = await Cliente.findOne({ where: { id_cliente: id } });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error('Erro ao obter cliente:', error);
    res.status(500).json({ message: 'Erro ao obter cliente', error });
  }
};

// Função para obter todos os clientes (GET /clientes)
const obterTodosClientes = async (req, res) => {
  try {
    // Busca todos os clientes
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Erro ao obter todos os clientes:', error);
    res.status(500).json({ message: 'Erro ao obter clientes', error });
  }
};

// Função para editar um cliente (PUT /clientes/:id)
const editarCliente = async (req, res) => {
  const { id } = req.params;
  const { username, nome, email, senha, historico_contratacoes, avaliacao, localizacao } = req.body;

  try {
    // Busca o cliente pelo ID
    const cliente = await Cliente.findOne({ where: { id_cliente: id } });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Atualiza a senha se for enviada
    if (senha) {
      cliente.senha = await bcrypt.hash(senha, 10);
    }

    // Atualiza os outros campos se forem enviados
    cliente.username = username || cliente.username;
    cliente.nome = nome || cliente.nome;
    cliente.email = email || cliente.email;
    cliente.historico_contratacoes = historico_contratacoes || cliente.historico_contratacoes;
    cliente.avaliacao = avaliacao || cliente.avaliacao;
    cliente.localizacao = localizacao || cliente.localizacao;

    await cliente.save();

    res.status(200).json(cliente);
  } catch (error) {
    console.error('Erro ao editar cliente:', error);
    res.status(500).json({ message: 'Erro ao editar cliente', error });
  }
};

// Função para excluir um cliente (DELETE /clientes/:id)
const excluirCliente = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca o cliente pelo ID
    const cliente = await Cliente.findOne({ where: { id_cliente: id } });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Exclui o cliente
    await cliente.destroy();

    res.status(200).json({ message: 'Cliente excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    res.status(500).json({ message: 'Erro ao excluir cliente', error });
  }
};

module.exports = { criarCliente, obterClientePorId, obterTodosClientes, editarCliente, excluirCliente };
