import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

export type incomeType = {
    id: number;
    date: string;
    amount: number;
};

type mutationProps = {
    onSuccess: () => void,
    onError: () => void
};

export function useGetAllWasteHouseIncomeQuery() {
    return useQuery({
        queryKey: ["wastehouse-income"],
        queryFn: async () => {
            const res = await httpClient.get("/waste-house/income?page=1&perPage=10");
            return res.data;
        }
    });
};

export function useDeleteWasteHouseIncomeMutation(id: number, { onSuccess, onError }: mutationProps) {
    return useMutation({
        mutationFn: async () => {
            const res = await httpClient.delete(`/waste-house/income/${id}`);
            return res;
        },
        onSuccess,
        onError
    })
};

export function useGetWasteHouseIncomeByIdQuery(id: string | undefined) {
    return useQuery({
        queryKey: [`wastehouse-income-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/waste-house/income/${id}`);
            return res.data;
        }
    });
};