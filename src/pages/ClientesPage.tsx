import SearchAndFilter from "../components/shared/SearchAndFilter";
import Sidebar from "../components/shared/Sidebar";
import DataTable from "../components/costumers/DataTable";
import { Add } from "@mui/icons-material";

export default function ClientesPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex flex-col gap-3 grow p-6 bg-black min-h-screen text-white">
        <h1 className="text-4xl font-bold">Clientes</h1>

        {/* seção superior (pesquisa e novo cliente) */}
        <section className="flex w-full justify-between">
          <SearchAndFilter />

          <button className="flex gap-2 items-center p-2 bg-primary text-white font-bold rounded-lg hover:scale-105 transition-all border border-white cursor-pointer">
            <Add />
            <span>Cadastrar cliente</span>
          </button>
        </section>

        {/* tabela */}
        <section className="flex border border-white rounded-lg grow p-4 text-white">
          <DataTable />
        </section>
      </main>
    </div>
  );
}
