import { httpClient } from "@/utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type mutationProps = {
    onSuccess: () => void;
    onError: () => void;
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