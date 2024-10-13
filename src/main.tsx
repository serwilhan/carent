import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "@/styles/globals.css";

import { ThemeProvider } from "./components/theme-provider.tsx";
import { Navigator } from "./navigator.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigator />
    </ThemeProvider>
  </StrictMode>
);
