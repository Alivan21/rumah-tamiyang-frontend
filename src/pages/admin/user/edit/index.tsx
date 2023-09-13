import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";
import { useGetUserByIdQuery, useUpdateUserMutation } from "@/hooks/admin/user"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

function getRoleId(role: string | undefined) {
    if (role === "ADMIN") return 1;
    else if (role === "USER_CAFE") return 2;
    else if (role === "USER_WORKSHOP") return 3;
    else if (role === "USER_WASTE_HOUSE") return 4;
    else return -1;
};

function UserEdit() {
    const { id } = useParams();
    const { toast } = useToast();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [identifier, setIdentifier] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [role, setRole] = useState<number>();

    const { data, refetch } = useGetUserByIdQuery(id);
    const { mutate: onUpdate } = useUpdateUserMutation(id, {
        name: name,
        identifier: identifier,
        email: email,
        role_id: role,
    }, {
        onSuccess: () => {
            toast({
                title: "Data berhasil diupdate",
                variant: "success"
            });
            navigate("/admin/user");
        },
        onError: () => {
            toast({
                title: "Data gagal diupdate",
                variant: "destructive"
            });
            navigate("/admin/user");
        }
    });

    const updateHandler = () => {
        event?.preventDefault();
        onUpdate();
    };

    useEffect(() => {
        refetch();
        setName(data?.data.name);
        setIdentifier(data?.data.identifier);
        setEmail(data?.data.email);
        setRole(getRoleId(data?.data.role));
    }, [data, refetch]);
    return (
        <>
            <div className="mb-3 flex items-center gap-3">
                <Link to="/admin/user">
                    <Button className=" rounded-full p-3">
                        <i className="fa-solid fa-arrow-left text-xl"></i>
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold">Edit User</h1>
            </div>
            <form className="flex flex-col gap-8" onSubmit={updateHandler}>
                <div>
                    <p className="mb-2 text-base">Name</p>
                    <input
                        className="w-full rounded-lg border border-gray-300 p-3"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                        value={role}
                        onChange={e => setRole(Number(e.target.value))}
                    >
                        <option value={1}>Admin</option>
                        <option value={2}>Cafe</option>
                        <option value={3}>Bengkel</option>
                        <option value={4}>Rumah Limbah</option>
                    </select>
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

export default UserEdit