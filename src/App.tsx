import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <ul className="list-disc ml-10 text-blue-400">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/ordens-de-servico">Serviços</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
