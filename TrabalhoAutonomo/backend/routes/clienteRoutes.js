const express = require('express');
const { criarCliente, obterClientePorId } = require('../controllers/clienteController');
const router = express.Router();

router.post('/', criarCliente);
router.get('/:id', obterClientePorId);

module.exports = router;
