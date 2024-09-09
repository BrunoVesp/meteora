import { useState } from 'react';
import Botao from '../Botao';
import Input from '../Input';
import styles from './SecaoEmail.module.css';

const SecaoEmail = () => {

    const [email, setEmail] = useState('');

    function teste(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log('submeteu');
    }

    return (
        <section className={styles.secaoEmail}>
            <div className={styles.cotainerEmail}>
                <h4>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <span>Cadastre-se!</span></h4>
                <form onSubmit={teste}>
                    <Input
                        tipo='email'
                        placeholder='Digite seu email'
                        aoAlterado={valor => setEmail(valor)}
                        valor={email}
                        requerido
                    />
                    <Botao>Enviar</Botao>
                </form>
            </div>
        </section>
    )
}

export default SecaoEmail;