const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncioController');

// Definições de rotas
router.get('/anuncios', anuncioController.getAllAnuncios);
router.post('/anuncios', anuncioController.createAnuncio);
router.get('/anuncios/:id', anuncioController.getAnuncioById);
router.put('/anuncios/:id', anuncioController.updateAnuncio);
router.delete('/anuncios/:id', anuncioController.deleteAnuncio);

// Rota para anúncios por categoria
router.get('/anuncios/anuncio', anuncioController.getAnunciosPorCategoria);

module.exports = router;
