import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BiSolidPlusCircle, BiSolidShow, BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { incomeType, useDeleteWasteHouseIncomeMutation, useGetAllWasteHouseIncomeQuery } from "@/hooks/wastehouse/income";
import { useToast } from "@/components/ui/use-toast";
import DeleteModal from "@/components/modals/DeleteModal";
import { currencyFormatter } from "@/utils/currency-helper";

function WasteHouseIncome() {
    const { toast } = useToast();

    const [idDeleted, setIdDeleted] = useState<number>(-1);

    const { data, refetch } = useGetAllWasteHouseIncomeQuery();
    const { mutate: onDelete } = useDeleteWasteHouseIncomeMutation(idDeleted, {
        onSuccess: () => {
            toast({
                title: "Data berhasil dihapus",
                variant: "success"
            });
            refetch();
        },
        onError: () => {
            toast({
                title: "Data gagal dihapus",
                variant: "destructive"
            });
        }
    });
    const deleteHandler = (id: number) => {
        event?.preventDefault();
        setIdDeleted(id);
        onDelete();
    }
    useEffect(() => {
        refetch();
    }, [data, refetch]);
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="p-2 text-lg font-semibold">Daftar Pendapatan Rumah Limbah</h2>
                <Link to="/wastehouse/income/add">
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
                                Jumlah Pendapatan
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((income: incomeType, index: number) => (
                            <tr key={income.id} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-center">{ index+1 }</td>
                                <td className="px-6 py-4 text-center">{ income.date }</td>
                                <td className="px-6 py-4 text-center">Rp{ currencyFormatter(income.income) }</td>
                                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                                    <Link
                                        to={`/wastehouse/income/${income.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-green-500 p-1"
                                    >
                                        <BiSolidShow color="white" size={20} />
                                    </Link>
                                    <Link
                                        to={`/wastehouse/income/edit/${income.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <DeleteModal deleteHandler={() => deleteHandler(income.id)} />
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                <Link to="/wastehouse/income/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
                    <BiSolidPlusCircle size={50} />
                </Link>
            </div>
        </>
    )
}

export default WasteHouseIncome;