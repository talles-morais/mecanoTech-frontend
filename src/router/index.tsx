import { createBrowserRouter } from "react-router-dom";

// Componentes das Páginas
import CadastroPage from "../pages/CadastroPage";
import DashboardPage from "../pages/DashboardPage";
import CadastroSequencialPage from "../pages/CadastroSequencialPage";
import LoginPage from "../pages/LoginPage";
import ClientesPage from "../pages/ClientesPage";

import ProtectedRoute from "../components/shared/ProtectedRoute";

const router = createBrowserRouter([
  // --- ROTAS PÚBLICAS ---
  // Acessíveis mesmo sem login
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <CadastroPage />,
  },
  {
    path: "/cadastro-sequencial",
    element: <CadastroSequencialPage />,
  },

  // --- ROTAS PROTEGIDAS ---
  // Envolve todas as rotas que exigem autenticação
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/clientes",
        element: <ClientesPage />,
      },
    ],
  },
]);

export default router;
