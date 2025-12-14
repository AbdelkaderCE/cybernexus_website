import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import App from "./App";
import "./index.css";
import "./styles/cyberAnimations.css";
import "./styles/title.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const rootElement = document.getElementById("root")!;

// Show content after a brief moment to ensure styles are loaded
setTimeout(() => {
  document.documentElement.style.visibility = "visible";
  rootElement.classList.add("loaded");
}, 50);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
          <Analytics />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
