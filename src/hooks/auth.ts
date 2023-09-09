import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/contexts/AuthProvider";
import { BaseResponse } from "@/utils/constant";
import { httpClient } from "@/utils/http";

export type SignInRequest = {
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
  expires_at: string;
};

export function useSignIn(props: SignInRequest) {
  const { setToken } = useAuthContext();
  const formData = new FormData();
  formData.set("identifier", props.email);
  formData.set("password", props.password);
  return useMutation({
    mutationFn: async () => {
      const { data } = await httpClient.post<BaseResponse<AuthResponse>>("/auth/login", formData);
      if (data.data === undefined) return;
      httpClient.defaults.headers.common.Authorization = `Bearer ${data.data.token}`;
      setToken(data.data.token);
    },
  });
}

export function useSignOut() {
  const { setToken } = useAuthContext();
  return useMutation({
    mutationFn: async () => {
      await httpClient.post("/auth/logout");
      delete httpClient.defaults.headers.common.Authorization;
      setToken("");
    },
  });
}
