import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Blob } from 'buffer';

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type addUserBodyProps = {
    name: string | undefined;
    identifier: string | undefined;
    password: string | undefined;
    email: string | undefined;
    role_id: number | undefined;
};

export function useGetUsersListQuery() {
    return useQuery({
        queryKey: ["users-list"],
        queryFn: async () => {
            const res = await httpClient.get("admin?page=1&perPage=10");
            return res;
        }
    })
};

export function usePostUserMutation({ onSuccess, onError }: mutationProps, body: addUserBodyProps) {
    return useMutation({
        mutationKey: ["create-user-mutation"],
        mutationFn: async () => {
            event?.preventDefault();
            const res = await httpClient.post("/admin", {
                ...body
            });
            return res;
        },
        onSuccess,
        onError
    });
};

export function useDeleteUserMutation({ onSuccess, onError }: mutationProps, id: number) {
    return useMutation({
        mutationKey: ["delete-user-mutation"],
        mutationFn: async () => {
            const res = await httpClient.delete(`/admin/${id}`);
            return res;
        },
        onSuccess,
        onError
    })
};

export function useGetUserByIdQuery(id: string | undefined) {
    return useQuery({
        queryKey: [`user-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/admin/${id}`);
            return res.data;
        }
    })
};

export function useUpdateUserMutation(id: string | undefined, body: addUserBodyProps, { onSuccess, onError }: mutationProps) {
    const formData = new FormData();
    const { name, identifier, email, role_id, password } = body;
    formData.append("name", name);
    formData.set("identifier", identifier?.toString());
    formData.set("email", email?.toString());
    formData.set("role_id", role_id);
    formData.set("password", password?.toString());

    // name: name,
    // identifier: identifier,
    // email: email,
    // role_id: role,
    // password: undefined
    return useMutation({
        mutationFn: async () => {
            const res = await httpClient.put(`admin/${id}`, formData);
            return res;
        },
        onSuccess,
        onError
    });
};

// export function useGetUserByIdQuery(id: number) {
//     return useQuery({
//         queryKey: [`user-${id}`],
//         queryFn: async () => {
//             event?.preventDefault();
//             const res = await httpClient.get(``)
//         }
//     });
// };