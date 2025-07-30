import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(() => {
    const guardado = localStorage.getItem("usuarioAutenticado");
    return guardado === "true";
  });

  const login = () => {
    setUsuarioAutenticado(true);
    localStorage.setItem("usuarioAutenticado", "true");
  };

  const logout = () => {
    setUsuarioAutenticado(false);
    localStorage.setItem("usuarioAutenticado", "false");
  };

  return (
    <AuthContext.Provider value={{ usuarioAutenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
