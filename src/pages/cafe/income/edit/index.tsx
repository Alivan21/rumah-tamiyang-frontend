import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { CafeIncomeRequest, useEditCafeIncome, useGetCafeIncomesById } from "@/hooks/cafe";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCafeIncome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const { data } = useGetCafeIncomesById(id);
  const initialFormState: CafeIncomeRequest = {
    day: 0,
    month: "01",
    year: 0,
    purchase: 0,
    sale: 0,
  };
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (data) {
      const date = data.date.toString().split("-");
      setForm({
        day: parseInt(date[2]),
        month: date[1],
        year: parseInt(date[0]),
        purchase: data.purchase,
        sale: data.sale,
      });
    }
  }, [data]);

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
    setSubmitting(true);
    try {
      await EditIncomeMutation();
      setSubmitting(false);
      return navigate("/cafe/income");
    } catch (error) {
      setSubmitting(false);
      return toast.error("Gagal mengubah data");
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
        <h1 className="text-xl font-semibold">Ubah Income</h1>
      </div>
      {data ? (
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
                  value={form.day}
                  onChange={handleChange}
                />
              </div>
              <div className="flex w-1/2 flex-col gap-2">
                <label htmlFor="month" className="block text-center text-base text-gray-800">
                  Bulan
                </label>
                <select
                  className="h-full rounded-lg border border-gray-200 p-3 md:p-4"
                  name="month"
                  id="month"
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
                <label htmlFor="year" className="block text-base text-gray-800">
                  Tahun
                </label>
                <input
                  className="block rounded-lg border border-gray-200 p-3 md:p-4"
                  type="number"
                  id="year"
                  name="year"
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
                id="sale"
                name="sale"
                value={form.sale}
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
                id="purchase"
                name="purchase"
                value={form.purchase}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3">
            {submitting ? <Spinner /> : "Ubah Data"}
          </Button>
        </form>
      ) : (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default EditCafeIncome;
