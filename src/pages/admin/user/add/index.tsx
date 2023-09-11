import { Button } from "@/components/ui/button";
import { httpClient } from "@/utils/http";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
    const [name, setName] = useState<string>("");
    const [identifier, setIdentifier] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [roleId, setRoleId] = useState<string>("1");

    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationKey: ["create-user-mutation"],
        mutationFn: async () => {
            event?.preventDefault();
            const res = await httpClient.post("/admin", {
                name: name,
                identifier: identifier,
                email: email,
                role_id: roleId,
                password: password
            });
            return res;
        },
        onSuccess: () => {
            navigate("/admin/user");
        },
        onError: (e) => {
            console.log("ERROR" +  e);
        }
    })
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
            <form className="flex flex-col gap-8" onSubmit={mutate}>
                <div>
                    <p className="mb-2 text-base">Name</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Identifier</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        id="identifier"
                        name="identifier"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Email</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <p className="mb-2 text-base">Role</p>
                    <select
                        className="h-full w-full rounded-lg border border-gray-200 p-3 md:p-4"
                        name="role"
                        id="role"
                        value={roleId}
                        onChange={e => setRoleId(e.target.value)}
                    >
                        <option value="1">Admin</option>
                        <option value="2">Cafe</option>
                        <option value="3">Bengkel</option>
                        <option value="4">Rumah Limbah</option>
                    </select>
                </div>
                <div>
                    <p className="mb-2 text-base">Password</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
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