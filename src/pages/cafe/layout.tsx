import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

function CafeLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main className="max-w-3/4 container flex flex-col gap-5 p-5 pb-6 lg:ml-64 lg:w-3/4">
        <Outlet />
      </main>
    </div>
  );
}

export default CafeLayout;
