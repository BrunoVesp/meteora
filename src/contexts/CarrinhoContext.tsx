import { createContext, useState } from "react";
import { Iprodutos } from "../shared/interfaces/Iprodutos";

interface CarrinhoContextProps {
    carrinho: Iprodutos[]
    adicionarAoCarrinho: (item: Iprodutos) => void
}

interface CarrinhoProviderProps {
    children: React.ReactNode
}

export const CarrinhoContext = createContext<CarrinhoContextProps>({} as CarrinhoContextProps);

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
     const [carrinho, setCarrinho] = useState<Iprodutos[]>([]);

     const adicionarAoCarrinho = (item: Iprodutos) => {
         setCarrinho((prevCart) => {
             const itemExistente = prevCart.find((i) => i.id === item.id);
             if (itemExistente) {
                 return prevCart.map((i) => 
                     i.id === item.id
                     ? { ...i, quantidade: i.quantidade + item.quantidade }
                     : i
                );
             }
             return [...prevCart, item]
         })
     }

    return (
        <CarrinhoContext.Provider value={{
            adicionarAoCarrinho,
            carrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}