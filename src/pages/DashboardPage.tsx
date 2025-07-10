import Sidebar from "../components/shared/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="grow p-6 bg-black min-h-screen text-white">
        <h1 className="text-4xl font-bold">Dashboard</h1>

      </main>
    </div>
  );
}
