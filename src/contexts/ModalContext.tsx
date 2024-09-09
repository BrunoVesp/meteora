import { createContext, useState } from "react";
import { Iprodutos } from "../shared/interfaces/Iprodutos";

interface ModalContextProps {
    itemSelecionado: Iprodutos | null
    estaAberto: boolean
    abrirModal: (item: Iprodutos) => void
    fecharModal: () => void
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

    return (
        <ModalContext.Provider 
            value={{
                itemSelecionado,
                estaAberto,
                abrirModal,
                fecharModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}