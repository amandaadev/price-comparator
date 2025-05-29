"use client";
import React from "react";
import { SearchBarProps } from "../search-bar/types";

export const SearchBar: React.FC<SearchBarProps> = ({
  produto,
  setProduto,
  buscarPrecos,
  handleKeyDown,
  loading,
}) => {
  return (
    <div className="mt-4 flex relative z-10 gap-2">
      <input
        className="border-2 border-b-fuchsia-300 p-2 w-auto md:w-72"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        placeholder="Digite o nome do produto"
        onKeyDown={handleKeyDown}
        aria-label="Buscar produto"
      />
      <button
        onClick={buscarPrecos}
        disabled={loading}
        className={`bg-green-600 text-white font-semibold px-4 py-2 rounded text-[20px] shadow-lg transform transition-all duration-300 ${
          loading
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-green-700 hover:scale-105 hover:shadow-xl"
        }`}
        aria-label="Buscar preços"
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
};
