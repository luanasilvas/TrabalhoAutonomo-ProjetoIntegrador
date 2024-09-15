import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

function RegistrarProfissional() {
  // Definindo os estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idade, setIdade] = useState('');
  const [foto, setFoto] = useState(null); // Estado para armazenar a foto de perfil
  const [localizacao, setLocalizacao] = useState('');
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [subcategoriasSelecionadas, setSubcategoriasSelecionadas] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Definindo as categorias e subcategorias disponíveis
  const categorias = [
    'Assistência Técnica', 'Aulas', 'Design e Tecnologia', 
    'Eventos', 'Moda e Beleza', 'Reformas e Construção', 
    'Serviços Domésticos', 'Fretes e Mudanças', 'Pets'
  ];

  const subcategorias = {
    'Assistência Técnica': ['Eletrônicos', 'Eletrodomésticos', 'Computadores'],
    'Aulas': ['Música', 'Idiomas', 'Reforço Escolar'],
    'Design e Tecnologia': ['Web Design', 'Design Gráfico', 'Programação'],
    'Eventos': ['Buffet', 'Decoração', 'Fotógrafo'],
    'Moda e Beleza': ['Cabeleireiro(a)', 'Manicure', 'Estética'],
    'Reformas e Construção': ['Pedreiro', 'Pintor', 'Eletricista'],
    'Serviços Domésticos': ['Diarista', 'Babá', 'Cozinheira(o)'],
    'Fretes e Mudanças': ['Mudança', 'Fretes'],
    'Pets': ['Adestrador', 'Passeador', 'Banho e Tosa']
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!');
      return;
    }

    try {
      // Cria um novo FormData para enviar dados do formulário e o arquivo de foto
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('email', email);
      formData.append('username', username);
      formData.append('senha', senha);
      formData.append('descricao', descricao);
      formData.append('localizacao', localizacao);
      formData.append('idade', idade);
      if (foto) {
        formData.append('foto_perfil', foto); // Adiciona o arquivo de foto ao FormData
      }
      formData.append('categorias', categoriasSelecionadas.join(', ')); // Adiciona categorias selecionadas
      formData.append('subcategorias', subcategoriasSelecionadas.join(', ')); // Adiciona subcategorias selecionadas

      // Envia os dados para o servidor
      const response = await axios.post('http://localhost:3000/trabalhadores/trabalhador', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Configura o tipo de conteúdo como multipart/form-data para upload de arquivos
        }
      });

      // Supondo que o backend retorne o ID do trabalhador registrado
      const { id_trabalhador } = response.data;
      if (id_trabalhador) {
        // Salvando o ID do trabalhador no localStorage para futuras referências
        localStorage.setItem('idTrabalhador', id_trabalhador);
      }

      // Exibe a mensagem de sucesso e redireciona para a página inicial
      setMensagem(response.data.message || 'Cadastro realizado com sucesso!');
      navigate('/');  
    } catch (error) {
      // Em caso de erro, exibe mensagem de erro e loga o erro no console
      console.error('Erro ao cadastrar profissional:', error.response ? error.response.data : error.message);
      setMensagem('Erro ao cadastrar profissional. Verifique o console para mais detalhes.');
    }
  };

  // Função para lidar com mudanças no campo de arquivo
  const handleFileChange = (event) => {
    setFoto(event.target.files[0]);
  };

  // Função para lidar com mudanças nas categorias selecionadas
  const handleCategoriaChange = (event) => {
    const { value } = event.target;
    setCategoriasSelecionadas(value);
    setSubcategoriasSelecionadas([]); // Limpa as subcategorias selecionadas quando a categoria é alterada
  };

  // Função para lidar com mudanças nas subcategorias selecionadas
  const handleSubcategoriaChange = (event) => {
    const { value } = event.target;
    setSubcategoriasSelecionadas(value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Cadastro de Profissional Autônomo
        </Typography>
        
        {/* Botão para retornar ao cadastro de usuário */}
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
          {/* Campo para o nome do profissional */}
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {/* Campo para o e-mail do profissional */}
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Campo para o nome de usuário do profissional */}
          <TextField
            label="Nome de Usuário"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Campo para a senha do profissional */}
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
          {/* Campo para confirmar a senha */}
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
          {/* Campo para a descrição do profissional */}
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            margin="normal"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          {/* Campo para a idade do profissional */}
          <TextField
            label="Idade"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            required
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          {/* Campo para a localização do profissional */}
          <TextField
            label="Localização"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />

          {/* Seleção de categorias */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Categoria</InputLabel>
            <Select
              multiple
              value={categoriasSelecionadas}
              onChange={handleCategoriaChange}
              renderValue={(selected) => selected.join(', ')}
              required
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria} value={categoria}>
                  {categoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Seleção de subcategorias */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Subcategoria</InputLabel>
            <Select
              multiple
              value={subcategoriasSelecionadas}
              onChange={handleSubcategoriaChange}
              renderValue={(selected) => selected.join(', ')}
              required
            >
              {categoriasSelecionadas.length > 0 &&
                subcategorias[categoriasSelecionadas[0]] &&
                subcategorias[categoriasSelecionadas[0]].map((subcategoria) => (
                  <MenuItem
                    key={subcategoria}
                    value={subcategoria}
                  >
                    {subcategoria}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* Botão para upload de foto */}
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload de Foto
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {/* Botão para submeter o formulário */}
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
        {/* Mensagem de feedback para o usuário */}
        {mensagem && (
          <Typography color="error" align="center" sx={{ mt: 2 }}>
            {mensagem}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default RegistrarProfissional;
