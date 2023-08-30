import { Link } from "react-router-dom";
import { BiSolidTrash, BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi"
import Sidebar from "@/components/Sidebar";

const Income = () => {
    return (
        <div>
            <Sidebar />
            <main className="px-8 flex flex-col lg:ml-64">
                <div className="overflow-x-auto">
                    <div className="flex items-center justify-between py-4">
                        <h2 className="text-lg p-4 rounded-t-xl">Daftar Pendapatan</h2>
                        <Link to="/income/add"><button className="hidden bg-primary text-white py-2 px-4 rounded-lg lg:block">+ Tambah Data Pendapatan</button></Link>
                        <Link to="/income/add" className="text-2xl fixed bottom-8 right-4 bg-white rounded-full lg:hidden"><BiSolidPlusCircle size={50} /></Link>
                    </div>
                    <table className="w-full border border-separate border-spacing-11 rounded-xl lg:overflow-auto lg:w-full">
                        <tr className="leading-8 p-4">
                            <th>#</th>
                            <th>Tanggal</th>
                            <th>Penjualan</th>
                            <th>Pembelian</th>
                            <th>Keuntungan</th>
                            <th>Action</th>
                        </tr>
                        {[1, 2, 3, 4, 5, 6].map((num) => (<tr key={num} className="text-center border border-gray-200 align-top">
                            <td>{num}</td>
                            <td>28 Agustus 2023</td>
                            <td>Rp1,200,000</td>
                            <td>Rp300,000</td>
                            <td>30%</td>
                            <td className="flex items-center  w-fit m-auto h-fit gap-2">
                                <div className="bg-red-500 w-fit p-1 m-auto cursor-pointer rounded-lg">
                                    <BiSolidTrash color="white" size={20} />
                                </div>
                                <div className="bg-blue-600 w-fit p-1 m-auto cursor-pointer rounded-lg">
                                    <BiSolidEdit color="white" size={20} />
                                </div>
                            </td>
                        </tr>)
                        )}
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Income;