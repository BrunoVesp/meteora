import styles from './Titulo.module.css';

interface TituloProps {
    texto: string
}

const Titulo = ({ texto } : TituloProps) => {
    return (
        <h2 className={styles.titulo}>{texto}</h2>
    )
}

export default Titulo