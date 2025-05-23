require("dotenv").config(); // Carrega o arquivo .env

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:3000", // para uso local
  "https://price-comparator-nine.vercel.app", // produção
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json()); // Necessário para parsing

// Só conecta e sobe o servidor depois de conectar no MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB conectado");

    // define rotas
    app.use("/produtos", productRoutes);

    // sobe o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
