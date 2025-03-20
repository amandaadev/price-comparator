"use client";
import React, { useState } from "react";

interface Produto {
  _id: string; // Corrigido para refletir o campo _id gerado pelo MongoDB
  nome: string;
  preco: number;
  mercado: string;
}

export default function Home() {
  const [produto, setProduto] = useState("");
  const [resultados, setResultados] = useState<Produto[]>([]);

  const buscarPrecos = async () => {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://price-comparator-flu7ram0m-amandaadevs-projects.vercel.app/api/products";

    const res = await fetch(`${API_URL}?nome=${produto}`);
    const data = await res.json();
    setResultados(data);
  };


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      buscarPrecos(); // Executa a busca quando o Enter é pressionado
    }
  };

  const menorPreco =
    resultados.length > 0 ? Math.min(...resultados.map((p) => p.preco)) : null;

  return (
    <main
      className="flex flex-col justify-center items-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/fundo.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-yellow-400 animate-bounce duration-1000 shadow-lg md:text-6xl">
        Busca Preços
      </h1>
      <p className="md:text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-yellow-400  animate-bounce duration-1000 shadow-lg text-[18px] text-center">
        Comparou, economizou!
      </p>
      <div className="mt-4 flex relative z-10 gap-2">
        <input
          className="border-2 border-b-fuchsia-300 p-2 w-auto md:w-72"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          placeholder="Digite o nome do produto"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={buscarPrecos}
          className="bg-green-600 text-white font-semibold px-4 py-2 rounded text-[20px] shadow-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl"
        >
          Buscar
        </button>
      </div>
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
    </main>
  );
}
