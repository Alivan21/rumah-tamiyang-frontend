import { Link } from "react-router-dom";
import { BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import DeleteModal from "@/components/modals/DeleteModal";
import { cafeIncome, useDeleteCafeIncome, useGetCafeIncomes } from "@/hooks/cafe";
import { useEffect } from "react";

function Income() {
  const { data } = useGetCafeIncomes();
  const { mutateAsync: deleteIncome } = useDeleteCafeIncome();

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="p-2 text-lg font-semibold">Daftar Pendapatan</h2>
        <Link to="/cafe/income/add">
          <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
            + Tambah Data Pendapatan
          </Button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Penjualan
              </th>
              <th scope="col" className="px-6 py-3">
                Pembelian
              </th>
              <th scope="col" className="px-6 py-3">
                Keuntungan
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((income: cafeIncome, index: number) => (
              <tr key={income.id} className="border-b bg-white">
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4">{income.date}</td>
                <td className="px-6 py-4">{income.revenue}</td>
                <td className="px-6 py-4">{income.expense}</td>
                <td className="px-6 py-4">{income.profit}%</td>
                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                  <DeleteModal
                    key={income.id}
                    deleteHandler={() => {
                      deleteIncome(income.id);
                    }}
                  />
                  <Link
                    to={`/cafe/income/edit/${income.id}`}
                    className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                  >
                    <BiSolidEdit color="white" size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/cafe/income/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
          <BiSolidPlusCircle size={50} />
        </Link>
      </div>
    </>
  );
}

export default Income;
