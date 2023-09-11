import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type addUserBodyProps = {
    name: string;
    identifier: string;
    password: string;
    email: string;
    role_id: string;
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

export function useDeleteUserMutation({onSuccess, onError}: mutationProps, id: number) {
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

// export function useGetUserByIdQuery(id: number) {
//     return useQuery({
//         queryKey: [`user-${id}`],
//         queryFn: async () => {
//             event?.preventDefault();
//             const res = await httpClient.get(``)
//         }
//     });
// };