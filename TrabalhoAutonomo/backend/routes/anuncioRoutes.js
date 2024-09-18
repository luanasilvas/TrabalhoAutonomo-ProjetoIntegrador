const express = require('express');
const router = express.Router();
const anuncioController = require('../controllers/anuncioController');
const upload = require('../middlewares/multerConfig'); // Importando o middleware

// Definições de rotas
router.get('/', anuncioController.getAllAnuncios); 
router.post('/', upload.single('foto'), anuncioController.createAnuncio); // Adicionando o middleware para upload de arquivos
router.get('/:id', anuncioController.getAnuncioById);
router.put('/:id', upload.single('foto'), anuncioController.updateAnuncio); // Adicionando o middleware para upload de arquivos
router.delete('/:id', anuncioController.deleteAnuncio);

// Rota para anúncios por categoria
router.get('/categoria/:categoriaId', anuncioController.getAnunciosPorCategoria);

module.exports = router;
