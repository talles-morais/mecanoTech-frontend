import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#2a2a2a", fontWeight: "bold" }}>
          <TableRow>
            <TableCell sx={{ border: 0, color: "white", fontWeight: "bold" }}>
              Nome
            </TableCell>
            <TableCell sx={{ border: 0, color: "white", fontWeight: "bold" }}>
              Telefone
            </TableCell>
            <TableCell sx={{ border: 0, color: "white", fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell sx={{ border: 0, color: "white", fontWeight: "bold" }}>
              Endereço
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockCostumers.map((cliente) => (
            <TableRow key={cliente.email}>
              {/* Aplica os estilos em todas as células do corpo da tabela */}
              <TableCell
                component="th"
                scope="row"
                sx={{ border: 0, color: "white" }}
              >
                {cliente.nome}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {cliente.telefone}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {cliente.email}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {cliente.endereco}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type Costumer = {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
};

const mockCostumers: Costumer[] = [
  {
    nome: "Ana Costa",
    telefone: "(35) 99876-5432",
    email: "ana.costa@example.com",
    endereco: "Rua das Flores, 123, Bairro Centro, Itajubá - MG",
  },
  {
    nome: "Bruno Oliveira",
    telefone: "(35) 98765-4321",
    email: "bruno.oliveira@example.com",
    endereco: "Avenida Brasil, 456, Bairro Varginha, Itajubá - MG",
  },
  {
    nome: "Carla Santos",
    telefone: "(35) 99123-4567",
    email: "carla.santos@example.com",
    endereco: "Praça Wenceslau Braz, 789, Bairro Centro, Itajubá - MG",
  },
  {
    nome: "Daniel Pereira",
    telefone: "(35) 98456-7890",
    email: "daniel.pereira@example.com",
    endereco:
      "Rua Doutor Pereira Cabral, 101, Bairro Pinheirinho, Itajubá - MG",
  },
  {
    nome: "Eduarda Lima",
    telefone: "(35) 99887-7665",
    email: "eduarda.lima@example.com",
    endereco: "Avenida Cesário Alvim, 212, Bairro Boa Vista, Itajubá - MG",
  },
  {
    nome: "Felipe Almeida",
    telefone: "(35) 98876-5432",
    email: "felipe.almeida@example.com",
    endereco: "Rua Major Belo Lisboa, 321, Bairro Morro Chic, Itajubá - MG",
  },
  {
    nome: "Gabriela Souza",
    telefone: "(35) 99234-5678",
    email: "gabriela.souza@example.com",
    endereco: "Avenida BPS, 1303, Bairro Pinheirinho, Itajubá - MG",
  },
  {
    nome: "Heitor Martins",
    telefone: "(35) 98765-1234",
    email: "heitor.martins@example.com",
    endereco: "Rua Olegário Maciel, 543, Bairro Centro, Itajubá - MG",
  },
  {
    nome: "Isabela Rocha",
    telefone: "(35) 99345-6789",
    email: "isabela.rocha@example.com",
    endereco:
      "Travessa Sargento José Justino, 654, Bairro Avenida, Itajubá - MG",
  },
  {
    nome: "João Ferreira",
    telefone: "(35) 98567-8901",
    email: "joao.ferreira@example.com",
    endereco: "Rua Francisco Masseli, 987, Bairro Medicina, Itajubá - MG",
  },
];
