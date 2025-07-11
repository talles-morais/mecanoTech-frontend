import { useState } from "react";
import type { Address } from "../../../pages/DetalhesClientePage";
import { Delete, Edit } from "@mui/icons-material";
import FormModal from "../../shared/FormModal";
import EditAddressForm from "../EditAddressForm";
import DeleteAddress from "../DeleteAddress";

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
  const [selectedAddress, setSelectedAddress] = useState<Address>();
  const [openEditAddressDialog, setOpenEditAddressDialog] = useState(false);
  const [openDeleteAddressDialog, setOpenDeleteAddressDialog] = useState(false);

  const handleOpenEditDialog = (address: Address) => {
    setSelectedAddress(address);
    setOpenEditAddressDialog(true);
  };

  const handleOpenDeleteDialog = (address: Address) => {
    setSelectedAddress(address);
    setOpenDeleteAddressDialog(true);
  };

  const handleEdit = (updatedAddress: Address) => {
    setOpenEditAddressDialog(false);
    onAddressUpdated(updatedAddress);
  };

  const handleDelete = () => {
    setOpenDeleteAddressDialog(false);
    if (selectedAddress) {
      onAddressDeleted(selectedAddress.id);
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
              onClick={() => handleOpenEditDialog(address)}
              className="text-white hover:text-zinc-100 hover:scale-120 cursor-pointer transition-all"
            >
              <Edit />
            </button>
            <button
              type="button"
              onClick={() => handleOpenDeleteDialog(address)}
              className="text-primary hover:text-primary-light hover:scale-120 cursor-pointer transition-all"
            >
              <Delete sx={{ color: "red" }} />
            </button>
          </div>
        </div>
      ))}

      <FormModal
        open={openEditAddressDialog}
        onClose={() => setOpenEditAddressDialog(false)}
        title="Editar endereço"
      >
        <EditAddressForm
          address={selectedAddress}
          onAddressUpdated={handleEdit}
          onClose={() => setOpenEditAddressDialog(false)}
        />
      </FormModal>

      <FormModal
        open={openDeleteAddressDialog}
        onClose={() => setOpenDeleteAddressDialog(false)}
        title="Excluir endereço"
        dark={false}
      >
        <DeleteAddress address={selectedAddress} onClose={handleDelete} />
      </FormModal>
    </div>
  );
}
