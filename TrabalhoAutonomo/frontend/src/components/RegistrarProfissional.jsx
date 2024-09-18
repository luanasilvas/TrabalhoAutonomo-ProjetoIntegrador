import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegistrarProfissional() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idade, setIdade] = useState('');
  const [foto, setFoto] = useState(null);
  const [localizacao, setLocalizacao] = useState('');
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const categorias = [
    'Assistência Técnica', 'Aulas', 'Design e Tecnologia', 
    'Eventos', 'Moda e Beleza', 'Reformas e Construção', 
    'Serviços Domésticos', 'Fretes e Mudanças', 'Pets'
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('email', email);
      formData.append('username', username);
      formData.append('senha', senha);
      formData.append('descricao', descricao);
      formData.append('localizacao', localizacao);
      formData.append('idade', idade);
      if (foto) {
        formData.append('foto_perfil', foto);
      }
      formData.append('categorias', categoriasSelecionadas.join(', '));

      const response = await axios.post('http://localhost:3000/trabalhadores/trabalhador', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { id_trabalhador } = response.data;
      if (id_trabalhador) {
        localStorage.setItem('idTrabalhador', id_trabalhador);
      }

      setMensagem(response.data.message || 'Cadastro realizado com sucesso!');
      navigate('/');  
    } catch (error) {
      console.error('Erro ao cadastrar profissional:', error.response ? error.response.data : error.message);
      setMensagem('Erro ao cadastrar profissional. Verifique o console para mais detalhes.');
    }
  };

  const handleFileChange = (event) => {
    setFoto(event.target.files[0]);
  };

  const handleCategoriaChange = (event) => {
    setCategoriasSelecionadas(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Cadastro de Profissional Autônomo
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            component={Link}
            to="/cadastro-usuario"
            color="secondary"
          >
            Voltar ao Cadastro de Usuário
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
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
            label="Nome de Usuário"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            label="Descrição"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <TextField
            label="Idade"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <TextField
            label="Localização"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />
          <Button variant="contained" component="label" fullWidth>
            Upload de Foto de Perfil
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <FormControl fullWidth margin="normal">
            <InputLabel>Categorias</InputLabel>
            <Select
              multiple
              value={categoriasSelecionadas}
              onChange={handleCategoriaChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria} value={categoria}>
                  {categoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Cadastrar
          </Button>
          {mensagem && (
            <Typography color={mensagem.includes('Erro') ? 'error' : 'success'} sx={{ mt: 2 }}>
              {mensagem}
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
}

export default RegistrarProfissional;
