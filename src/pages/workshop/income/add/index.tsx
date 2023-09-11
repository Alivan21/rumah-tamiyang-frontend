import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import DynamicInput, { InputItem } from "./components/DyanamicInput";
import { useQuery } from "@tanstack/react-query";

function AddIncomeWorkshop() {
  const [otherService, setOtherService] = useState<InputItem[]>([
    {
      amount: 0,
      description: "",
    },
  ]);

  const [otherSparepart, setOtherSparepart] = useState<InputItem[]>([
    {
      amount: 0,
      description: "",
    },
  ]);

  const handleOtherService = (newInputList: InputItem[]) => {
    setOtherService([...newInputList]);
  };

  const handleOtherSparepart = (newInputList: InputItem[]) => {
    setOtherSparepart([...newInputList]);
  };

  const [day, setDay] = useState<string | undefined>();
  const [month, setMonth] = useState<string>("jan");
  const [year, setYear] = useState<string>("2023");
  const [revenue, setRevenue] = useState("");

  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <Link to="/workshop/income">
          <Button className=" rounded-full p-3">
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </Button>
        </Link>
        <h1 className="text-xl font-semibold">Tambah Pendapatan</h1>
      </div>
      <form className="mb-16 flex flex-col gap-8">
        <div>
          <div className="flex justify-between gap-2 lg:gap-4">
            <div className="flex w-1/4 flex-col gap-2">
              <label htmlFor="tanggal" className="block text-base text-gray-800">
                Tanggal
              </label>
              <input
                type="number"
                id="tanggal"
                className="block w-full rounded-lg border border-gray-200 p-3 md:p-4"
                value={day}
                onChange={e => setDay(e.target.value)}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="bulan" className="block text-center text-base text-gray-800">
                Bulan
              </label>
              <select
                name="bulan"
                id="bulan"
                className="h-full rounded-lg border border-gray-200 p-3 md:p-4"
                value={month}
                onChange={e => setMonth(e.target.value)}
              >
                <option value="jan">Januari</option>
                <option value="feb">Februari</option>
                <option value="mar">Maret</option>
                <option value="apr">April</option>
                <option value="mei">Mei</option>
                <option value="jun">Juni</option>
                <option value="jul">Juli</option>
                <option value="aug">Agustus</option>
                <option value="sep">September</option>
                <option value="dec">Desember</option>
              </select>
            </div>
            <div className="flex w-1/4 flex-col gap-2">
              <label htmlFor="tahun" className="block text-base text-gray-800">
                Tahun
              </label>
              <input
                type="number"
                id="tahun"
                className="block rounded-lg border border-gray-200 p-3 md:p-4"
                value={year}
                onChange={e => setYear(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* pendapatan jasa */}
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
          <p className="mb-2 text-xl font-semibold">Pendapatan Jasa</p>
          <div>
            <p className="mb-2">Jumlah pendapatan jasa</p>
            <div className="flex items-center gap-2">
              <p className="text-base">Rp</p>
              <input
                type="number"
                id="penjualan"
                className="w-full rounded-lg border border-gray-300 p-3"
                value={revenue}
                onChange={e => setRevenue(e.target.value)}
              />
            </div>
          </div>
          <p className="text-lg font-semibold">Keterangan</p>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Servis Ringan</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Servis Berat</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Ganti oli/sparepart</p>
          </div>
          <p className="text-lg font-semibold">Lain-lain</p>
          <DynamicInput initialInputList={otherService} onSetInputList={handleOtherService} />
        </div>
        {/* pendapatan sparepart */}
        <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
          <p className="mb-2 text-lg font-semibold">Pendapatan Sparepart</p>
          <p className="mb-2">Jumlah pendapatan sparepart</p>
          <div className="flex items-center gap-2">
            <p className="text-base">Rp</p>
            <input type="number" id="penjualan" className="w-full rounded-lg border border-gray-300 p-3" />
          </div>
          <p className="text-lg font-semibold">Keterangan</p>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Sparepart Mesin</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Sparepart Kelengkapan Motor</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
            <p className="w-full text-base">Oli</p>
          </div>
          <p className="text-lg font-semibold">Lain-lain</p>
          <DynamicInput initialInputList={otherSparepart} onSetInputList={handleOtherSparepart} />
        </div>
        <Button
          className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3"
          type="button"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddIncomeWorkshop;
