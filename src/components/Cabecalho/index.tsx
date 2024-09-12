import { useState } from 'react';
import Input from '../Input';
import styles from './Cabecalho.module.css';
import Botao from '../Botao';
import { useEhMobile } from '../../hooks/UseEhMobile';
import MenuHamburguer from '../MenuHamburguer';
import { FaShoppingCart } from "react-icons/fa";
import { useModalContext } from '../../hooks/useModalContext';

const Cabecalho = () => {
    const { abrirModalCarrinho } = useModalContext();
    const { ehMobile } = useEhMobile();
    const [busca, setBusca] = useState('');

    return (
        <header className={styles.cabecalho}>
            <nav>
                <a href="/">
                    <img
                        src={ehMobile ? '/Mobile/Logo-mobile.png' : '/Desktop/Logo-desktop.png'}
                        alt="Logo"
                    />
                </a>
                <ul className={styles.lista}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Nossas lojas</a></li>
                    <li><a href="/">Novidades</a></li>
                    <li><a href="/">Promoções</a></li>
                </ul>
                <span className={styles.icone}>
                    <MenuHamburguer />
                </span>
            </nav>
            <div className={styles.busca}>
                <Input
                    placeholder='Digite o produto'
                    tipo='text'
                    valor={busca}
                    aoAlterado={valor => setBusca(valor)}
                />
                <Botao>Buscar</Botao>
                <FaShoppingCart onClick={abrirModalCarrinho} className={styles.icone}/>
            </div>
        </header>
    )
}

export default Cabecalho;