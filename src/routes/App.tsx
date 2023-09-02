import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/cafe/dashboard";
import Income from "@/pages/cafe/income";
import AddIncome from "@/pages/cafe/income/add";
import CafeLayout from "@/pages/cafe/layout";
import Login from "@/pages/auth/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<CafeLayout />} path="cafe">
        <Route index element={<Dashboard />} />
        <Route path="income">
          <Route index element={<Income />} />
          <Route path="add" element={<AddIncome />} />
        </Route>
      </Route>
    </Routes>
  );
}
