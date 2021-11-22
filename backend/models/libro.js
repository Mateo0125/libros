import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  nombre: String,
  autor: String,
  descripcion: String,
  publicationYear: String,
  registerDate: { type: Date, default: Date.now },
  paginas: Number,
  genero: String,
  precio: Number,
});

const libro = mongoose.model("libros", libroSchema);

export default libro;
