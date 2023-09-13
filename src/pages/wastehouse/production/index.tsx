import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { productionType, useDeleteProductionMutation, useGetAllProductionQuery } from "@/hooks/wastehouse/production";
import { useEffect, useState } from "react";
import { BiSolidEdit, BiSolidPlusCircle, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

function WasteHouseProduction() {
    const { toast } = useToast();

    const [deletedId, setDeletedId] = useState<number>(-1);

    const { data, refetch } = useGetAllProductionQuery();
    const { mutate: onDelete } = useDeleteProductionMutation(deletedId, {
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
            })
        }
    });

    const deleteHandler = (id: number) => {
        event?.preventDefault();
        setDeletedId(id);
        onDelete();
    };

    useEffect(() => {
        refetch();
    }, [data, refetch]);
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="p-2 text-lg font-semibold">Daftar Produksi Limbah</h2>
                <Link to="/wastehouse/production/add">
                    <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
                        + Tambah Produksi Limbah
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
                                Jumlah Produksi
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((production: productionType, index: number) => (
                            <tr key={production.id} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-center">{index + 1}</td>
                                <td className="px-6 py-4 text-center">{production.date}</td>
                                <td className="px-6 py-4 text-center">{production.amount}</td>
                                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                                    <Link
                                        to={`/wastehouse/production/${production.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-green-500 p-1"
                                    >
                                        <BiSolidShow color="white" size={20} />
                                    </Link>
                                    <Link
                                        to={`/wastehouse/production/edit/${production.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <DeleteModal deleteHandler={() => deleteHandler(production.id)} />
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                <Link to="/wastehouse/production/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
                    <BiSolidPlusCircle size={50} />
                </Link>
            </div>
        </>
    )
};

export default WasteHouseProduction;