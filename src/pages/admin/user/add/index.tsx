import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AddUser() {
    return (
        <>
            <div className="mb-3 flex items-center gap-3">
                <Link to="/admin/user">
                    <Button className=" rounded-full p-3">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold">Tambah User</h1>
            </div>
            <form className="flex flex-col gap-8">
                <div>
                    <p className="mb-2 text-base">Name</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        id="name"
                        name="name"
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Identifier</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        id="identifier"
                        name="identifier"
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Email</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Role</p>
                    <select
                        className="h-full w-full rounded-lg border border-gray-200 p-3 md:p-4"
                        name="role"
                        id="role"
                    >
                        <option value="cafe">Cafe</option>
                        <option value="workshop">Bengkel</option>
                        <option value="wastehouse">Rumah Limbah</option>
                    </select>
                </div>
                <Button
                    className="fixed bottom-6 left-1/2 mt-8 w-5/6 -translate-x-1/2 rounded-full bg-primary p-4 text-white lg:relative lg:w-full lg:rounded-xl lg:py-3"
                >
                    Tambah
                </Button>
            </form>
        </>
    )
}

export default AddUser;