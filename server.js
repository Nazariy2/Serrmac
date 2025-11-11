import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jsonServer from "json-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// === Serve il frontend ===
app.use(express.static(path.join(__dirname, "public"))); 
// 👆 Mostra index.html e i file statici dalla cartella "public"

// === Backend con JSON Server ===
const router = jsonServer.router("public/src/db.json");
const middlewares = jsonServer.defaults();

app.use("/api", middlewares, router);

// === Avvio server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(` Server running on port ${PORT}`);
});
