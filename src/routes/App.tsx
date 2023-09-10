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
import AddWasteOil from "@/pages/wastehouse/waste-oil/add";
import WasteOil from "@/pages/wastehouse/waste-oil";
import WasteHouse from "@/pages/wastehouse/dashboard";
import EditWasteOil from "@/pages/wastehouse/waste-oil/edit";
import WasteHouseProduction from "@/pages/wastehouse/production";
import WasteHouseProductionDetails from "@/pages/wastehouse/production/id";
import WasteHouseAddProduction from "@/pages/wastehouse/production/add";
import EditProductionWasteHouse from "@/pages/wastehouse/production/edit";
import WasteHouseIncome from "@/pages/wastehouse/income";
import WasteHouseIncomeAdd from "@/pages/wastehouse/income/add";
import WasteHouseIncomeDetails from "@/pages/wastehouse/income/id";
import WasteHouseIncomeEdit from "@/pages/wastehouse/income/edit";
import WasteHouseCharging from "@/pages/wastehouse/charging";
import WasteHouseAddCharging from "@/pages/wastehouse/charging/add";
import WasteHouseChargingEdit from "@/pages/wastehouse/charging/edit";
import AdminLayout from "@/pages/admin/layout";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminUser from "@/pages/admin/user";
import AddUser from "@/pages/admin/user/add";
import UserEdit from "@/pages/admin/user/edit";

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
          <Route index element={<WasteHouse />} />
          <Route path="waste-oil" element={<WasteOil />} />
          <Route path="/wastehouse/waste-oil/add" element={<AddWasteOil />} />
          <Route path="/wastehouse/waste-oil/edit/:id" element={<EditWasteOil />} />

          <Route path="/wastehouse/production" element={<WasteHouseProduction />} />
          <Route path="/wastehouse/production/add" element={<WasteHouseAddProduction />} />
          <Route path="/wastehouse/production/:id" element={<WasteHouseProductionDetails />} />
          <Route path="/wastehouse/production/edit/:id" element={<EditProductionWasteHouse />} />

          <Route path="/wastehouse/income" element={<WasteHouseIncome />} />
          <Route path="/wastehouse/income/add" element={<WasteHouseIncomeAdd />} />
          <Route path="/wastehouse/income/:id" element={<WasteHouseIncomeDetails />} />
          <Route path="/wastehouse/income/edit/:id" element={<WasteHouseIncomeEdit />} />

          <Route path="/wastehouse/charging" element={<WasteHouseCharging />} />
          <Route path="/wastehouse/charging/add" element={<WasteHouseAddCharging />} />
          <Route path="/wastehouse/charging/edit/:id" element={<WasteHouseChargingEdit />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="user/add" element={<AddUser />} />
          <Route path="user/edit/:id" element={<UserEdit />} />
        </Route>
      </Route>
    </Routes>
  );
}
