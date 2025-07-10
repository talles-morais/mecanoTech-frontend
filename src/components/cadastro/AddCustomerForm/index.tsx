import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../shared/Input";
import Select from "../../shared/Select";

interface AddCustomerFormProps {
  onClose: () => void;
}

const schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O e-mail é obrigatório."),
  telefone: yup.string().required("O telefone é obrigatório."),
  rua: yup.string().required("A rua é obrigatória."),
  bairro: yup.string().required("O bairro é obrigatório."),
  numero: yup.string().required("O número é obrigatório."),
  cidade: yup.string().required("A cidade é obrigatória."),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data: FormData) => {
    console.log("Dados do novo cliente:", data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-2">
      <Input
        dark
        placeholder="Nome"
        error={errors.nome?.message}
        {...register("nome")}
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
        error={errors.telefone?.message}
        {...register("telefone")}
      />

      <p className="text-xl pt-4">Endereço:</p>

      <Input
        dark
        placeholder="Rua"
        error={errors.rua?.message}
        {...register("rua")}
      />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Input
            dark
            placeholder="Bairro"
            error={errors.bairro?.message}
            {...register("bairro")}
          />
        </div>
        <Input
          dark
          placeholder="Número"
          error={errors.numero?.message}
          {...register("numero")}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Input
            dark
            placeholder="Cidade"
            error={errors.cidade?.message}
            {...register("cidade")}
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
