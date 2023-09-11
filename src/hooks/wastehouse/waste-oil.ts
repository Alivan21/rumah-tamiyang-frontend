import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type wasteoilBodyProps = {
    date: Date;
    amount: number;
    origin: string;
};

export const useGetWasteOilQuery = () => {
    return useQuery({
        queryKey: ["waste-oil"],
        queryFn: async () => {
            const { data } = await httpClient.get("waste-house/oil-waste?page=1&perPage=10");
            return data.data;
        }
    });
};

export const useDeleteWasteOilMutation = ({ onSuccess, onError }: mutationProps, id?: number) => {
    return useMutation({
        mutationKey: ["waste-oil-delete"],
        mutationFn: async () => {
            event?.preventDefault();
            const res = await httpClient.delete(`/waste-house/oil-waste/${id}`);
            return res;
        },
        onSuccess,
        onError
    });
};

export const useAddWasteOilMutation = ({ onSuccess, onError }: mutationProps, body?: wasteoilBodyProps) => {
    return useMutation({
        mutationKey: ["mutation-wasteoil-create"],
        mutationFn: async () => {
            event?.preventDefault();
            const res = await httpClient.post("/waste-house/oil-waste", {
                ...body
            });
            return res;
        },
        onSuccess,
        onError
    });
};

// export const useGetWasteOilQueryById = (id: undefined | number) => {
//     return useQuery({
//         queryKey: [`waste-oil ${id}`],
//         queryFn: async () => {
//             const { data } = await httpClient.get(`waste-house/oil-waste/${id}`);
//             return data.data;
//         }
//     });
// };