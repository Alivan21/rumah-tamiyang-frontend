import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app";

export function AppRoutesProvider() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <AppRoutes />,
    },
  ]);

  return <RouterProvider router={router} />;
}
