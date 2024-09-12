import { useContext } from "react"
import { CarrinhoContext } from "../contexts/CarrinhoContext"

export const useCarrinho = () => {
    const context = useContext(CarrinhoContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}