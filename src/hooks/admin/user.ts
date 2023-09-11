import { httpClient } from "@/utils/http";
import { useQuery } from "@tanstack/react-query";

export function useGetUsersListQuery() {
    return useQuery({
        queryKey: ["users-list"],
        queryFn: async () => {
            const res = await httpClient.get("admin?page=1&perPage=10");
            return res;
        }
    })    
};