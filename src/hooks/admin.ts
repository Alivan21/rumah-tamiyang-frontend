import { BaseResponse } from "@/utils/constant";
import { httpClient } from "@/utils/http";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await httpClient.get<BaseResponse<User[]>>("/users");
      if (data.data === undefined) return;
      return data.data;
    },
  });
}
