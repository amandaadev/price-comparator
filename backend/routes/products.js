const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// Buscar produtos por nome
router.get("/", async (req, res) => {
  const { nome } = req.query;
  try {
    const produtos = await Product.find({ nome: new RegExp(nome, "i") });
    res.json(produtos);
  } catch (error) {
    console.error("Erro real ao buscar produtos:", error); // 👈 adicione esta linha
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});


// Adicionar um novo produto
router.post("/", async (req, res) => {
  const { nome, preco, mercado } = req.body;

  try {
    const novoProduto = new Product({
      nome,
      preco,
      mercado,
    });

    await novoProduto.save();
    res.status(201).json(novoProduto); // Retorna o produto criado
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar produto" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Product.findByIdAndDelete(id);
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.status(200).json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir produto" });
  }
});

module.exports = router;
