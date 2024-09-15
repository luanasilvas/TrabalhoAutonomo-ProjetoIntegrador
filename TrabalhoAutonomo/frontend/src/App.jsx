import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/RecuperacaoSenha'; // Certifique-se de que o caminho está correto
import EnviarProposta from './components/EnviarProposta';
import AvaliacaoFeedback from './components/AvaliacaoFeedback';
import ListaDeAnuncios from './components/ListaDeAnuncios';
import PerfilCliente from './components/PerfilCliente';
import PerfilTrabalhador from './components/PerfilTrabalhador';
import CadastroUsuario from './components/CadastroUsuario';
import RegistrarProfissional from './components/RegistrarProfissional';
import CriarAnuncio from './components/CriarAnuncio';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/enviar-proposta" element={<EnviarProposta />} />
        <Route path="/lista-anuncios" element={<ListaDeAnuncios />} />
        <Route path="/perfil-cliente" element={<PerfilCliente />} />
        <Route path="/perfil-trabalhador" element={<PerfilTrabalhador />} />
        <Route path="/avaliacao-feedback" element={<AvaliacaoFeedback />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/registrar-profissional" element={<RegistrarProfissional />} />
        <Route path="/criar-anuncio" element={<CriarAnuncio />} /> 
      </Routes>
    </Router>
  );
}

export default App;
