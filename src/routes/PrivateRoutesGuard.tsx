import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthProvider";

export function PrivateRoutesGuard() {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate replace state={{ from: location }} to="/" />;
}
