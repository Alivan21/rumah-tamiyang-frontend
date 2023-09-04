import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/contexts/AuthProvider";
import { BaseResponse } from "@/utils/constant";
import { httpClient } from "@/utils/http";

export type SignInRequest = {
  identifier: string;
  password: string;
};

type AuthResponse = {
  token: string;
  expires_at: string;
};

export function useSignIn(props: SignInRequest) {
  const { setToken } = useAuthContext();
  const formData = new FormData();
  formData.set("identifier", props.identifier);
  formData.set("password", props.password);
  return useMutation({
    mutationFn: async () => {
      const { data } = await httpClient.post<BaseResponse<AuthResponse>>("/auth/login", formData);
      if (data.data === undefined) return;
      setToken(data.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${data.data.token}`;
    },
  });
}
