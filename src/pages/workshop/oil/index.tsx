import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { OilWasteResponse, useDeleteOilWaste, useGetAllOilWaste } from "@/hooks/workshop/oil-waste";
import { BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function WorkshopOil() {
  const { data } = useGetAllOilWaste();
  const { mutateAsync: deleteOil } = useDeleteOilWaste();

  return (
    <>
      <div className="relative flex items-center justify-between">
        <h2 className="p-2 text-lg font-semibold">Daftar Limbah Oli</h2>
        <Link to="/workshop/oil/add">
          <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
            + Tambah Data Limbah Oli
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
                Oli Terkumpul
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Oli Keluar
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((oil: OilWasteResponse, index: number) => (
              <tr key={oil.id} className="border-b bg-white">
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="whitespace-nowrap px-6 py-4">{oil.date.split("T")[0]}</td>
                <td className="whitespace-nowrap px-6 py-4">{oil.oil_collects} Box</td>
                <td className="whitespace-nowrap px-6 py-4">{oil.oil_out} Box</td>
                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                  <DeleteModal
                    key={oil.id}
                    deleteHandler={async () => {
                      await deleteOil(oil.id);
                    }}
                  />
                  <Link
                    to={`/workshop/oil/edit/${oil.id}`}
                    className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                  >
                    <BiSolidEdit color="white" size={20} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/workshop/oil/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
          <BiSolidPlusCircle size={50} />
        </Link>
      </div>
    </>
  );
}

export default WorkshopOil;
