const express = require('express');
const sequelize = require('./db/dbConnection');
const usuarioRoutes = require('/routes/usuario');
const profissionalRoutes = require('./routes/Profissionais');
const clienteRoutes = require('./routes/Clientes');

const app = express();
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/profissional', profissionalRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((err) => console.error('Erro ao conectar com o banco de dados:', err));
