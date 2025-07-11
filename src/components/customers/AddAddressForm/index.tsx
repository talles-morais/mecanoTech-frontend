import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { Address } from "../../../pages/DetalhesClientePage";
import api from "../../../services/api";
import Input from "../../shared/Input";
import Select from "../../shared/Select";

interface AddAddressFormProps {
  customerId: string;
  onAddressAdded: (address: Address) => void;
  onClose: () => void;
}

const schema = yup.object().shape({
  street: yup.string().required("A rua é obrigatória."),
  neighborhood: yup.string().required("O bairro é obrigatório."),
  number: yup.string().required("O número é obrigatório."),
  city: yup.string().required("A cidade é obrigatória."),
  state: yup.string().required("O estado é obrigatório."),
  zipCode: yup.string().required("O CEP é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export default function AddAddressForm({
  customerId,
  onAddressAdded,
  onClose,
}: AddAddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = async (data: FormData) => {
    try {
      const response = await api.post("/address", { ...data, customerId });
      onAddressAdded(response.data);
    } catch (error) {
      console.error("Erro ao adicionar endereço", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-2">
      <Input
        dark
        placeholder="Rua"
        error={errors.street?.message}
        {...register("street")}
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Input
            dark
            placeholder="Bairro"
            error={errors.neighborhood?.message}
            {...register("neighborhood")}
          />
        </div>
        <Input
          dark
          placeholder="Número"
          error={errors.number?.message}
          {...register("number")}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Input
            dark
            placeholder="Cidade"
            error={errors.city?.message}
            {...register("city")}
          />
        </div>
        <Select dark error={errors.state?.message} {...register("state")}>
          <option value="">Estado</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
      </div>
      <Input
        dark
        placeholder="CEP"
        error={errors.zipCode?.message}
        {...register("zipCode")}
      />
      <div className="flex items-center justify-end pt-6 space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="py-2 px-4 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="py-2 px-4 rounded bg-primary text-white hover:bg-primary-light"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
