const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncioController');

// Definições de rotas
router.get('/', anuncioController.getAllAnuncios); 
router.post('/', anuncioController.createAnuncio);
router.get('/:id', anuncioController.getAnuncioById);
router.put('/:id', anuncioController.updateAnuncio);
router.delete('/:id', anuncioController.deleteAnuncio);

// Rota para anúncios por categoria
router.get('/categoria/:categoriaId', anuncioController.getAnunciosPorCategoria);

module.exports = router;
