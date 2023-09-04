import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/cafe/dashboard";
import Income from "@/pages/cafe/income";
import AddIncome from "@/pages/cafe/income/add";
import CafeLayout from "@/pages/cafe/layout";
import Login from "@/pages/auth/login";
import WorkspaceDashboard from "@/pages/workspace/dashboard";
import WorkspaceLayout from "@/pages/workspace/layout";
import WorkspaceIncome from "@/pages/workspace/income";
import WorkspaceIncomeDetail from "@/pages/workspace/income/id";
import AddIncomeWorkspace from "@/pages/workspace/income/add";
import WorksapceEditIncome from "@/pages/workspace/income/edit";
import { PrivateRoutesGuard } from "./PrivateRoutesGuard";

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
          </Route>
        </Route>
        <Route element={<WorkspaceLayout />} path="workspace">
          <Route index element={<WorkspaceDashboard />} />
          <Route path="income" element={<WorkspaceIncome />} />
          <Route path="income/add" element={<AddIncomeWorkspace />} />
          <Route path="income/:id" element={<WorkspaceIncomeDetail />} />
          <Route path="income/edit/:id" element={<WorksapceEditIncome />} />
        </Route>
      </Route>
    </Routes>
  );
}
