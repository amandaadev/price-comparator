"use client";
import { useState } from "react";

export default function Home() {
  const [produto, setProduto] = useState("");

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
      <div className="mt-4 flex relative z-10 gap-2">
        <input
          className="border-2 border-b-fuchsia-300 p-2 w-auto md:w-80"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          placeholder="Digite o nome do produto"
        />
        <button
          className="bg-gray-400 text-white font-semibold px-4 py-2 rounded text-[20px] shadow-lg cursor-not-allowed"
          disabled
        >
          Buscar
        </button>
      </div>
    </main>
  );
}
