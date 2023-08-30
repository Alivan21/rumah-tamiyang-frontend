import Sidebar from "@/components/Sidebar";

const AddIncome = () => {
    return (
        <>
            <Sidebar />
            <div className="py-8 px-8 lg:ml-64">
                <form action="" className="flex flex-col gap-8">
                    <div>
                        <div className="flex gap-2 lg:gap-4 justify-between">
                            <div className="flex flex-col gap-2 w-1/4">
                                <label htmlFor="name" className="block text-lg text-gray-800">Tanggal</label>
                                <input type="number" className="border border-gray-200 block w-full p-3 md:p-4 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="name" className="block text-lg text-gray-800">Bulan</label>
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
                                <label htmlFor="name" className="block text-lg text-gray-800">Tahun</label>
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
                    <button className="fixed bottom-4 w-5/6 rounded-full left-1/2 -translate-x-1/2 bg-primary text-white p-4 mt-8 lg:relative lg:w-full lg:rounded-xl lg:py-3">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddIncome;