import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteUserMutation, useGetUsersListQuery } from "@/hooks/admin/user";
import { useState } from "react";
import { BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function AdminUser() {
    const { toast } = useToast();

    const { data, refetch } = useGetUsersListQuery();
    const [idDelete, setIdDelete] = useState(-1);
    const { mutate: deleteHandler } = useDeleteUserMutation({
        onSuccess: () => {
            toast({
                title: "Berhasil menghapus data",
                variant: "success"
            });
            refetch();
        },
        onError: () => {
            toast({
                title: "Gagal menghapus data",
                variant: "destructive"
            });
        }
    }, idDelete);
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="p-2 text-lg font-semibold">Daftar User</h2>
                <Link to="/admin/user/add">
                    <Button className="hidden rounded-lg bg-primary px-4 py-2 text-white lg:block">
                        + Tambah User
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
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Identifier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.data.map((data, index: number) => (
                            <tr key={data.id} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4">{data.name}</td>
                                <td className="px-6 py-4">{data.identifier}</td>
                                <td className="px-6 py-4">{data.email}</td>
                                <td className="px-6 py-4">{data.role}</td>
                                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                                    <Link
                                        to={`/admin/user/edit/${data.id}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <DeleteModal deleteHandler={() => {
                                        setIdDelete(data.id);
                                        deleteHandler();
                                    }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/admin/user/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
                    <BiSolidPlusCircle size={50} />
                </Link>
            </div>
        </>
    )
}

export default AdminUser;