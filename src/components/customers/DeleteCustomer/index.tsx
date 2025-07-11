import api from "../../../services/api";
import type { Customer } from "../DataTable";

interface DeleteCustomerProps {
  customer?: Customer;
  onClose: () => void;
}

export default function DeleteCustomer({
  customer,
  onClose,
}: DeleteCustomerProps) {
  const handleDelete = async () => {
    try {
      await api.delete(`/customer/${customer?.id}`)
      onClose()
    } catch (error) {
      console.error("Erro ao deletar usuário", error)
    }
  }

  return (
    <div className="w-full">
      <p className="text-black">
        Você está prestes a excluir os dados do cliente "{customer?.name}".
        Deseja continuar? Esta ação é irreversível.
      </p>
      {/* Ações do formulário */}
      <div className="flex items-center justify-between pt-6 space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-4 px-6 text-xl rounded-xl bg-none border border-black  text-black font-bold transition-all hover:bg-zinc-100 cursor-pointer"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-full py-4 px-6 text-xl rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary-light cursor-pointer"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
