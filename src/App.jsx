import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/Home"; 
import Results from "./pages/ResultadosBusqueda";
import PublicarServicio from "./pages/PublicarServicio";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/results" element={<Results/>} />
          <Route path="/publicar" element={<PublicarServicio />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
