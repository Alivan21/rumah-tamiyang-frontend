import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import Sidebar from "@/components/Sidebar";
import Card from "./components/Card";

function App() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
  ];
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Sidebar title="Dashboard" />
      <main className="container flex max-w-fit flex-col gap-5 p-5 pb-6 lg:ml-64">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <Card title="Pendapatan" value="Rp. 20.000.000" upPercent="50" icon="pendapatan" />
          <Card title="Minyak Goreng Terbuang" value="200 Liter" downPercent="20" icon="minyakGoreng" />
          <Card title="Pendapatan" value="Rp. 20.000.000" upPercent="50" icon="pendapatan" />
          <Card title="Minyak Goreng Terbuang" value="200 Liter" downPercent="20" icon="minyakGoreng" />
        </section>
        <section className="px-2">
          <h2 className="text-lg font-semibold">Report - Cafe</h2>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 rounded-2xl bg-white p-4">
              <p className="text-center font-semibold">Pendapatan</p>
              <LineChart className="mx-auto" width={1100} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 rounded-2xl bg-white p-4">
              <p className="text-center font-semibold">Minyak Goreng Terbuang</p>
              <LineChart className="mx-auto" width={1100} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
