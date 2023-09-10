import { Button } from "@/components/ui/button";
import { CafeIncomeRequest, useEditCafeIncome, useGetCafeIncomesById } from "@/hooks/cafe";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCafeIncome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<CafeIncomeRequest>({
    day: 0,
    month: "jan",
    year: 0,
    expense: 0,
    revenue: 0,
  });

  const { data } = useGetCafeIncomesById(id);
  const date = data?.date.split("-");

  const { mutateAsync: EditIncomeMutation } = useEditCafeIncome(form, id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await EditIncomeMutation();
      return navigate("/cafe/income");
    } catch (error) {
      //
    }
  };

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
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-between gap-2 lg:gap-4">
            <div className="flex w-1/4 flex-col gap-2">
              <label htmlFor="tanggal" className="block text-base text-gray-800">
                Tanggal
              </label>
              <input
                className="block w-full rounded-lg border border-gray-200 p-3 md:p-4"
                type="number"
                id="tanggal"
                name="day"
                defaultValue={date?.[0]}
                value={form.day}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="bulan" className="block text-center text-base text-gray-800">
                Bulan
              </label>
              <select
                className="h-full rounded-lg border border-gray-200 p-3 md:p-4"
                name="month"
                id="month"
                defaultValue={date?.[1]}
                value={form.month}
                onChange={handleChangeSelect}
              >
                <option value="01">Januari</option>
                <option value="02">Februari</option>
                <option value="03">Maret</option>
                <option value="04">April</option>
                <option value="05">Mei</option>
                <option value="06">Juni</option>
                <option value="07">Juli</option>
                <option value="08">Agustus</option>
                <option value="09">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
              </select>
            </div>
            <div className="flex w-1/4 flex-col gap-2">
              <label htmlFor="tahun" className="block text-base text-gray-800">
                Tahun
              </label>
              <input
                className="block rounded-lg border border-gray-200 p-3 md:p-4"
                type="number"
                id="year"
                name="year"
                defaultValue={date?.[2]}
                value={form.year}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-base">Penjualan</p>
          <div className="flex items-center gap-2">
            <p className="text-base">Rp</p>
            <input
              className="w-full rounded-lg border border-gray-300 p-3"
              type="number"
              id="revenue"
              name="revenue"
              defaultValue={data?.revenue}
              value={form.revenue}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-base">Pembelian</p>
          <div className="flex items-center gap-2">
            <p className="text-base">Rp</p>
            <input
              className="w-full rounded-lg border border-gray-300 p-3"
              type="number"
              id="expense"
              name="expense"
              defaultValue={data?.expense}
              value={form.expense}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3">
          Update
        </Button>
      </form>
    </>
  );
}

export default EditCafeIncome;
