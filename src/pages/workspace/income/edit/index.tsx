import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const WorksapceEditIncome = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
    }, [])
    return (
        <>
            <div className="mb-3 flex items-center gap-3">
                <Link to="/workspace/income">
                    <Button className=" rounded-full p-3">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold">Edit Pendapatan</h1>
            </div>
            <form className="flex flex-col gap-8 mb-16">
                <div>
                    <div className="flex justify-between gap-2 lg:gap-4">
                        <div className="flex w-1/4 flex-col gap-2">
                            <label htmlFor="tanggal" className="block text-base text-gray-800">
                                Tanggal
                            </label>
                            <input type="number" id="tanggal" className="block w-full rounded-lg border border-gray-200 p-3 md:p-4" />
                        </div>
                        <div className="flex w-1/2 flex-col gap-2">
                            <label htmlFor="bulan" className="block text-center text-base text-gray-800">
                                Bulan
                            </label>
                            <select name="bulan" id="bulan" className="h-full rounded-lg border border-gray-200 p-3 md:p-4">
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
                        <div className="flex w-1/4 flex-col gap-2">
                            <label htmlFor="tahun" className="block text-base text-gray-800">
                                Tahun
                            </label>
                            <input type="number" id="tahun" className="block rounded-lg border border-gray-200 p-3 md:p-4" />
                        </div>
                    </div>
                </div>

                {/* pendapatan jasa */}
                <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                    <p className="mb-2 text-lg font-semibold">Pendapatan Jasa</p>
                    <p className="mb-2">Jumlah pendapatan jasa</p>
                    <div className="flex items-center gap-2">
                        <p className="text-base">Rp</p>
                        <input type="number" id="penjualan" className="w-full rounded-lg border border-gray-300 p-3" />
                    </div>
                    <p>Keterangan</p>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Servis Ringan</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Servis Berat</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Ganti oli/sparepart</p>
                    </div>
                    {/* lain-lain */}
                    <p>Lain-lain</p>
                    <p>Jumlah lain-lain</p>
                    <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" placeholder="contoh: 10" />
                    <p>Keterangan</p>
                    <textarea name="other" id="other" rows={5} className="w-full rounded-lg border border-gray-300 p-3" placeholder="contoh: servis aki: 10"></textarea>
                </div>
                {/* pendapatan sparepart */}
                <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                    <p className="mb-2 text-lg font-semibold">Pendapatan Sparepart</p>
                    <p className="mb-2">Jumlah pendapatan spaepart</p>
                    <div className="flex items-center gap-2">
                        <p className="text-base">Rp</p>
                        <input type="number" id="penjualan" className="w-full rounded-lg border border-gray-300 p-3" />
                    </div>
                    <p>Keterangan</p>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Sparepart Mesin</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Sparepart Kelengkapan Motor</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" />
                        <p className="text-base w-full">Oli</p>
                    </div>

                    {/* lain-lain */}
                    <p>Lain-lain</p>
                    <p>Jumlah lain-lain</p>
                    <input type="number" id="penjualan" className="w-1/3 rounded-lg border border-gray-300 p-3" placeholder="contoh: 10" />
                    <p>Keterangan</p>
                    <textarea name="other" id="other" rows={5} className="w-full rounded-lg border border-gray-300 p-3" placeholder="contoh: aki: 10"></textarea>
                </div>
                <Button className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3">
                    Submit
                </Button>
            </form>
        </>
    );
}

export default WorksapceEditIncome;