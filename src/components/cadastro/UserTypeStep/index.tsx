import React from "react";
import api from "../../../services/api";

interface Props {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

export default function UserTypeStep({
  formData,
  setFormData,
  nextStep,
}: Props) {
  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, userType: event.target.value });
  };

  const handleNext = async () => {
    if (!formData.userType) {
      alert("Por favor, selecione um tipo de usuário.");
      return;
    }
    try {
      await api.patch("/role", { role: formData.userType });
      nextStep();
    } catch (error) {
      console.error("Erro ao atualizar a role:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Você é dono de oficina ou empregado?
      </h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            value="ADMIN"
            checked={formData.userType === "ADMIN"}
            onChange={handleUserTypeChange}
          />
          Dono de Oficina
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="userType"
            value="EMPLOYEE"
            checked={formData.userType === "EMPLOYEE"}
            onChange={handleUserTypeChange}
          />
          Empregado
        </label>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 w-full bg-primary-light text-white font-bold py-3 rounded-lg hover:scale-105 transition-all"
      >
        Próximo
      </button>
    </div>
  );
}
