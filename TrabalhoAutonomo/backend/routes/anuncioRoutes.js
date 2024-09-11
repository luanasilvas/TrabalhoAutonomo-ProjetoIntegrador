const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncioController');

router.get('/anuncio', anuncioController.getAllAnuncios);
router.post('/anuncio', anuncioController.createAnuncio);
router.get('/anuncio/:id', anuncioController.getAnuncioById);
router.put('/anuncio/:id', anuncioController.updateAnuncio);
router.delete('/anuncio/:id', anuncioController.deleteAnuncio);

module.exports = router;