import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { http } from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddIncome() {
  const { toast } = useToast();

  const navigate = useNavigate();

  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<string>("jan");
  const [year, setYear] = useState<number>(2023);
  const [expense, setExpense] = useState<number | undefined>();
  const [revenue, setRevenue] = useState<number | undefined>();

  const { mutate: incomeMutate } = useMutation({
    mutationKey: ["cafeIncome"],
    mutationFn: async () => {
      event?.preventDefault();
      try {
        const res = await http.post("/cafe/revenue", {
          date: new Date(`${year}-${month}-${day}`),
          expense: expense,
          revenue: revenue
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        
        if (res.status !== 200) {
          return false;
        };

        console.log(res);

      } catch(e) {
        console.log(e);
      }
    },
    onSuccess: () => {
      toast({
        title: "Berhasil Menambahkan data",
        variant: "success"
      });
      navigate("/cafe/income");
    },
    onError: (e) => {
      toast({
        title: `Gagal menambahkan data ${e}`,
        variant: "destructive"
      })
    },
  });

  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <Link to="/cafe/income">
          <Button className=" rounded-full p-3">
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </Button>
        </Link>
        <h1 className="text-xl font-semibold">Tambah Income</h1>
      </div>
      <form className="flex flex-col gap-8" onSubmit={() => incomeMutate()}>
        <div>
          <div className="flex justify-between gap-2 lg:gap-4">
            <div className="flex w-1/4 flex-col gap-2">
              <label htmlFor="tanggal" className="block text-base text-gray-800">
                Tanggal
              </label>
              <input type="number" id="tanggal" className="block w-full rounded-lg border border-gray-200 p-3 md:p-4" value={day} onChange={e => setDay(Number(e.target.value))} />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="bulan" className="block text-center text-base text-gray-800">
                Bulan
              </label>
              <select name="bulan" id="bulan" className="h-full rounded-lg border border-gray-200 p-3 md:p-4" value={month} onChange={(e) => setMonth(e.target.value)}>
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
              <input type="number" id="tahun" className="block rounded-lg border border-gray-200 p-3 md:p-4" value={year} onChange={e => setYear(Number(e.target.value))} />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-base">Penjualan</p>
          <div className="flex items-center gap-2">
            <p className="text-base">Rp</p>
            <input type="number" id="penjualan" className="w-full rounded-lg border border-gray-300 p-3" value={revenue} onChange={e => setRevenue(Number(e.target.value))} />
          </div>
        </div>
        <div>
          <p className="mb-2 text-base">Pembelian</p>
          <div className="flex items-center gap-2">
            <p className="text-base">Rp</p>
            <input type="number" id="pembelian" className="w-full rounded-lg border border-gray-300 p-3" value={expense} onChange={e => setExpense(Number(e.target.value))} />
          </div>
        </div>
        <Button className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddIncome;
