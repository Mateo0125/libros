import express from "express";
import libro from "../controllers/libro.js";

const router = express.Router();

// http://localhost:3001/api/libro
router.post("/registroLibro", libro.registroLibro);
router.get("/listarLibro", libro.listarLibro);
router.put("/actualizarLibro", libro.actualizarLibro);
router.delete("/eliminarLibro/:_id", libro.eliminarLibro);

export default router;
