import { httpClient } from "@/utils/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export type RevenueRequest = {
  day: number;
  month: string;
  year: number;
  revenue: number;
  data: string[][];
};

export function useGetWorkshopRevenues() {
  return useQuery({
    queryKey: ["revenues"],
    queryFn: async () => {
      const { data } = await httpClient.get("/workshop/service-revenue?page=1&perPage=10");
      return data;
    },
  });
}

export function useGetWorkshopRevenue(id: string) {
  return useQuery({
    queryKey: ["revenues", id],
    queryFn: async () => {
      const { data } = await httpClient.get(`/workshop/service-revenue/${id}`);
      return data;
    },
  });
}

export function useCreateWorkshopRevenue(props: RevenueRequest) {
  const queryClient = useQueryClient();
  const formData = new FormData();
  const date = `${props.year}-${props.month}-${props.day}`;
  formData.set("date", date);
  formData.set("revenue", props.revenue.toString());
  formData.set("data", JSON.stringify(props.data));
  return useMutation({
    mutationFn: async () => {
      await httpClient.post("/workshop/service-revenue", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["revenues"] });
      return toast.success("Data berhasil ditambahkan");
    },
  });
}

export function useUpdateWorkshopRevenue(id: string, props: RevenueRequest) {
  const queryClient = useQueryClient();
  const formData = new FormData();
  const date = `${props.year}-${props.month}-${props.day}`;
  formData.set("date", date);
  formData.set("revenue", props.revenue.toString());
  formData.set("data", JSON.stringify(props.data));
  return useMutation({
    mutationFn: async () => {
      await httpClient.put(`/workshop/service-revenue/${id}`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["revenues"] });
      return toast.success("Data berhasil diubah");
    },
  });
}

export function useDeleteWorkshopRevenue(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await httpClient.delete(`/workshop/service-revenue/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["revenues"] });
      return toast.success("Data berhasil dihapus");
    },
  });
}
