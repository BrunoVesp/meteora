import styles from './ProdutoCarrinho.module.css';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

interface ProdutoCarrinhoProps {
    nome: string
    quantidade: number
    preco: number
    imagem: string
}

const ProdutoCarrinho = ({ imagem, nome, quantidade, preco } : ProdutoCarrinhoProps) => {
    return (
        <div className={styles.produto}>
            <img 
                src={imagem} 
                alt={nome}
                className={styles.imagemCarrinho}
            />
            <div className={styles.conteudo}>
                <h5>{nome}</h5>
                <p>Quantidade</p>
                <div>
                    <CiCircleMinus 
                        className={styles.icone} 
                        size={25}
                    />
                    <p>{quantidade}</p>
                    <CiCirclePlus 
                        className={styles.icone} 
                        size={25} 
                    />
                </div>
                <span>R$ {preco},00</span>
            </div>
            <MdOutlineDeleteForever 
                className={styles.icone} 
                size={25} 
            />
        </div>
    )
}

export default ProdutoCarrinho;