const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const db = require('./db/dbConnection'); // Ajuste o caminho conforme necessário

// Importando os modelos
const Usuario = require('./models/usuarioModel')(db);
const Cliente = require('./models/clienteModel')(db);
const Trabalhador = require('./models/profissionalModel')(db);
const Anuncio = require('./models/anuncioModel')(db);

// Middleware
app.use(cors());
app.use(express.json());

// Importando as rotas
const anuncioRoutes = require('./routes/anuncioRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const propostaRoutes = require('./routes/propostaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use('/anuncios', anuncioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/propostas', propostaRoutes);
app.use('/usuarios', usuarioRoutes);

// Sincronização dos modelos com o banco de dados
db.sync({ force: false }) // Use { force: true } para recriar tabelas
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar as tabelas:', error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});