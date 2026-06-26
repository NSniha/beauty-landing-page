import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Please check index.html and make sure <div id='root'></div> exists."
  );
}

createRoot(rootElement).render(<App />);