import { Route, Routes } from "react-router-dom";
import App from "@/pages/cafe/dashboard";
import Income from "@/pages/cafe/income";
import AddIncome from "@/pages/cafe/income/add";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/income">
        <Route index element={<Income />} />
        <Route path="add" element={<AddIncome />} />
      </Route>
    </Routes>
  );
}
