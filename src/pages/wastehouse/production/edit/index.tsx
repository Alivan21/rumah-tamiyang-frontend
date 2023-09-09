import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function EditProductionWasteHouse() {
    return (<>
        <div className="mb-3 flex items-center gap-3">
            <Link to="/wastehouse/production">
                <Button className=" rounded-full p-3">
                    <i className="fa-solid fa-arrow-left text-xl"></i>
                </Button>
            </Link>
            <h1 className="text-xl font-semibold">Tambah Income</h1>
        </div>
        <form className="flex flex-col gap-8">
            <div>
                <div className="flex justify-between gap-2 lg:gap-4">
                    <div className="flex w-1/4 flex-col gap-2">
                        <label htmlFor="tanggal" className="block text-base text-gray-800">
                            Tanggal
                        </label>
                        <input
                            className="block w-full rounded-lg border border-gray-200 p-3 md:p-4"
                            type="number"
                            id="tanggal"
                            name="day"
                        />
                    </div>
                    <div className="flex w-1/2 flex-col gap-2">
                        <label htmlFor="month" className="block text-center text-base text-gray-800">
                            Bulan
                        </label>
                        <select
                            className="h-full rounded-lg border border-gray-200 p-3 md:p-4"
                            name="month"
                            id="month"
                        >
                            <option value="01">Januari</option>
                            <option value="02">Februari</option>
                            <option value="03">Maret</option>
                            <option value="04">April</option>
                            <option value="05">Mei</option>
                            <option value="06">Juni</option>
                            <option value="07">Juli</option>
                            <option value="08">Agustus</option>
                            <option value="09">September</option>
                            <option value="10">Oktober</option>
                            <option value="11">November</option>
                            <option value="12">Desember</option>
                        </select>
                    </div>
                    <div className="flex w-1/4 flex-col gap-2">
                        <label htmlFor="year" className="block text-base text-gray-800">
                            Tahun
                        </label>
                        <input
                            className="block rounded-lg border border-gray-200 p-3 md:p-4"
                            type="number"
                            id="year"
                            name="year"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg mb-2">Produksi</p>
                <div className="flex items-center gap-2">
                    <input
                        className="w-1/3 rounded-lg border border-gray-300 p-3"
                        type="number"
                        id="detergent"
                        name="detergent"
                    />
                    <p className="text-base">Sabun Cuci</p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        className="w-1/3 rounded-lg border border-gray-300 p-3"
                        type="number"
                        id="aromateraphy"
                        name="aromateraphy"
                    />
                    <p className="text-base">Lilin Aromaterapi</p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        className="w-1/3 rounded-lg border border-gray-300 p-3"
                        type="number"
                        id="aromateraphy"
                        name="aromateraphy"
                    />
                    <p className="text-base">Lampu Pelita</p>
                </div>
                <div className="items-center">
                    <p className="text-base mb-2">Lain-lain</p>
                    <div className="bg-white w-fit p-4 border border-gray-300 rounded-lg">
                        <BiPlus color={"gray"} />
                    </div>
                </div>
            </div>
            <Button
                className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3"
            >
            </Button>
        </form>
    </>);
}

export default EditProductionWasteHouse;