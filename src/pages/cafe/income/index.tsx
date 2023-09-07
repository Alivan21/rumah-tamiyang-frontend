import { Link } from "react-router-dom";
import { BiSolidTrash, BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { http } from "@/utils/http";
import DeleteModal from "@/components/modals/DeleteModal";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export type cafeIncome = {
  id: number;
  revenue: number;
  expense: number;
  profit: number;
};

function Income() {
  const { toast } = useToast();

  const [deleteId, setDeleteId] = useState<undefined | number>();
  const { data, refetch } = useQuery({
    queryKey: ["cafeIncome"],
    queryFn: async () => {
      const res = await http.get("/cafe/revenue?page=1&perPage=10", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      return res.data.data;
    }
  });
  const { mutate: onDelete } = useMutation({
    mutationKey: ["deleteCafeMutation"],
    mutationFn: async () => {
      http.delete(`/cafe/revenue/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    },
    onSuccess: () => {
      toast({
        title: "Data berhasil dihapus",
        variant: "success"
      }),
      setDeleteId(undefined);
    }
  });

  useEffect(() => {
    refetch();
  }, [deleteId]);

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
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{index+1}</td>
                <td className="px-6 py-4">date</td>
                <td className="px-6 py-4">{income.revenue}</td>
                <td className="px-6 py-4">{income.expense}</td>
                <td className="px-6 py-4">{income.profit}%</td>
                <td className="flex m-auto w-fit gap-3 items-center mt-2">
                  <div className="m-auto w-fit cursor-pointer rounded-lg bg-red-500 p-1">
                    <DeleteModal key={income.id} deleteHandler={() => {
                      setDeleteId(income.id);
                      onDelete();
                    }}>
                      <BiSolidTrash color="white" size={17} />
                    </DeleteModal>
                  </div>
                  <div className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1">
                    <BiSolidEdit color="white" size={20} />
                  </div>
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
