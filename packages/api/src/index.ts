import express from "express";
import type { IngestTracePayload } from "@llm-obs/shared";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "api" });
});

app.listen(4000, () => {
  console.log("API listening on http://localhost:4000");
});