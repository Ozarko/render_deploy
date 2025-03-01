import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/post.js";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
