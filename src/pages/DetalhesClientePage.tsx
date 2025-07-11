import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import type { Customer } from "../components/costumers/DataTable";
import { Add } from "@mui/icons-material";
import AddressList from "../components/clientes/AddressList";
import FormModal from "../components/shared/FormModal";
import AddAddressForm from "../components/clientes/AddAddressForm";

export interface Address {
  id: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  complement?: string;
}


export default function DetalhesClientePage() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const customerResponse = await api.get(`/customer/${id}`)

        setCustomer(customerResponse.data);
        setAddresses(customerResponse.data.addresses)
      } catch (error) {
        console.error("Erro ao buscar dados do cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, [id]);

  const handleAddressAdded = (newAddress: Address) => {
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    setIsModalOpen(false);
  };

  const handleAddressUpdated = (updatedAddress: Address) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
  };

  const handleAddressDeleted = (addressId: string) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((addr) => addr.id !== addressId)
    );
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!customer) {
    return <p>Cliente não encontrado.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{customer.name}</h1>
      <p className="text-gray-600 mb-6">{customer.email} | {customer.phone}</p>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Endereços</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-primary-light transition-colors"
        >
          <Add />
          Adicionar Endereço
        </button>
      </div>

      <AddressList
        addresses={addresses}
        onAddressUpdated={handleAddressUpdated}
        onAddressDeleted={handleAddressDeleted}
      />

      <FormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar endereço">
        <AddAddressForm
          customerId={customer.id}
          onAddressAdded={handleAddressAdded}
          onClose={() => setIsModalOpen(false)}
        />
      </FormModal>
    </div>
  );
}