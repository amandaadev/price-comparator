require("dotenv").config(); // Carrega o arquivo .env

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://price-comparator-nine.vercel.app", // frontend principal
  "https://price-comparator-git-main-amandaadevs-projects.vercel.app", // fallback de preview
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json()); // Necessário para fazer parsing do corpo das requisições POST

// Rota para produtos
app.use("/produtos", productRoutes);

// Conexão com o banco de dados MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
