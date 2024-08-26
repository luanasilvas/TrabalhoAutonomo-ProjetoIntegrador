import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ForgotPassword from './components/RecuperacaoSenha';
import EnviarProposta from './components/EnviarProposta';
import AvaliacaoFeedback from './components/AvaliacaoFeedback';
import Anuncios from './components/PaginaAnuncios';
import PerfilCliente from './components/PerfilCliente';
import PerfilTrabalhador from './components/PerfilTrabalhador';
import CadastroUsuario from './components/CadastroUsuario';
import RegistrarProfissional from './components/RegistrarProfissional';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/enviar-proposta" element={<EnviarProposta />} />editar
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/perfil-cliente" element={<PerfilCliente />} />
        <Route path="/perfil-trabalhador" element={<PerfilTrabalhador />} />
        <Route path="/avaliacao-feedback" element={<AvaliacaoFeedback />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/registrar-profissional" element={<RegistrarProfissional />} />
      </Routes>
    </Router>
  );
}

export default App;
