import { useState } from "react";

export function useSequentialSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: "",
    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
      complement: "",
    },
    workshop: {
      cnpj: "",
      name: "",
      phone: "",
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return { step, formData, setFormData, nextStep, prevStep };
}