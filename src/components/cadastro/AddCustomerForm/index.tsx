import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../shared/Input";
import Select from "../../shared/Select";
import api from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";

interface AddCustomerFormProps {
  onClose: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O e-mail é obrigatório."),
  phone: yup.string().required("O telefone é obrigatório."),
  street: yup.string().required("A rua é obrigatória."),
  neighborhood: yup.string().required("O bairro é obrigatório."),
  number: yup.string().required("O número é obrigatório."),
  city: yup.string().required("A cidade é obrigatória."),
  estado: yup.string().required("O estado é obrigatório."),
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

export default function AddCustomerForm({ onClose }: AddCustomerFormProps) {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = async (data: FormData) => {
    try {
      const response = await api.post("/customer", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        workshopId: user?.workshopId,
      });
      console.log("Dados do novo cliente:", response.data);
      onClose()
    } catch (error) {
      console.error("Erro ao criar usuário", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-2">
      <Input
        dark
        placeholder="Nome"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        dark
        placeholder="E-mail"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        dark
        placeholder="Telefone"
        type="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <p className="text-xl pt-4">Endereço:</p>

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
        <Select dark error={errors.estado?.message} {...register("estado")}>
          <option value="">Estado</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
      </div>

      {/* Ações do formulário */}
      <div className="flex items-center justify-between pt-6 space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-4 px-6 text-xl rounded-xl bg-none border border-white  text-white font-bold transition-all hover:bg-zinc-900 cursor-pointer"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-full py-4 px-6 text-xl rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary-light cursor-pointer"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
