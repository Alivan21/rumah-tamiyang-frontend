import { Button } from "@/components/ui/button";
import { BiSolidEdit, BiSolidPlusCircle, BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

function AdminUser() {
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
                        {[1, 2, 3, 4, 5].map(num => (
                            <tr key={num} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{num}</td>
                                <td className="px-6 py-4">Fauzan</td>
                                <td className="px-6 py-4">fauzan</td>
                                <td className="px-6 py-4">fauzan@mail.com</td>
                                <td className="px-6 py-4">Cafe</td>
                                <td className="m-auto mt-2 flex w-fit items-center gap-3">
                                    <Link
                                        to={`/admin/user/edit/${1}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <Button
                                        className="m-auto h-fit w-fit cursor-pointer rounded-lg bg-red-500 p-1"
                                    >
                                        <BiSolidTrash color="white" size={20} />
                                    </Button>
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