import { Button } from "@/components/ui/button";
import { BiSolidEdit, BiSolidPlusCircle, BiSolidTrash, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const WorkspaceIncome = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="p-2 text-lg font-semibold">Daftar Pendapatan</h2>
                <Link to="/workspace/income/add">
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
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-center">{num}</td>
                                <td className="px-6 py-4 text-center">28 Agustus 2023</td>
                                <td className="px-6 py-4 text-center">Rp1,200,000</td>
                                <td className="px-6 py-4 text-center">Rp300,000</td>
                                <td className="px-6 py-4 text-center">30%</td>
                                <td className="flex gap-2 lg:gap-0 px-6 py-4">
                                    <Link to="/workspace/income/1" className="block m-auto w-fit cursor-pointer rounded-lg p-1 bg-primary"><BiSolidShow size={20} color="white" /></Link>
                                    <div className="m-auto w-fit cursor-pointer rounded-lg bg-red-500 p-1">
                                        <BiSolidTrash color="white" size={20} />
                                    </div>
                                    <div className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1">
                                        <BiSolidEdit color="white" size={20} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/workspace/income/add" className="fixed bottom-1 right-1 rounded-full bg-white text-2xl lg:hidden">
                    <BiSolidPlusCircle size={50} />
                </Link>
            </div>
        </>
    );
}

export default WorkspaceIncome;