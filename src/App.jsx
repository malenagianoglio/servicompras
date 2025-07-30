import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/Home"; 
import Results from "./pages/ResultadosBusqueda";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </BrowserRouter>
  );
}
