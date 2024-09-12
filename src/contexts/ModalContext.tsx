import { createContext, useState } from "react";
import { Iprodutos } from "../shared/interfaces/Iprodutos";

interface ModalContextProps {
    itemSelecionado: Iprodutos | null
    estaAberto: boolean
    abrirModal: (item: Iprodutos) => void
    fecharModal: () => void
    abrirModalForm: (evento: React.FormEvent<HTMLFormElement>) => void
    abrirModalCarrinho: () => void
}

interface ModalProvider {
    children: React.ReactNode
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalProvider = ({ children } : ModalProvider) => {

    const [itemSelecionado, setItemSelecionado] = useState<Iprodutos | null>(null);
    const [estaAberto, setEstaAberto] = useState<boolean>(false);
    
    const abrirModal = (item: Iprodutos) => {
        setItemSelecionado(item);
        setEstaAberto(true);
    };

    const fecharModal = () => {
        setEstaAberto(false);
        setItemSelecionado(null);
    };

    const abrirModalForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        setEstaAberto(true);
    };

    const abrirModalCarrinho = () => {
        setEstaAberto(true);
    }

    return (
        <ModalContext.Provider 
            value={{
                itemSelecionado,
                estaAberto,
                abrirModal,
                fecharModal,
                abrirModalForm,
                abrirModalCarrinho
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}