const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const trabalhadorController = require('../controllers/trabalhadorController');

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage: storage });

// Rota para criar um novo trabalhador
router.post('/trabalhador', upload.single('foto_perfil'), trabalhadorController.criarTrabalhador);

// Rota para obter um trabalhador por ID
router.get('/trabalhador/:id', trabalhadorController.obterTrabalhadorPorId);

// Rota para obter todos os trabalhadores
router.get('/trabalhador', trabalhadorController.obterTodosTrabalhadores);

// Rota para editar um trabalhador
router.put('/trabalhador/:id', trabalhadorController.editarTrabalhador);

// Rota para excluir um trabalhador
router.delete('/trabalhador/:id', trabalhadorController.excluirTrabalhador);

module.exports = router;
