import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LocalStorageProvider } from "./contexts/local-storage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </StrictMode>
);
