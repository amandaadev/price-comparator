import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Product from "../../backend/models/product";

const MONGO_URI = process.env.MONGO_URI!; // Pegue a URL do MongoDB do .env

// Conectar ao MongoDB (evita reconectar em cada requisição)
const conectarDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB conectado com sucesso!");
    }
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw new Error("Erro ao conectar ao banco de dados");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await conectarDB(); // Conecta ao banco antes de qualquer operação

  if (req.method === "GET") {
    const { nome } = req.query;
    try {
      const produtos = await Product.find({
        nome: new RegExp(nome as string, "i"),
      });
      return res.status(200).json(produtos);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  }

  if (req.method === "POST") {
    const { nome, preco, mercado } = req.body;
    try {
      const novoProduto = new Product({ nome, preco, mercado });
      await novoProduto.save();
      return res.status(201).json(novoProduto);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      return res.status(500).json({ error: "Erro ao adicionar produto" });
    }
  }

  res.status(405).json({ error: "Método não permitido" });
}
