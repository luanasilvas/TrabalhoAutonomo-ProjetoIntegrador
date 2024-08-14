import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Login";
import Home from "./components/Home";
import ForgotPassword from "./components/RecuperacaoSenha";
import EnviarProposta from "./components/EnviarProposta";
import AvaliacaoFeedback from "./components/AvaliacaoFeedback";
import Anuncios from "./components/PaginaAnuncios";
import PerfilCliente from "./components/PerfilCliente";
import PerfilTrabalhador from "./components/PerfilTrabalhador";
import RegistroUsuario from "./components/RegistroUsuario";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/enviar-proposta" element={<EnviarProposta />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/perfil-cliente/:id" element={<PerfilCliente />} />
        <Route path="/perfil-trabalhador/:id" element={<PerfilTrabalhador />} />
        <Route path="/avaliacao-feedback" element={<AvaliacaoFeedback />} />
        <Route path="/registrar-usuario" element={<RegistroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
