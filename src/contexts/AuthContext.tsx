import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";
import type { AuthContextType } from "./AuthContext";

interface User {
  id: string;
  role: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const { data } = await api.get("/me");
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error)
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    await api.post("/login", { email, password });
    await checkAuthStatus();
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    isLoading,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };

