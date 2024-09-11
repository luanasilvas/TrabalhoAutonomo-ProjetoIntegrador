const express = require('express');
const router = express.Router();
const trabalhadorController = require('../controllers/trabalhadorController');

// Rota para criar um novo trabalhador
router.post('/trabalhador', trabalhadorController.criarTrabalhador);

// Rota para obter um trabalhador por ID
router.get('/trabalhador/:id', trabalhadorController.obterTrabalhadorPorId);

// Rota para obter todos os trabalhadores
router.get('/trabalhador', trabalhadorController.obterTodosTrabalhadores);

// Rota para editar um trabalhador
router.put('/trabalhador/:id', trabalhadorController.editarTrabalhador);

// Rota para excluir um trabalhador
router.delete('/trabalhador/:id', trabalhadorController.excluirTrabalhador);

module.exports = router;
