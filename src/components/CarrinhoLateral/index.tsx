import { useCarrinho } from '../../hooks/useCarrinho';
import { useModalContext } from '../../hooks/useModalContext';
import ProdutoCarrinho from '../ProdutoCarrinho';
import styles from './Carrinho.module.css';
import { IoMdClose } from "react-icons/io";


const CarrinhoLateral = () => {
    const { estaAberto, fecharModal } = useModalContext();
    const { carrinho } = useCarrinho();

    if (!estaAberto) return null;

    return (
        <div className={styles.overlay} onClick={fecharModal}>
            <div className={styles.carrinho} onClick={(e) => e.stopPropagation()}>
                <div className={styles.cabecalho}>
                    <p>Carrinho</p>
                    <IoMdClose
                        onClick={fecharModal}
                        size={25}
                        className={styles.icone}
                    />
                </div>
                <div className={styles.carrinhoContainer}>
                    {carrinho.map(item =>
                        <ProdutoCarrinho
                            imagem={item.imagem}
                            key={item.id}
                            nome={item.nome}
                            quantidade={item.quantidade}
                            preco={item.preco}
                        />
                    )}
                    <div className={styles.preco}><span>Total</span> <p>R$ { },00</p></div>
                    <button className={styles.carrinhoBotao}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default CarrinhoLateral;