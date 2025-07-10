import React from "react";
import Input from "../../shared/Input";
import api from "../../../services/api";

interface Props {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function WorkshopAddressStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      address: { ...formData.address, [name]: value },
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post("/address", formData.address);
      setFormData({
        ...formData,
        address: { ...formData.address, id: response.data.id },
      });
      nextStep();
    } catch (error) {
      console.error("Erro ao cadastrar endereço", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Endereço da Oficina</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="street"
          placeholder="Rua"
          value={formData.address.street}
          onChange={handleChange}
        />
        <Input
          name="number"
          placeholder="Número"
          value={formData.address.number}
          onChange={handleChange}
        />
        <Input
          name="neighborhood"
          placeholder="Bairro"
          value={formData.address.neighborhood}
          onChange={handleChange}
        />
        <Input
          name="city"
          placeholder="Cidade"
          value={formData.address.city}
          onChange={handleChange}
        />
        <Input
          name="state"
          placeholder="Estado"
          value={formData.address.state}
          onChange={handleChange}
        />
        <Input
          name="zipCode"
          placeholder="CEP"
          value={formData.address.zipCode}
          onChange={handleChange}
        />
        <Input
          name="complement"
          placeholder="Complemento"
          value={formData.address.complement}
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
          Próximo
        </button>
      </div>
    </form>
  );
}