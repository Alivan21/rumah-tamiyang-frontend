import { Button } from "@/components/ui/button";
import { useGetProductionByIdQuery } from "@/hooks/wastehouse/production";
import { dateToNamingMonthFormat } from "@/utils/date-helper";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function WasteHouseProductionDetails() {
    const { id } = useParams();
    const { data } = useGetProductionByIdQuery(id);
    useEffect(() => {
        console.log(data?.data.wasteHouseList);
    }, [data]);
    return (
        <main>
            <Link to="/wastehouse/production" className="block mb-6">
                <Button className=" rounded-full p-3">
                    <i className="fa-solid fa-arrow-left text-xl"></i>
                </Button>
            </Link>
            {/* date details identifier */}
            <h1 className="text-lg mb-8">Data Produksi Limbah pada : <span className="text-xl block font-semibold">{ dateToNamingMonthFormat(data?.data.date) }</span></h1>

            <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
                    <h2 className="font-semibold text-lg">Data Produksi</h2>
                    <h3>Total Produksi Limbah : <span className="font-semibold">{ data?.data.amount }</span></h3>
                    <div>
                        <h3 className="font-semibold">Keterangan</h3>
                        <p>Sabun Cuci : <span className="font-semibold">10</span></p>
                        <p>Lilin Aromaterapi : <span className="font-semibold">4</span></p>
                        <p>Lampu Pelita : <span className="font-semibold">1</span></p>
                        <p>Lain-lain : <span className="font-semibold">-</span></p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WasteHouseProductionDetails;