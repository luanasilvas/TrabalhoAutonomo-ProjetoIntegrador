const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para criar um novo cliente
router.post('/cliente', clienteController.criarCliente);

// Rota para obter um cliente por ID
router.get('/cliente/:id', clienteController.obterClientePorId);

// Rota para obter todos os clientes
router.get('/cliente', clienteController.obterTodosClientes);

// Rota para editar um cliente
router.put('/cliente/:id', clienteController.editarCliente);

// Rota para excluir um cliente
router.delete('/cliente/:id', clienteController.excluirCliente);

module.exports = router;
