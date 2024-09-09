import styles from './HeaderModal.module.css';
import { GiConfirmed } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface HeaderModalProps {
    texto: string
    aoClicar: React.MouseEventHandler<SVGElement>
}

const HeaderModal = ({ texto, aoClicar } : HeaderModalProps) => {

    return (
        <div className={styles.fundo}>
            <GiConfirmed 
                className={styles.icone} 
                size={32}
            />
            <h5>{texto}</h5>
            <IoMdClose 
                size={30} 
                className={styles.iconeFechar}
                onClick={aoClicar}
            />
        </div>
    )
}

export default HeaderModal;