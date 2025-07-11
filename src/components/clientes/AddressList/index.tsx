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
        <div
          key={address.id}
          className="p-4 rounded-lg shadow-md flex justify-between items-center border border-white"
        >
          <div>
            <p className="font-semibold">
              {address.street}, {address.number}
            </p>
            <p className="text-sm text-white">
              {address.neighborhood}, {address.city} - {address.state}
            </p>
            <p className="text-sm text-gray-500">{address.zipCode}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setEditingAddress(address)}
              className="text-white hover:text-zinc-100 hover:scale-120 cursor-pointer transition-all"
            >
              <Edit />
            </button>
            <button
              onClick={() => handleDelete(address.id)}
              className="text-primary hover:text-primary-light hover:scale-120 cursor-pointer transition-all"
            >
              <Delete sx={{ color: "red" }} />
            </button>
          </div>
        </div>
      ))}

      {editingAddress && (
        <FormModal
          open={!!editingAddress}
          onClose={() => setEditingAddress(null)}
          title="Editar endereço"
        >
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
