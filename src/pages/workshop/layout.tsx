import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { BiHome, BiMoney, BiGasPump } from "react-icons/bi";
import { Outlet } from "react-router-dom";

const navs = [
  {
    id: 1,
    labelText: "Home",
    labelIcon: <BiHome />,
    url: "/workshop",
  },
  {
    id: 2,
    labelText: "Pendapatan",
    labelIcon: <BiMoney />,
    url: "/workshop/income",
  },
  {
    id: 3,
    labelText: "Limbah Oli",
    labelIcon: <BiGasPump />,
    url: "/workshop/oil",
  },
];

function WorkshopLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Sidebar navs={navs} />
      <main className="max-w-3/4 container flex flex-col gap-5 p-5 pb-6 lg:ml-64 lg:w-3/4">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}

export default WorkshopLayout;
