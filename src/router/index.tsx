import { createBrowserRouter } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage";
import DashboardPage from "../pages/DashboardPage";
import CadastroSequencialPage from "../pages/CadastroSequencialPage";
import LoginPage from "../pages/LoginPage";
import ClientesPage from "../pages/ClientesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/cadastro",
    element: <CadastroPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cadastro-sequencial",
    element: <CadastroSequencialPage />
  },
  {
    path: "/clientes",
    element: <ClientesPage />
  },

]);

export default router;