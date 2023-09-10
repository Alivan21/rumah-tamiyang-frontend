import Sidebar from "@/components/Sidebar";
import { navsProps } from "../layout";
import { BiHome, BiUser } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const navs: navsProps[] = [
    {
        id: 1,
        labelText: "Home",
        labelIcon: <BiHome />,
        url: "/admin"
    },
    {
        id: 2,
        labelText: "User",
        labelIcon: <BiUser />,
        url: "/admin/user"
    }
];

function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Sidebar navs={navs} />
            <main className="max-w-3/4 container flex flex-col gap-5 p-5 pb-6 lg:ml-64 lg:w-3/4">
                <Outlet />
            </main>
            <Toaster />
        </div>
    )
}

export default AdminLayout;