import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { BiHome } from "react-icons/bi";
import { GiNuclearWaste } from "react-icons/gi";
import { Outlet } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md"
import { IconBaseProps } from "react-icons";


type NavsType = {
    id: number;
    labelText: string;
    labelIcon: IconBaseProps;
    url: string;
};

const navs: NavsType[] = [
    {
        id: 1,
        labelText: "Home",
        labelIcon: <BiHome />,
        url: "/wastehouse"
    }, {
        id: 2,
        labelText: "Limbah Jelantah",
        labelIcon: <GiNuclearWaste />,
        url: "/wastehouse/waste-oil"
    },
    {
        id: 3,
        labelText: "Produksi",
        labelIcon: <MdProductionQuantityLimits />,
        url: "/wastehouse/production"
    }
];

function WasteHouseLayout() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Sidebar navs={navs} />
            <main className="max-w-3/4 container flex flex-col gap-5 p-5 pb-6 lg:ml-64 lg:w-3/4">
                <Outlet />
            </main>
            <Toaster />
        </div>
    );
}

export default WasteHouseLayout;