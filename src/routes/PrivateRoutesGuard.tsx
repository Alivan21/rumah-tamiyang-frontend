import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthProvider";
import { useEffect } from "react";

export function PrivateRoutesGuard() {
  const { isLoggedIn, jwtPayload } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtPayload?.role == undefined) {
      return navigate("/");
    }
  }, [jwtPayload, navigate]);

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate replace state={{ from: location }} to="/" />;
}
