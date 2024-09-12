import styles from './Botao.module.css';

interface BotaoProps {
    children: React.ReactNode;
    aoClicar?: React.MouseEventHandler<HTMLButtonElement>
    aoSubmeter?: React.FormEventHandler<HTMLButtonElement>
}

const Botao = ({ children, aoClicar, aoSubmeter }: BotaoProps) => {
    return (
        <button 
            className={styles.botao} 
            onClick={aoClicar}
            onSubmit={aoSubmeter}
        >
            {children}
        </button>
    )
}

export default Botao;