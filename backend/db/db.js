// importar libreria que administra mongo en el codigo

import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Estas conectado a MongoDB: OK");
  } catch (e) {
    console.log("Error al conectar con MongoDB: \n" + e);
  }
};

export default { dbConnection };
