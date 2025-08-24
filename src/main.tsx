import { createRoot } from "react-dom/client";
import "./globals.css";
import { App } from "./app/app";
import { StrictMode } from "react";


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
