import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Delete, Edit } from "@mui/icons-material";
import EditCustomerForm from "../../cadastro/EditCustomerForm";
import FormModal from "../../shared/FormModal";

export interface Customer {
  id: string;
  email: string;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

export default function DataTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [openEditCustomerDialog, setOpenEditCustomerDialog] = useState(false);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/customer");

      setCustomers(response.data);
    } catch (error) {
      console.error("Erro ao criar cliente", error);
    }
  };

  const handleOpenEditDialog = (customer: Customer) => {
    setSelectedCustomer(customer);
    setOpenEditCustomerDialog(true)
  };

  const handleEdit = () => {
    console.log("editado");
  };

  useEffect(() => {
    fetchCustomers();
  }, [openEditCustomerDialog]);

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
            <TableCell sx={{ border: 0, color: "white", fontWeight: "bold" }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow
              key={customer.id}
              className="hover:bg-zinc-900 transition-colors"
            >
              {/* Aplica os estilos em todas as células do corpo da tabela */}
              <TableCell
                component="th"
                scope="row"
                sx={{ border: 0, color: "white" }}
              >
                {customer.name}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {customer.phone}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {customer.email}
              </TableCell>
              <TableCell sx={{ border: 0, color: "white" }}>
                {"Endereço"}
              </TableCell>
              <TableCell
                sx={{ border: 0, color: "white", display: "flex", gap: 2 }}
              >
                <button
                  onClick={() => handleOpenEditDialog(customer)}
                  className="hover:scale-120 transition-all cursor-pointer"
                >
                  <Edit />
                </button>
                <button className="hover:scale-120 transition-all cursor-pointer">
                  <Delete sx={{ color: "#e32832" }} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FormModal
        open={openEditCustomerDialog}
        title="Editar cliente"
        onClose={() => setOpenEditCustomerDialog(false)}
        onSubmit={handleEdit}
      >
        <EditCustomerForm
          customer={selectedCustomer}
          onClose={() => setOpenEditCustomerDialog(false)}
        />
      </FormModal>
    </TableContainer>
  );
}
