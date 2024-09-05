const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Criar um novo usuário
router.post('/', usuarioController.cadastrarUsuario);

// Listar todos os usuários
router.get('/', usuarioController.listarUsuarios);

// Obter um usuário por ID
router.get('/:id', usuarioController.obterUsuarioPorId);

// Atualizar um usuário
router.put('/:id', usuarioController.atualizarUsuario);

// Excluir um usuário
router.delete('/:id', usuarioController.excluirUsuario);

module.exports = router;