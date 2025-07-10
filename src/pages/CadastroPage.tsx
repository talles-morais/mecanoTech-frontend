import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import backgroundImage from "../assets/car-repair-background.webp";
import Input from "../components/shared/Input";
import api from "../services/api";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("E-mail deve ter um formato válido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
});

type FormData = yup.InferType<typeof schema>;

export default function CadastroPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post("/register", {
        email: data.email,
        password: data.password,
      });

      await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      reset();
      navigate("/cadastro-sequencial")
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <main className="flex ">
      {/* imagem e logo */}
      <div
        className="flex items-center justify-center h-screen w-full bg-cover bg-center px-12"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex items-center justify-center bg-secondary/80 backdrop-blur-md w-full py-28 rounded-xl max-w-[880px]">
          <img src="/logo-slogan.svg" alt="" />
        </div>
      </div>

      {/* form */}
      <section className="flex flex-col gap-7 justify-center px-16 bg-secondary w-2/3  text-white">
        <h1 className="text-white font-bold text-4xl">Cadastre-se</h1>
        <form
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="E-mail"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            placeholder="Senha"
            type="password"
            autoComplete="none"
            {...register("password")}
            error={errors.password?.message}
          />
          <Input
            placeholder="Confirme sua senha"
            type="password"
            autoComplete="none"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <button
            type="submit"
            className="bg-primary-light text-xl font-bold rounded-xl min-w-1/3 self-center py-5 mt-4 hover:scale-105 transition-all cursor-pointer"
          >
            Cadastrar
          </button>
          <p className="block self-center">
            Já tem conta?{" "}
            <Link className="font-bold underline" to="/login">
              Faça login
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
