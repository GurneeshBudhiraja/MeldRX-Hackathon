import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PatientContextWrapper from "./components/context/patientContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PatientContextWrapper>
      <App />
    </PatientContextWrapper>
  </StrictMode>
);
