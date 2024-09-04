const express = require('express');
const router = express.Router();
const profissionalController = require('../controllers/profissionalController');

router.post('/', profissionalController.criarTrabalhador);
router.get('/:id', profissionalController.obterTrabalhadorPorId);

module.exports = router;