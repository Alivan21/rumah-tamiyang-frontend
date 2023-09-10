import { BaseResponse } from "@/utils/constant";
import { httpClient } from "@/utils/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export type cafeIncome = {
  id: number;
  date: string;
  revenue: number;
  expense: number;
  profit: number;
};

export type CafeIncomeRequest = {
  day: number;
  month: string;
  year: number;
  expense: number;
  revenue: number;
};

export function useGetCafeIncomes() {
  return useQuery({
    queryKey: ["cafe-income"],
    queryFn: async () => {
      const { data } = await httpClient.get<BaseResponse<cafeIncome[]>>("/cafe/revenue?page=1&perPage=10");
      if (data.data === undefined) return;
      return data.data;
    },
  });
}

export function useGetCafeIncomesById(id?: string) {
  return useQuery({
    queryKey: ["cafe-income", id],
    queryFn: async () => {
      const { data } = await httpClient.get<BaseResponse<cafeIncome>>(`/cafe/revenue/${id}`);
      if (data.data === undefined) return;
      return data.data;
    },
  });
}

export function useAddCafeIncome(props: CafeIncomeRequest) {
  const queryClient = useQueryClient();
  const formData = new FormData();
  const date = `${props.year}-${props.month}-${props.day}`;

  formData.set("date", date);
  formData.set("revenue", props.revenue.toString());
  formData.set("expense", props.expense.toString());
  return useMutation({
    mutationFn: async () => {
      await httpClient.post("/cafe/revenue", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cafe-income"] });
      toast.success("Data berhasil ditambahkan");
    },
  });
}

export function useEditCafeIncome(props: CafeIncomeRequest, id?: string) {
  const queryClient = useQueryClient();
  const formData = new FormData();
  const date = `${props.year}-${props.month}-${props.day}`;
  formData.set("date", date);
  formData.set("revenue", props.revenue.toString());
  formData.set("expense", props.expense.toString());
  return useMutation({
    mutationFn: async () => {
      await httpClient.put(`/cafe/revenue/${id}`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cafe-income"] });
      toast.success("Data berhasil diperbarui");
    },
  });
}

export function useDeleteCafeIncome() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await httpClient.delete(`/cafe/revenue/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cafe-income"] });
      toast.success("Data berhasil dihapus");
    },
  });
}
