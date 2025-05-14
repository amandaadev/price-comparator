require("dotenv").config();

const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Variável MONGO_URI:", process.env.MONGO_URI);

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1); // Encerra o servidor em caso de erro
  }
};

module.exports = conectarDB;
