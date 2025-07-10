import { useSequentialSignup } from "../hooks/useSequentialSignup";
import UserTypeStep from "../components/cadastro/UserTypeStep";
import WorkshopAddressStep from "../components/cadastro/WorkshopAddressStep";
import WorkshopStep from "../components/cadastro/WorkshopStep";

export default function CadastroSequencialPage() {
  const { 
    step, 
    formData, 
    setFormData, 
    nextStep, 
    prevStep 
  } = useSequentialSignup();

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Complete seu Cadastro
        </h1>

        {step === 1 && (
          <UserTypeStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <WorkshopAddressStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <WorkshopStep
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
          />
        )}
      </div>
    </main>
  );
}
