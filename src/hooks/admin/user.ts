import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type addUserBodyProps = {
    name: string | undefined;
    identifier: string | undefined;
    password?: string | undefined;
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
        mutationFn: async () => {
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
    return useMutation({
        mutationFn: async () => {
            const res = await httpClient.post(`admin/${id}`, {
                ...body,
                _method: "PUT"
            });
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