import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';  // Importação de axios para requisições ao back-end
import { useNavigate } from 'react-router-dom';  // Importação para redirecionamento pós-login

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();  // Para redirecionar o usuário após o registro

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Faz a requisição de cadastro para o back-end
    axios.post('/api/auth/signup', {
      email: email,
      password: password,
    })
    .then(response => {
      console.log(response.data);  // Adicionar lógica para salvar o token JWT, por exemplo
      // Redireciona para a página inicial após o registro bem-sucedido
      navigate('/home');
    })
    .catch(error => {
      console.error('Erro ao cadastrar usuário:', error);
      // Adicionar lógica para lidar com erros
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={5} md={12} component={Box} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço Gmail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Inscrever-se 
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/cadastro-usuario" variant="body2">
                    {"Já tem uma conta? Entrar"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/forgot-password" variant="body2">
                    {"Esqueceu a senha?"}
                  </Link>
                </Grid>   
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
