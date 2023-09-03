import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

function WorkspaceLayout() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Sidebar />
            <main className="max-w-3/4 container flex flex-col gap-5 p-5 pb-6 lg:ml-64 lg:w-3/4">
                <Outlet />
            </main>
            <Toaster />
        </div>
    );
}

export default WorkspaceLayout;