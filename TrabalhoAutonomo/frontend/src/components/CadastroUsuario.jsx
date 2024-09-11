import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importação do Link

function CadastroUsuario() {
  const [username, setUsername] = useState(''); // Adiciona o campo username
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [historicoContratacoes, setHistoricoContratacoes] = useState(''); // Adiciona o campo historicoContratacoes
  const [avaliacao, setAvaliacao] = useState(''); // Adiciona o campo avaliacao
  const [localizacao, setLocalizacao] = useState(''); // Adiciona o campo localizacao
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:3000/clientes/cliente', {
        username,
        nome,
        email,
        senha,
        historico_contratacoes: historicoContratacoes,
        avaliacao,
        localizacao
      });
      setMensagem('Usuário cadastrado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao cadastrar usuário');
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          component={Link}
          to="/registrar-profissional"
          variant="outlined"
        >
          Cadastro de Profissional
        </Button>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Cadastro de Usuário
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <TextField
          label="Confirmar Senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <TextField
          label="Histórico de Contratações"
          variant="outlined"
          fullWidth
          margin="normal"
          value={historicoContratacoes}
          onChange={(e) => setHistoricoContratacoes(e.target.value)}
        />
        <TextField
          label="Avaliação"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
        />
        <TextField
          label="Localização"
          variant="outlined"
          fullWidth
          margin="normal"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Cadastrar
        </Button>
      </form>
      {mensagem && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {mensagem}
        </Typography>
      )}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
