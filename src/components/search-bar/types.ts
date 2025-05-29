export interface SearchBarProps {
  produto: string;
  setProduto: (produto: string) => void;
  buscarPrecos: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  loading: boolean;
}

export interface Produto {
  _id: string;
  nome: string;
  preco: number;
  mercado: string;
}
