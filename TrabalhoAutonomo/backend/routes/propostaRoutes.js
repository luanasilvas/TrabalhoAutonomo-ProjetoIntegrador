// routes/propostaRoutes.js
const express = require('express');
const router = express.Router();
const propostaController = require('../controllers/propostaController');

// Rotas para Propostas
router.post('/proposta', propostaController.criarProposta);
router.get('/proposta/:id', propostaController.obterPropostaPorId);
router.get('/proposta', propostaController.obterTodasPropostas);
router.put('/proposta/:id', propostaController.editarProposta);
router.delete('/proposta/:id', propostaController.excluirProposta);

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const propostaController = require('../controllers/propostaController');

// // Rotas para Propostas
// router.post('/proposta', propostaController.criarProposta);
// router.get('/proposta/:id', propostaController.obterPropostaPorId);
// router.get('/proposta', propostaController.obterTodasPropostas);
// router.put('/proposta/:id', propostaController.editarProposta);
// router.delete('/proposta/:id', propostaController.excluirProposta);

// module.exports = router;
