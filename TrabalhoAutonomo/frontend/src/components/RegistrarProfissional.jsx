import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function RegistrarProfissional() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState(null);
  const [idade, setIdade] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [subcategoriasSelecionadas, setSubcategoriasSelecionadas] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const categorias = [
    'Assistência Técnica', 'Aulas', 'Design e Tecnologia', 
    'Eventos', 'Moda e Beleza', 'Reformas e Construção', 
    'Serviços Domésticos', 'Fretes e Mudanças', 'Pets'
  ];

  const subcategorias = {
    'Assistência Técnica': ['Eletrônicos', 'Eletrodomésticos', 'Computadores'],
    'Aulas': ['Música', 'Idiomas', 'Reforço Escolar'],
    'Design e Tecnologia': ['Aparelhos Eletrônicos', 'Eletrodomésticos', 'Áudio e Vídeo', 'Web Design', 'Design Gráfico'],
    'Eventos': ['Buffet', 'Decoração', 'Confeitaria', 'Carcés', 'DJs, Bandas e Cantores', 'Fotógrafo'],
    'Moda e Beleza': ['Cabeleireiro(a)', 'Corte e Costura', 'Artesanato', 'Manicure', 'Estética', 'Maquiador(a)'],
    'Reforma e Reparos': ['Pedreiro', 'Serralheiro', 'Serviços Gerais', 'Pintor'],
    'Serviços Domésticos': ['Diarista', 'Babá', 'Cozinheira(o)', 'Lavadeira e Passadeira'],
    'Mudança e Automotivos': ['Mudança', 'Transporte de Veículos'],
    'Pets': ['Adestrador', 'Passeador', 'Banho e Tosa']
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!');
    } else {
      setMensagem('Profissional cadastrado com sucesso!');
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    }
  };

  const handleFileChange = (event) => {
    setFoto(event.target.files[0]);
  };

  const handleCategoriaChange = (event) => {
    const { value } = event.target;
    setCategoriasSelecionadas(value);
    setSubcategoriasSelecionadas(subcategorias[value[0]] || []);
  };

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
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
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
          <TextField
            label="Localização"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />

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
          // Adicione esta linha para evitar seleção automática
          selected={subcategoriasSelecionadas.includes(subcategoria)}
        >
          {subcategoria}
        </MenuItem>
      ))}
  </Select>
</FormControl>

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
      </Box>
    </Container>
  );
}

export default RegistrarProfissional;
