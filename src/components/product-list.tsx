"use client";
import React from "react";

interface Produto {
  _id: string;
  nome: string;
  preco: number;
  mercado: string;
}

interface ProductListProps {
  resultados: Produto[];
  menorPreco: number | null;
}

export const ProductList: React.FC<ProductListProps> = ({
  resultados,
  menorPreco,
}) => {
  return (
    <ul className="mt-4 relative z-10">
      {resultados.map((item) => {
        const isMenorPreco = item.preco === menorPreco;

        return (
          <li
            key={item._id}
            className={`border-2 p-2 mt-2 w-full text-center ${
              isMenorPreco
                ? "border-yellow-400 bg-yellow-600 animate-pulse font-bold scale-105"
                : "border-white"
            }`}
          >
            <strong>{item.nome}</strong> - R${item.preco.toFixed(2)} (
            {item.mercado})
          </li>
        );
      })}
    </ul>
  );
};
