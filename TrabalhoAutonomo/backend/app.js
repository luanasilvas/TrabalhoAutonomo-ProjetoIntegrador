const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Importar as rotas
const trabalhadorRoutes = require('./routes/trabalhadorRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const propostaRoutes = require('./routes/propostaRoutes');
const anuncioRoutes = require('./routes/anuncioRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

// Usar as rotas
app.use('/trabalhadores', trabalhadorRoutes);
app.use('/clientes', clienteRoutes);
app.use('/propostas', propostaRoutes);
app.use('/anuncios', anuncioRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

// Conectar ao banco de dados e sincronizar modelos
const db = require('./models/index');

db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    db.sequelize.sync()
      .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
        app.listen(port, () => {
          console.log(`Servidor rodando na porta ${port}`);
        });
      })
      .catch((error) => {
        console.error('Erro ao sincronizar os modelos:', error);
      });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });
