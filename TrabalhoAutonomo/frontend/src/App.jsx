import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/RecuperacaoSenha';
import EnviarProposta from './components/EnviarProposta';
import AvaliacaoFeedback from './components/AvaliacaoFeedback';
import PerfilCliente from './components/PerfilCliente';
import PerfilTrabalhador from './components/PerfilTrabalhador';
import CadastroUsuario from './components/CadastroUsuario';
import RegistrarProfissional from './components/RegistrarProfissional';
import ListaDeAnuncios from './components/ListaDeAnuncios';
import CriarAnuncio from './components/CriarAnuncio';
import Navbar from './components/Navbar'; // Certifique-se de importar o Navbar
import Sidebar from './components/Sidebar'; // Importa o Sidebar
import { AuthProvider } from './context/AuthContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar o Sidebar

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar onMenuClick={handleSidebarToggle} /> {/* Adiciona o Navbar com prop */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} /> {/* Passa o estado */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enviar-proposta" element={<EnviarProposta />} />
          <Route path="/avaliacao-feedback" element={<AvaliacaoFeedback />} />
          <Route path="/perfil-cliente" element={<PerfilCliente />} />
          <Route path="/perfil-trabalhador" element={<PerfilTrabalhador />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/registrar-profissional" element={<RegistrarProfissional />} />
          <Route path="/lista-anuncios/:categoriaId" element={<ListaDeAnuncios />} /> {/* Rota com parâmetro */}
          <Route path="/criar-anuncio" element={<CriarAnuncio />} />
          <Route path="/categoria/:categoria" element={<ListaDeAnuncios />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
