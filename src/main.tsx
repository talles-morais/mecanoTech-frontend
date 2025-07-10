import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import router from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
      <BrowserRouter>
        <App />
      </BrowserRouter>

  </StrictMode>
);
