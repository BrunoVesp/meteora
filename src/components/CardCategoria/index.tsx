import styles from './CardCategoria.module.css';

interface CardCategoriaProps {
    imagem: string
    nomeCategoria: string
}

const CardCategoria = ({ imagem, nomeCategoria } : CardCategoriaProps) => {
    return (
        <div className={styles.cardCategoria}>
            <img src={imagem} alt={nomeCategoria} />
            <p>{nomeCategoria}</p>
        </div>
    )
}

export default CardCategoria;