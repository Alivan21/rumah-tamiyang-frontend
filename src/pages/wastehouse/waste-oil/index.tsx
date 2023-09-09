import { Button } from "@/components/ui/button";
import { BiSolidEdit, BiSolidPlusCircle, BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

function WasteOil() {
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
                        {[1, 2, 3, 4, 5].map((num) => {
                            return (<tr key={num} className="border-b bg-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-center">{ num }</td>
                                <td className="px-6 py-4 text-center">12/12/2023</td>
                                <td className="px-6 py-4 text-center">12</td>
                                <td className="px-6 py-4 text-center">Koskosan</td>
                                <td className="m-auto mt-2 flex w-fit items-center justify-center gap-3">
                                    <Link
                                        to={`/wastehouse/waste-oil/edit/${1}`}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-blue-600 p-1"
                                    >
                                        <BiSolidEdit color="white" size={20} />
                                    </Link>
                                    <Link
                                        to={``}
                                        className="m-auto w-fit cursor-pointer rounded-lg bg-red-500 p-1"
                                    >
                                        <BiSolidTrash color="white" size={20} />
                                    </Link>
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