// import { Iprodutos } from '../../shared/interfaces/Iprodutos';
import Botao from '../Botao';
import styles from './CardProduto.module.css';

interface CardProdutoProps {
    imagem: string
    nomeProduto: string
    descricao: string
    preco: number
    aoClicar: React.MouseEventHandler<HTMLButtonElement> | undefined
    // item: Iprodutos
}

const CardProduto = ({ imagem, nomeProduto, descricao, preco, aoClicar } : CardProdutoProps) => {

    return (
        <div className={styles.cardProduto}>
            <img src={imagem} alt={nomeProduto} />
            <h3>{nomeProduto}</h3>
            <div>
                <p>{descricao}</p>
                <span>R$ {preco},00</span>
            </div>
            <div>
                <Botao aoClicar={aoClicar} >Ver mais</Botao>
            </div>
        </div>
    )
}

export default CardProduto;