const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncioController');

router.get('/', anuncioController.getAllAnuncios);
router.post('/', anuncioController.createAnuncio);
router.get('/:id', anuncioController.getAnuncioById);
router.put('/:id', anuncioController.updateAnuncio);
router.delete('/:id', anuncioController.deleteAnuncio);

module.exports = router;