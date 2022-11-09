import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "../router/index";
import { RouterProvider } from "react-router-dom";

//import UserProvider from "./context/UserContext";


  <React.StrictMode>
    <RouterProvider>
      <RouterProvider  router={router} />
    </RouterProvider>
  </React.StrictMode>

