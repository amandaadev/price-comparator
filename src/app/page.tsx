"use client";
import React, { useState } from "react";
import { SearchBar } from "../components/search-bar/search-bar";
import { ProductList } from "../components/product-list";

interface Produto {
  _id: string;
  nome: string;
  preco: number;
  mercado: string;
}

export default function Home() {
  const [produto, setProduto] = useState("");
  const [resultados, setResultados] = useState<Produto[]>([]);
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const buscarPrecos = async () => {
    setLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/produtos${
        produto ? `?nome=${produto}` : ""
      }`;
      const res = await fetch(url);
      setBuscaFeita(true);

      if (!res.ok) {
        setResultados([]);
        return;
      }

      const data = await res.json();
      setResultados(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar:", error);
      setErro("Erro ao buscar dados. Tente novamente mais tarde.");
      setResultados([]);
      setBuscaFeita(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      buscarPrecos();
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
      <p className="md:text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-yellow-400 animate-bounce duration-1000 shadow-lg text-[18px] text-center">
        Comparou, economizou!
      </p>

      <SearchBar
        produto={produto}
        setProduto={setProduto}
        buscarPrecos={buscarPrecos}
        handleKeyDown={handleKeyDown}
        loading={loading}
      />

      <ProductList resultados={resultados} menorPreco={menorPreco} />
      {erro && (
        <p className="text-red-400 text-xl mt-4 relative z-10">{erro}</p>
      )}

      {buscaFeita && resultados.length === 0 && (
        <p className="text-white text-2xl mt-4 relative z-10">
          Nenhum resultado encontrado.
        </p>
      )}
    </main>
  );
}
