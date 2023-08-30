import { Link } from "react-router-dom";
import { BiSolidTrash } from "react-icons/bi"

const Income = () => {
    return (
        <div className="container py-8 flex flex-col gap-16">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Pendapatan</h1>
                <Link to="/income/add"><button className="bg-[#094C30] text-white py-2 px-4 rounded-lg">+ Tambah Data Pendapatan</button></Link>
            </div>
            <div>
                <h2 className="text-lg p-4 bg-gray-100 rounded-t-xl">Daftar Pendapatan</h2>
                <table className="w-full border">
                    <tr className="leading-8">
                        <th>#</th>
                        <th>Tanggal</th>
                        <th>Penjualan</th>
                        <th>Pembelian</th>
                        <th>Keuntungan</th>
                        <th>Action</th>
                    </tr>
                    {[1, 2, 3, 4, 5, 6].map((num) => (<tr key={num} className="text-center leading-10 border border-gray-200">
                        <td>{num}</td>
                        <td>28 Agustus 2023</td>
                        <td>Rp1,200,000</td>
                        <td>Rp300,000</td>
                        <td>30%</td>
                        <td>
                            <div className="bg-red-500 w-fit p-1 m-auto cursor-pointer rounded-lg">
                                <BiSolidTrash color="white" size={20} />
                            </div>
                        </td>
                    </tr>)
                    )}
                </table>
            </div>
        </div>
    );
}

export default Income;