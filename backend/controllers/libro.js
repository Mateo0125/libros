import libro from "../models/libro.js";

const registroLibro = async (req, res) => {
  if (
    !req.body.nombre ||
    !req.body.autor ||
    !req.body.descripcion ||
    !req.body.publicationYear ||
    !req.body.paginas ||
    !req.body.genero ||
    !req.body.precio
  )
    return res.status(400).send("Datos incompletos");

  const libroExistente = await libro.findOne({ nombre: req.body.nombre });
  if (libroExistente) return res.status(400).send("Este libro ya existe");

  const libroSchema = new libro({
    nombre: req.body.nombre,
    autor: req.body.autor,
    descripcion: req.body.descripcion,
    publicationYear: req.body.publicationYear,
    paginas: req.body.paginas,
    genero: req.body.genero,
    precio: req.body.precio,
  });

  const resultado = await libroSchema.save();
  if (!resultado)
    return res
      .status(400)
      .send("El proceso de registrar el libro no se finalizo correctamente");

  return res.status(200).send({ resultado });
};

const listarLibro = async (req, res) => {
  const libroSchema = await libro.find();
  if (!libroSchema || libroSchema.length == 0)
    return res.status(400).send("Lista de libros esta vacia");
  return res.status(200).send({ libroSchema });
};

const actualizarLibro = async (req, res) => {
  if (!req.body.nombre || !req.body.autor)
    return res.status(400).send("Datos incompletos");

  const libroExistente = await libro.findOne({
    nombre: req.body.nombre,
    autor: req.body.autor,
  });
  if (libroExistente) return res.status(400).send("Este libro ya existe");

  const libroActualizar = await libro.findByIdAndUpdate(req.body._id, {
    nombre: req.body.nombre,
    autor: req.body.autor,
  });

  return !libroActualizar
    ? res.status(400).send("Error al editar el libro")
    : res.status(200).send({ libroActualizar });
};

const eliminarLibro = async (req, res) => {
  const libroDelete = await libro.findByIdAndDelete({ _id: req.params["_id"] });

  return !libroDelete
    ? res.status(400).send("Libro no encontrado")
    : res.status(200).send("Libro eliminado");
};

export default { registroLibro, listarLibro, actualizarLibro, eliminarLibro };
