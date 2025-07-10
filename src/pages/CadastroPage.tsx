import { Link } from "react-router-dom";
import backgroundImage from "../assets/car-repair-background.webp";
import Input from "../components/shared/Input";

export default function CadastroPage() {
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
        <form className="flex flex-col w-full gap-5">
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirme sua senha" />

          <button className="bg-primary-light text-xl font-bold rounded-xl min-w-1/3 self-center py-5 mt-4">
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
