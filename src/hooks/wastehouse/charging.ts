import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type postBodyProps = {
    amount: number;
    date: string;
};

export function useGetChargingQuery() {
    return useQuery({
        queryKey: ["waste-house-charging"],
        queryFn: async () => {
            const res = await httpClient.get("/waste-house/energy-box?page=1&perPage=10");
            return res.data.data;
        }
    });
};

export function useDeleteChargingMutation({ onSuccess, onError }: mutationProps, id?: number) {
    return useMutation({
        mutationKey: ["carging-delete-mutation"],
        mutationFn: async () => {
            event?.preventDefault();
            const res = httpClient.delete(`/waste-house/energy-box/${id}`);
            return res;
        },
        onSuccess,
        onError
    })
};

export function useGetChargingByIdQuery(id: string | undefined) {
    return useQuery({
        queryKey: [`charging-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/waste-house/energy-box/${id}`);
            return res.data;
        }
    })
};

export function useUpdateChargingMutation(id: string | undefined, body: postBodyProps, { onSuccess, onError }: mutationProps) {
    return useMutation({
        mutationFn: async () => {
            const res = await httpClient.put(`/waste-house/energy-box/${id}`, {
                ...body
            });
            return res;
        },
        onSuccess,
        onError
    });
};