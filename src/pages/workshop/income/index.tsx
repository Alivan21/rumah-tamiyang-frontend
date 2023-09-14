import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { BiSolidEdit, BiSolidPlusCircle, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

function WorkshopIncome() {
  return (
    <>
      <div className="relative flex items-center justify-between">
        <h2 className="p-2 text-lg font-semibold">Daftar Pendapatan</h2>
        <Link to="/workshop/income/add">
          <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
            + Tambah Data Pendapatan
          </Button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Pendapatan
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Pengeluaran
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Keuntungan
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <tr key={num} className="border-b bg-white">
                <td className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900">{num}</td>
                <td className="px-6 py-4 text-center">28 Agustus 2023</td>
                <td className="px-6 py-4 text-center">Rp1,200,000</td>
                <td className="px-6 py-4 text-center">Rp300,000</td>
                <td className="px-6 py-4 text-center">30%</td>
                <td className="flex items-center gap-2 px-6 py-4 lg:gap-0">
                  <Link
                    to={`/workshop/income/${num}`}
                    className="m-auto block w-fit cursor-pointer rounded-lg bg-primary p-1"
                  >
                    <BiSolidShow size={20} color="white" />
                  </Link>
                  <DeleteModal
                    key={num}
                    deleteHandler={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                  <Link
                    to={`/workshop/income/edit/${num}`}
                    className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                  >
                    <BiSolidEdit color="white" size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/workshop/income/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
          <BiSolidPlusCircle size={50} />
        </Link>
      </div>
    </>
  );
}

export default WorkshopIncome;
