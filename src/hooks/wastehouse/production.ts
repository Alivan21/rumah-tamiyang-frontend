import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void,
    onError: () => void
};

export type productionType = {
    id: number;
    date: string;
    amount: number;
    wasteHouseList: string[]; // temporary data type
};

export function useGetAllProductionQuery() {
    return useQuery({
        queryKey: ["productions"],
        queryFn: async () => {
            const res = await httpClient.get("/waste-house/production?page=1&perPage=10");
            return res.data;
        }
    });
};

export function useDeleteProductionMutation(id: string | number, {onSuccess, onError}: mutationProps) {
    return useMutation({
        mutationFn: async () => {
            const res = await httpClient.delete(`/waste-house/production/${id}`);
            return res;
        },
        onSuccess,
        onError
    });
};

export function useGetProductionByIdQuery(id: string | undefined) {
    return useQuery({
        queryKey: [`wastehouse-production-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/waste-house/production/${id}`);
            return res.data;
        }
    });
};