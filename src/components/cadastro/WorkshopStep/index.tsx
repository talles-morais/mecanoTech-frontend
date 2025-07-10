import React from "react";
import Input from "../../shared/Input";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface Props {
  formData: any;
  setFormData: (data: any) => void;
  prevStep: () => void;
}

export default function WorkshopStep({
  formData,
  setFormData,
  prevStep,
}: Props) {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      workshop: { ...formData.workshop, [name]: value },
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post("/workshop", {
        ...formData.workshop,
        addressId: formData.address.id,
      });
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar oficina", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Dados da Oficina</h2>
      <div className="flex flex-col gap-4">
        <Input
          name="cnpj"
          placeholder="CNPJ"
          value={formData.workshop.cnpj}
          onChange={handleChange}
        />
        <Input
          name="name"
          placeholder="Nome da Oficina"
          value={formData.workshop.name}
          onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Telefone"
          value={formData.workshop.phone}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="bg-primary-light text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}