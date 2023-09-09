import { useMemo, useState } from "react";
import { createContext } from "@/utils/create-context";
import { decodeJwt } from "@/utils/jwt";

type AuthJwtPayload = {
  sub: number;
  exp: string;
  role: string;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  token: string | undefined;
  setToken: (token: string | undefined) => void;
  jwtPayload: AuthJwtPayload | undefined;
};

const [useAuthContext, AuthProviderInternal] = createContext<AuthContextValue>({
  name: "AuthContext",
});
// eslint-disable-next-line react-refresh/only-export-components
export { useAuthContext };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | undefined>(undefined);
  const jwtPayload = useMemo(() => decodeJwt<AuthJwtPayload>(token), [token]);

  return (
    <AuthProviderInternal
      value={{
        isLoggedIn: token !== undefined,
        token,
        setToken,
        jwtPayload,
      }}
    >
      {children}
    </AuthProviderInternal>
  );
}
