import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteWasteOilMutation, useGetWasteOilQuery } from "@/hooks/wastehouse/waste-oil";
import { useEffect, useState } from "react";
import { BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

type wasteOilType = {
    id: number;
    date: Date;
    amount: number;
    origin: string;
};

function WasteOil() {
    const { toast } = useToast();

    const [idDeleted, setIdDeleted] = useState(-1);

    const { data, refetch } = useGetWasteOilQuery();
    const { mutate: onDelete } = useDeleteWasteOilMutation({
        onSuccess: () => {
            toast({
                title: "Berhasil menghapus data",
                variant: "success"
            });
            refetch();
        },
        onError: () => {
            toast({
                title: `Gagal menghapus data`,
                variant: "destructive"
            })
        }
    }, idDeleted);

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="p-2 text-lg font-semibold">Daftar Minyak Jelantah</h2>
                <Link to="/wastehouse/waste-oil/add">
                    <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
                        + Tambah Data Minyak Jelantah
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
                                Jumlah (liter)
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Asal Minyak Jelantah
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((wasteoil: wasteOilType, index: number) => {
                            return (<tr key={wasteoil.id} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-center">{index + 1}</td>
                                <td className="px-6 py-4 text-center">{String(wasteoil.date)}</td>
                                <td className="px-6 py-4 text-center">{wasteoil.amount}</td>
                                <td className="px-6 py-4 text-center">{wasteoil.origin}</td>
                                <td className="m-auto mt-2 flex w-fit items-center justify-center gap-3">
                                    <Link
                                        to={`/wastehouse/waste-oil/edit/${wasteoil.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <DeleteModal key={wasteoil.id} deleteHandler={() => {
                                        setIdDeleted(wasteoil.id);
                                        onDelete();
                                    }} />
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to="/wastehouse/waste-oil/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
                    <BiSolidPlusCircle size={50} />
                </Link>
            </div>
        </>
    );
};

export default WasteOil;