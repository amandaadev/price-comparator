const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  mercado: String,
});

module.exports = mongoose.model("Product", ProductSchema);
