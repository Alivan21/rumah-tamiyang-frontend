import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App";

export function AppRoutesProvider() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <AppRoutes />,
    },
  ]);

  return <RouterProvider router={router} />;
}
