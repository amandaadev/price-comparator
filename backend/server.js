require("dotenv").config(); // Carrega o arquivo .env

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Necessário para fazer parsing do corpo das requisições POST

// Rota para produtos
app.use("/produtos", productRoutes); // A rota /produtos agora deve funcionar

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
