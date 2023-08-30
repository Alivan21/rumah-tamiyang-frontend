import { Route, Routes } from "react-router-dom";
import App from "@/pages";
import Edit from "@/pages/edit";
import AddIncome from "@/pages/income/add";
import Income from "@/pages/income";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/income">
        <Route index element={<Income />} />
        <Route path="add" element={<AddIncome />} />
      </Route>
    </Routes>
  );
}
