import { Route, Routes } from "react-router-dom";
import App from "@/pages/cafe/dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}
