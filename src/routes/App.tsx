import { Route, Routes } from "react-router-dom";
import App from "@/pages/cafe/dashboard";
import Income from "@/pages/cafe/income";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/income">
        <Route index element={<Income />} />
      </Route>
    </Routes>
  );
}
