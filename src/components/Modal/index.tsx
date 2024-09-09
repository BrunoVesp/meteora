import { useModalContext } from '../../hooks/useModalContext';
import Botao from '../Botao';
import HeaderModal from '../HeaderModal';
import styles from './Modal.module.css';

const Modal = () => {
    const { estaAberto, itemSelecionado, fecharModal } = useModalContext();

    if (!estaAberto || !itemSelecionado) return null;

    return (
        <div className={styles.modalOverlay} onClick={fecharModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div>
                    <HeaderModal
                        texto='Confira detalhes sobre o produto'
                        aoClicar={fecharModal}
                    />
                </div>
                <div className={styles.containerModal}>
                    <img 
                        className={styles.imagemModal} 
                        src={itemSelecionado.imagem} 
                        alt={itemSelecionado.nome} 
                    />
                    <div className={styles.infosModal}>
                        <h5>{itemSelecionado.nome}</h5>
                        <p className={styles.descricao}>{itemSelecionado.descricao}</p>
                        <p className={styles.preco}>R$ {itemSelecionado.preco},00</p>
                        <p className={styles.apagado}>Vendido e entregue por Riachuelo</p>
                        <form>
                            <div>
                                <label htmlFor="cores">Cores:</label>
                                <div className={styles.containerInputs}>
                                    <p>
                                        <input type="radio" name="cores" id='azul' /><span>Azul claro</span>
                                    </p>
                                    <p>
                                        <input type="radio" name="cores" id='branco' /><span>Offwhite</span>
                                        </p>
                                    <p><input type="radio" name="cores" id='preto' /><span>Preto</span></p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="tamanho">Tamanho:</label>
                                <div className={styles.containerInputs}>
                                    <p><input type="radio" name="tamanho" id='pp' /><span>PP</span></p>
                                    <p><input type="radio" name="tamanho" id='p' /><span>P</span></p>
                                    <p><input type="radio" name="tamanho" id='m' /><span>M</span></p>
                                    <p><input type="radio" name="tamanho" id='g' /><span>G</span></p>
                                    <p><input type="radio" name="tamanho" id='gg' /><span>GG</span></p>
                                </div>
                            </div>
                        </form>
                        <Botao>Adicionar à sacola</Botao>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;