import { createBrowserRouter } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage";
import DashboardPage from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/cadastro",
    element: <CadastroPage />,
  },

]);

export default router;