import styles from './ItemInfo.module.css';

interface ItemInfoProps {
    imagem: string
    titulo: string
    descricao: string
}

const ItemInfo = ({ imagem, titulo, descricao } : ItemInfoProps) => {
    return (
        <div className={styles.itemInfo}>
            <img src={imagem} alt="Facilidades" />
            <div className={styles.textos}>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default ItemInfo;