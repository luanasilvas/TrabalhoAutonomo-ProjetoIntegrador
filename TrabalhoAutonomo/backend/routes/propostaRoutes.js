const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastro-usuario', usuarioController.cadastrarUsuario);

module.exports = router;
