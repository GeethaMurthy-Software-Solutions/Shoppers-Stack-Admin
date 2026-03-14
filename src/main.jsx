import { StrictMode } from 'react'
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import routes from "./routes/Router.jsx";
import App from './App.jsx'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes}>
          <App />
        </RouterProvider>
  </StrictMode>,
)
