import { useState } from "react";
import api from "../../../services/api";
import type { Address } from "../../../pages/DetalhesClientePage";
import { Delete, Edit } from "@mui/icons-material";
import FormModal from "../../shared/FormModal";
import EditAddressForm from "../EditAddressForm";

interface AddressListProps {
  addresses: Address[];
  onAddressUpdated: (address: Address) => void;
  onAddressDeleted: (addressId: string) => void;
}

export default function AddressList({
  addresses,
  onAddressUpdated,
  onAddressDeleted,
}: AddressListProps) {
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleDelete = async (addressId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este endereço?")) {
      try {
        await api.delete(`/address/${addressId}`);
        onAddressDeleted(addressId);
      } catch (error) {
        console.error("Erro ao excluir endereço", error);
      }
    }
  };

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <div key={address.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <p className="font-semibold">
              {address.street}, {address.number}
            </p>
            <p className="text-sm text-gray-600">
              {address.neighborhood}, {address.city} - {address.state}
            </p>
            <p className="text-sm text-gray-500">{address.zipCode}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setEditingAddress(address)} className="text-blue-500 hover:text-blue-700">
              <Edit />
            </button>
            <button onClick={() => handleDelete(address.id)} className="text-red-500 hover:text-red-700">
              <Delete sx={{ color: "red" }} />
            </button>
          </div>
        </div>
      ))}

      {editingAddress && (
        <FormModal open={!!editingAddress} onClose={() => setEditingAddress(null)} title="Editar endereço">
          <EditAddressForm
            address={editingAddress}
            onAddressUpdated={(updatedAddress: Address) => {
              onAddressUpdated(updatedAddress);
              setEditingAddress(null);
            }}
            onClose={() => setEditingAddress(null)}
          />
        </FormModal>
      )}
    </div>
  );
}