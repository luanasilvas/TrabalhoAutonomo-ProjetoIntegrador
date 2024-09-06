import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!');
    } else {
      try {
        const response = await axios.post('http://localhost:3000/cadastro-usuario', {
          nome,
          email,
          senha
        });
        setMensagem('Usuário cadastrado com sucesso!');
      } catch (error) {
        setMensagem('Erro ao cadastrar usuário');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Cadastro de Usuário
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
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function CadastroUsuario() {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [senha, setSenha] = useState('');
//   const [confirmarSenha, setConfirmarSenha] = useState('');
//   const [mensagem, setMensagem] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (senha !== confirmarSenha) {
//       setMensagem('As senhas não coincidem!');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:3000/cadastro-usuario', {
//           nome,
//           email,
//           username,
//           senha
//         });
//         setMensagem('Usuário cadastrado com sucesso!');
//       } catch (error) {
//         setMensagem('Erro ao cadastrar usuário');
//       }
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4, mb: 4 }}>
//         <Typography variant="h4" component="h1" align="center" gutterBottom>
//           Cadastro de Usuário
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Nome"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             value={nome}
//             onChange={(e) => setNome(e.target.value)}
//           />
//           <TextField
//             label="E-mail"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Nome de Usuário"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             label="Senha"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             value={senha}
//             onChange={(e) => setSenha(e.target.value)}
//           />
//           <TextField
//             label="Confirmar Senha"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             required
//             value={confirmarSenha}
//             onChange={(e) => setConfirmarSenha(e.target.value)}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Cadastrar
//           </Button>
//         </form>
//         {mensagem && (
//           <Typography color="error" align="center" sx={{ mt: 2 }}>
//             {mensagem}
//           </Typography>
//         )}
//         <Box sx={{ textAlign: 'center', mt: 2 }}>
//           <Typography>
//             Já tem uma conta? <Link to="/login">Entrar</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default CadastroUsuario;
