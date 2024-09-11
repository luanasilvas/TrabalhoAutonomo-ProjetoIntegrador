const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Criar uma nova avaliação
router.post('/avaliacao', avaliacaoController.criarAvaliacao);

// Obter avaliações por trabalhador
router.get('/trabalhador/:id_trabalhador', avaliacaoController.obterAvaliacoesPorTrabalhador);

// Obter avaliações por cliente
router.get('/cliente/:id_cliente', avaliacaoController.obterAvaliacoesPorCliente);

module.exports = router;
