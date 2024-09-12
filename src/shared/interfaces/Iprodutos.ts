export interface Iprodutos {
    id: number;
    imagem: string;
    nome: string;
    descricao?: string;
    preco: number;
    categoria?: string;
    quantidade: number;
}

// export interface ItemCarrinho {
//     produto: Iprodutos;
//     quantidade: number;
// }

// export interface CarrinhoContextType {
//     itens: ItemCarrinho[];
//     adicionarAoCarrinho: (produto: Iprodutos, quantidade: number) => void;
//     removerDoCarrinho: (id: number) => void;
// }