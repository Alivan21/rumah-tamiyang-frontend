import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
};

type wasteoilBodyProps = {
    date: Date | string;
    amount: number | string;
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

export function useGetWasteOilByIdQuery(id: string | undefined) {
    return useQuery({
        queryKey: [`waste-oil-${id}`],
        queryFn: async () => {
            const res = await httpClient.get(`/waste-house/oil-waste/${id}`);
            return res.data;
        }
    });
};

export function useUpdateOilMutation({onSuccess, onError}: mutationProps, id: string | undefined, body: wasteoilBodyProps) {
    return useMutation({
        mutationKey: [`waste-oil-update-${id}`],
        mutationFn: async () => {
            event?.preventDefault();
            const res = await httpClient.put(`/waste-house/oil-waste/${id}`, {
                ...body
            });
            return res.data;
        },
        onSuccess,
        onError
    })
};