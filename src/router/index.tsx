import { createBrowserRouter } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage";
import DashboardPage from "../pages/DashboardPage";
import CadastroSequencialPage from "../pages/CadastroSequencialPage";

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
    path: "/cadastro-sequencial",
    element: <CadastroSequencialPage />
  },

]);

export default router;