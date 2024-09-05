const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Carregar variáveis de ambiente

// Inicialização do Express
const app = express();
const port = process.env.PORT || 3000;

// Importar as rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const propostaRoutes = require('./routes/propostaRoutes');
const anuncioRoutes = require('./routes/anuncioRoutes');

// Middleware
app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Analisar o corpo das requisições como JSON

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/propostas', propostaRoutes);
app.use('/anuncios', anuncioRoutes);

// Conectar ao banco de dados e sincronizar modelos
const db = require('./models/index');
console.log(db.Usuario);  // Deve exibir a definição do modelo Usuario
console.log(db.Trabalhador);  // Deve exibir a definição do modelo Trabalhador

// Testar a conexão com o banco de dados
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincronizar os modelos com o banco de dados
    db.sequelize.sync() // Para sincronização básica
    // db.sequelize.sync({ force: true }) // Para sincronização com força (exclui e recria tabelas)
      .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
        // Iniciar o servidor
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
