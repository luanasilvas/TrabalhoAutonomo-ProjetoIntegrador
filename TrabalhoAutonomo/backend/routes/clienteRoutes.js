const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.criarCliente);
router.get('/:id', clienteController.obterClientePorId);

module.exports = router;