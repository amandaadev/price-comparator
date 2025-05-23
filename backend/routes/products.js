const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// Função para remover acentos de uma string
function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Buscar produtos por nome (com suporte a pesquisa sem acento)
router.get("/", async (req, res) => {
  console.log("Requisição recebida no backend");

  const { nome } = req.query;

  try {
    let produtos;

    if (nome) {
      const termo = removerAcentos(nome.trim());

      // Busca todos os produtos e filtra manualmente
      const todosProdutos = await Product.find({});
      produtos = todosProdutos.filter((p) => {
        const nomeProdutoNormalizado = removerAcentos(p.nome);
        return nomeProdutoNormalizado
          .toLowerCase()
          .startsWith(termo.toLowerCase());
      });
    } else {
      console.log("Buscando todos os produtos");
      produtos = await Product.find({});
    }

    console.log(`Produtos encontrados: ${produtos.length}`);
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
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
    console.error("Erro ao adicionar produto:", error);
    res.status(500).json({ error: "Erro ao adicionar produto" });
  }
});

// Deletar produto
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
