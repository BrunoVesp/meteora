import { useState } from 'react';
import Botao from '../Botao';
import Input from '../Input';
import styles from './SecaoEmail.module.css';
import ModalEmail from '../ModalEmail';
import { useModalContext } from '../../hooks/useModalContext';

const SecaoEmail = () => {
    const { abrirModalForm } = useModalContext();

    const [email, setEmail] = useState('');

    return (
        <section className={styles.secaoEmail}>
            <div className={styles.cotainerEmail}>
                <h4>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <span>Cadastre-se!</span></h4>
                <form onSubmit={abrirModalForm}>
                    <Input
                        tipo='email'
                        placeholder='Digite seu email'
                        aoAlterado={valor => setEmail(valor)}
                        valor={email}
                        requerido
                    />
                    <Botao>Enviar</Botao>
                    <ModalEmail />
                </form>
            </div>
        </section>
    )
}

export default SecaoEmail;