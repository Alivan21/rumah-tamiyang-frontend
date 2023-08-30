import Input from "./components/Input";

const AddIncome = () => {
    return (
        <div className="container py-8">
            <h1 className="text-xl font-semibold text-center mb-8">Tambah Pendapatan</h1>
            <form action="" className="flex flex-col gap-8">
                <div>
                    <label htmlFor="day" className="block text-lg mb-2">Hari</label>
                    <select name="day" id="day" className="border border-gray-300 p-3 w-full rounded-lg">
                        <option value="mon">Senin</option>
                        <option value="tue">Selasa</option>
                        <option value="wed">Rabu</option>
                        <option value="thr">Kamis</option>
                        <option value="fri">Jumat</option>
                        <option value="sat">Sabtu</option>
                        <option value="sun">Minggu</option>
                    </select>
                </div>
                <div>
                    <p className="text-lg mb-2">Tanggal</p>
                    <div className="flex gap-2 justify-between">
                        <div className="flex flex-col gap-2 w-1/4">
                            <label htmlFor="name" className="block text-md text-gray-800">Tanggal</label>
                            <input type="number" className="border border-gray-200 block w-full p-3 md:p-4 rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="name" className="block text-md text-gray-800">Bulan</label>
                            <select name="gender" id="gender" className="border border-gray-200 p-3 h-full md:p-4 rounded-lg">
                                <option value="jan">Januari</option>
                                <option value="feb">Februari</option>
                                <option value="mar">Maret</option>
                                <option value="apr">April</option>
                                <option value="mei">Mei</option>
                                <option value="jun">Juni</option>
                                <option value="jul">Juli</option>
                                <option value="aug">Agustus</option>
                                <option value="sep">September</option>
                                <option value="dec">Desember</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-1/4">
                            <label htmlFor="name" className="block text-md text-gray-800">Tahun</label>
                            <input type="number" className="border border-gray-200 block p-3 md:p-4 rounded-lg" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg mb-2">Penjualan</p>
                    <div className="flex items-center gap-2">
                        <p className="text-lg">Rp</p>
                        <input type="number" className="p-3 border border-gray-300 rounded-lg w-full" />
                    </div>
                </div>
                <div>
                    <p className="text-lg mb-2">Pembelian</p>
                    <div className="flex items-center gap-2">
                        <p className="text-lg">Rp</p>
                        <input type="number" className="p-3 border border-gray-300 rounded-lg w-full" />
                    </div>
                </div>
                <button className="bg-[#094C30] text-white p-2 rounded-xl mt-8 lg:py-3">Submit</button>
            </form>
        </div>
    );
}

export default AddIncome;