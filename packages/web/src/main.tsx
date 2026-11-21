import React from "react";
import ReactDOM from "react-dom/client";
import type { StoredTrace } from "@llm-obs/shared";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>LLM Observability & Evaluation Platform</h1>
      <p>npm workspace linked successfully.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);