import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

function CadastroUsuario() {
  const [username, setUsername] = useState(''); 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [localizacao, setLocalizacao] = useState(''); 
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!'); // Verifica se as senhas coincidem
      return;
    }
    
    try {
      // Requisição POST para criar um novo usuário
      await axios.post('http://localhost:3000/clientes/cliente', {
        username,
        nome,
        email,
        senha,
        localizacao
      });
      setMensagem('Usuário cadastrado com sucesso!'); // Mensagem de sucesso
      navigate('/'); // Redireciona para a página inicial após o cadastro
    } catch (error) {
      setMensagem('Erro ao cadastrar usuário'); // Mensagem de erro
      console.error('Erro ao cadastrar usuário:', error); // Loga o erro no console
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
          {mensagem} {/* Exibe mensagem de feedback ao usuário */}
        </Typography>
      )}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography>
          Já tem uma conta? <Link to="/login">Entrar</Link> {/* Link para a página de login */}
        </Typography>
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
