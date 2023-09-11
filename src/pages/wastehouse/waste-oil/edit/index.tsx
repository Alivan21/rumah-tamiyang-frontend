import { Button } from "@/components/ui/button";
import { httpClient } from "@/utils/http";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function EditWasteOil() {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: [`waste-oil-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/waste-house/oil-waste/${id}`);
            return res;
        }
    });

    useEffect(() => {
        console.log(new Date(data?.data.data.date).getMonth());
    }, [])

    return (
        <>
            <div className="mb-3 flex items-center gap-3">
                <Link to="/wastehouse/waste-oil">
                    <Button className=" rounded-full p-3">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold">Edit Data Minta Jelantah</h1>
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
                                defaultValue={new Date(data?.data.data.date).getDate()}
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
                                defaultValue={new Date(data?.data.data.date).getMonth()}
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
                                defaultValue={new Date(data?.data.data.date).getFullYear()}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-base">Jumlah (dalam liter)</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="number"
                        defaultValue={data?.data.data.amount}
                        id="amount"
                        name="amount"
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Asal Minyak Jelantah</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        defaultValue={data?.data.data.origin}
                        id="origin"
                        name="origin"
                    />
                </div>
                <Button
                    className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3"
                >
                    Update
                </Button>
            </form>
        </>
    );
}

export default EditWasteOil;