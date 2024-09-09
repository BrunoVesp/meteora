import { useState } from 'react';
import styles from './MenuHamburguer.module.css';
import { IoMdMenu, IoMdClose  } from "react-icons/io";

function MenuHamburguer() {
    const [estaAberto, setEstaAberto] = useState(false);

    function mudarMenu() {
        setEstaAberto(!estaAberto)
    }

    return (
        <>
            <IoMdMenu size={30} className={styles.icone} onClick={mudarMenu} />
            <div className={estaAberto? styles.menuAberto : styles.menuFechado}>
                <IoMdClose size={30} className={styles.icone} onClick={mudarMenu}/>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Nossas lojas</a></li>
                    <li><a href="/">Novidades</a></li>
                    <li><a href="/">Promoções</a></li>
                </ul>
            </div>
        </>
    );
}

export default MenuHamburguer;
