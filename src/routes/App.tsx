import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/cafe/dashboard";
import Income from "@/pages/cafe/income";
import AddIncome from "@/pages/cafe/income/add";
import CafeLayout from "@/pages/cafe/layout";
import Login from "@/pages/auth/login";
import WorkshopDashboard from "@/pages/workshop/dashboard";
import WorkshopLayout from "@/pages/workshop/layout";
import WorkshopIncome from "@/pages/workshop/income";
import WorkshopIncomeDetail from "@/pages/workshop/income/id";
import AddIncomeWorkshop from "@/pages/workshop/income/add";
import WorkshopEditIncome from "@/pages/workshop/income/edit";
import { PrivateRoutesGuard } from "./PrivateRoutesGuard";
import WasteHouseLayout from "@/pages/wastehouse/layout";
import EditCafeIncome from "@/pages/cafe/income/edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<PrivateRoutesGuard />}>
        <Route element={<CafeLayout />} path="cafe">
          <Route index element={<Dashboard />} />
          <Route path="income">
            <Route index element={<Income />} />
            <Route path="add" element={<AddIncome />} />
            <Route path="edit/:id" element={<EditCafeIncome />} />
          </Route>
        </Route>
        <Route element={<WorkshopLayout />} path="workshop">
          <Route index element={<WorkshopDashboard />} />
          <Route path="income" element={<WorkshopIncome />} />
          <Route path="income/add" element={<AddIncomeWorkshop />} />
          <Route path="income/:id" element={<WorkshopIncomeDetail />} />
          <Route path="income/edit/:id" element={<WorkshopEditIncome />} />
        </Route>
        <Route element={<WasteHouseLayout />} path="wastehouse">
          {/* route for wastehouse */}
        </Route>
      </Route>
    </Routes>
  );
}
