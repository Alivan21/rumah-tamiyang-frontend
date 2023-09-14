import { BaseResponse } from "@/utils/constant";
import { httpClient } from "@/utils/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export type OilWasteResponse = {
  id: number;
  user_id: number;
  date: string;
  oil_collects: number;
  oil_out: number;
};

export type OilWasteRequest = {
  day: number;
  month: string;
  year: number;
  oil_collects: number;
  oil_out: number;
};

export function useGetAllOilWaste() {
  return useQuery({
    queryKey: ["oil-waste"],
    queryFn: async () => {
      const { data } = await httpClient.get<BaseResponse<OilWasteResponse[]>>("/workshop/oil-waste?page=1&perPage=10");
      if (data.data === undefined) return;
      return data.data;
    },
  });
}

export function useGetOilWaste(id?: string) {
  return useQuery({
    queryKey: ["oil-waste", id],
    queryFn: async () => {
      const { data } = await httpClient.get<BaseResponse<OilWasteResponse>>(`/workshop/oil-waste/${id}`);
      if (data.data === undefined) return;
      return data.data;
    },
  });
}

export function useAddOilWaste(props: OilWasteRequest) {
  const queryClient = useQueryClient();
  const date = `${props.year}-${props.month}-${props.day}`;
  const formData = new FormData();
  formData.set("date", date);
  formData.set("oil_collects", props.oil_collects.toString());
  formData.set("oil_out", props.oil_out.toString());
  return useMutation({
    mutationFn: async () => {
      await httpClient.post("/workshop/oil-waste", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["oil-waste"] });
      return toast.success("Data berhasil ditambahkan");
    },
  });
}

export function useUpdateOilWaste(props: OilWasteRequest, id?: string) {
  const queryClient = useQueryClient();
  const date = `${props.year}-${props.month}-${props.day}`;
  const data = JSON.stringify({
    date: date,
    oil_collects: props.oil_collects,
    oil_out: props.oil_out,
  });
  return useMutation({
    mutationFn: async () => {
      await httpClient.put(`/workshop/oil-waste/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["oil-waste"] });
      return toast.success("Data berhasil diubah");
    },
  });
}

export function useDeleteOilWaste() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await httpClient.delete(`/workshop/oil-waste/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["oil-waste"] });
      return toast.success("Data berhasil dihapus");
    },
  });
}
