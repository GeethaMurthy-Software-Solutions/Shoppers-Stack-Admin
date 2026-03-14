import { StrictMode } from 'react'
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes}>
          <App />
        </RouterProvider>
  </StrictMode>,
)
