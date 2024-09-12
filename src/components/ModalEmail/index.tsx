import { useModalContext } from '../../hooks/useModalContext';
import HeaderModal from '../HeaderModal';
import styles from './ModalEmail.module.css';

const ModalEmail = () => {
    const { estaAberto, fecharModal } = useModalContext();

    if (!estaAberto) return null;

    return (
        <div className={styles.modalOverlay} onClick={fecharModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div>
                    <HeaderModal 
                        texto='E-mail cadastrado com sucesso!' 
                        aoClicar={fecharModal}
                    />
                </div>
                <div className={styles.conteudo}>
                    <p>Em breve você receberá novidades exclusivas da Meteora.</p>
                </div>
            </div>
        </div>
    )
}

export default ModalEmail;