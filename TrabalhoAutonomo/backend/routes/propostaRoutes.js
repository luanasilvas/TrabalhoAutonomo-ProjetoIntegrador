const express = require('express');
const router = express.Router();
const propostaController = require('../controllers/propostaController');

// Rota para criar uma nova proposta
router.post('/proposta', propostaController.criarProposta);

// Rota para obter uma proposta por ID
router.get('/proposta/:id', propostaController.obterPropostaPorId);

// Rota para atualizar o status de uma proposta
router.put('/proposta/:id/status', propostaController.atualizarStatusProposta);

module.exports = router;
