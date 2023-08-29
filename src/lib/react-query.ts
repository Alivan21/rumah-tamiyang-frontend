import { QueryClient } from "@tanstack/react-query";

const MAX_RETRIES = 3;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: failureCount => failureCount < MAX_RETRIES,
    },
  },
});
