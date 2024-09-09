import styles from './Botao.module.css';

interface BotaoProps {
    children: React.ReactNode;
    aoClicar?: React.MouseEventHandler<HTMLButtonElement>
}

const Botao = ({ children, aoClicar }: BotaoProps) => {
    return (
        <button 
            className={styles.botao} 
            onClick={aoClicar}
        >
            {children}
        </button>
    )
}

export default Botao;