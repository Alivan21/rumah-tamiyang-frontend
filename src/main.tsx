import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRoutesProvider } from "./routes";
import { queryClient } from "./lib/react-query";
import "./styles/global.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthProvider";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AppRoutesProvider />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);

const showErrorOverlay = (err: unknown) => {
  const elementName = "vite-error-overlay";
  const ErrorOverlay = customElements.get(elementName);

  // prevent double overlay
  const isAlreadyAppear = document.body.contains(document.querySelector(elementName));
  const isDev = import.meta.env.DEV;

  if (!ErrorOverlay || isAlreadyAppear || !isDev) {
    return;
  }

  document.body.appendChild(new ErrorOverlay(err));
};

window.addEventListener("error", showErrorOverlay);
window.addEventListener("unhandledrejection", ({ reason }) => showErrorOverlay(reason));
