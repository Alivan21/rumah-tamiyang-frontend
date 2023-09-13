import { Button } from "@/components/ui/button";
import { useGetWasteHouseIncomeByIdQuery } from "@/hooks/wastehouse/income";
import { dateToNamingMonthFormat } from "@/utils/date-helper";
import { Link, useParams } from "react-router-dom";

function WasteHouseIncomeDetails() {
    const { id } = useParams();
    const { data } = useGetWasteHouseIncomeByIdQuery(id);
    return (
        <main>
            <Link to="/wastehouse/income" className="block mb-6">
                <Button className=" rounded-full p-3">
                    <i className="fa-solid fa-arrow-left text-xl"></i>
                </Button>
            </Link>
            {/* date details identifier */}
            <h1 className="text-lg mb-8">Data Pendapatan tanggal : <span className="text-xl block font-semibold">{ dateToNamingMonthFormat(data?.data.date) }</span></h1>

            <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
                    <h2 className="font-semibold text-lg">Data Pendapatan</h2>
                    <h3>Total Pendapatan : <span className="font-semibold">Rp{ data?.data.amount }</span></h3>
                    <div>
                        <h3 className="font-semibold">Keterangan</h3>
                        <p>Sabun Cuci : <span className="font-semibold">Rp{  }</span></p>
                        <p>Lilin Aromaterapi : <span className="font-semibold">Rp10000</span></p>
                        <p>Lampu Pelita : <span className="font-semibold">Rp10000</span></p>
                        <p>Lain-lain : <span className="font-semibold">-</span></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WasteHouseIncomeDetails;