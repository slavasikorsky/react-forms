import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers/Router";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
