const express = require('express');
const { criarTrabalhador, obterTrabalhadorPorId } = require('../controllers/profissionalController');
const router = express.Router();

router.post('/', criarTrabalhador);
router.get('/:id', obterTrabalhadorPorId);

module.exports = router;
