// aqui importamos la libreria express

import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import libro from "./routes/libro.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/libro", libro);

app.listen(process.env.PORT, () =>
  console.log("El servidor del backend esta funcionando en el puerto: " + process.env.PORT)
);

db.dbConnection();