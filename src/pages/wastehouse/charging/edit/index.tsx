import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetChargingByIdQuery, useUpdateChargingMutation } from "@/hooks/wastehouse/charging";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function WasteHouseChargingEdit() {
    const { id } = useParams();
    const { toast } = useToast();
    const navigate = useNavigate();

    const [amount, setAmount] = useState<number>(0);
    const [day, setDay] = useState<string | undefined>();
    const [month, setMonth] = useState<string | undefined>();
    const [year, setYear] = useState<string | undefined>();

    const { data, refetch } = useGetChargingByIdQuery(id);
    const { mutate: onUpdateCharging } = useUpdateChargingMutation(id, {
        amount: amount,
        date: `${year}-${month}-${day}`
    }, {
        onSuccess: () => {
            toast({
                title: "Data berhasil diupdate",
                variant: "success"
            });
            navigate("/wastehouse/charging");
        },
        onError: () => {
            toast({
                title: "Data gagal diupdate",
                variant: "destructive"
            });
            navigate("/wastehouse/charging");
        }
    })

    const getDateArr = (date: string) => {
        if (!date) return "";
        const dateArr = date.split("-");
        return dateArr;
    };

    const updateHandler = () => {
        event?.preventDefault();
        onUpdateCharging();
    };

    useEffect(() => {
        refetch();
        setAmount(data?.data.amount);
        setDay(getDateArr(data?.data.date)[2]);
        setMonth(getDateArr(data?.data.date)[1]);
        setYear(getDateArr(data?.data.date)[0]);
    }, [data, refetch]);

    return (
        <>
            <div className="mb-3 flex items-center gap-3">
                <Link to="/wastehouse/charging">
                    <Button className=" rounded-full p-3">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold">Tambah Frekuensi Charging LCA Energy Box</h1>
            </div>
            <form className="flex flex-col gap-8" onSubmit={updateHandler}>
                <div>
                    <div className="flex justify-between gap-2 lg:gap-4">
                        <div className="flex w-1/4 flex-col gap-2">
                            <label htmlFor="tanggal" className="block text-base text-gray-800">
                                Tanggal
                            </label>
                            <input
                                className="block w-full rounded-lg border border-gray-200 p-3 md:p-4"
                                type="string"
                                id="tanggal"
                                name="day"
                                value={day}
                                onChange={e => setDay(e.target.value)}
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
                                value={month}
                                onChange={e => setMonth(e.target.value)}
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
                                type="string"
                                id="year"
                                name="year"
                                value={year}
                                onChange={e => setYear(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-base mb-2">Jumlah Charging</p>
                        <div className="flex items-center gap-2">
                            <input
                                className="w-1/2 rounded-lg border border-gray-300 p-3"
                                type="number"
                                id="charging"
                                name="charging"
                                value={amount}
                                onChange={e => setAmount(Number(e.target.value))}
                            />
                            <p>Box</p>
                        </div>
                    </div>
                </div>
                <Button
                    className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3"
                >
                    Update
                </Button>
            </form>
        </>
    )
}

export default WasteHouseChargingEdit;