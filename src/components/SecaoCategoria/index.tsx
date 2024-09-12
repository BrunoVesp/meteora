import styles from './SecaoCategoria.module.css';
import Titulo from '../Titulo';
import CardCategoria from '../CardCategoria';
import categorias from '../../mocks/categorias.json';
import CarrinhoLateral from '../CarrinhoLateral';

const SecaoCategoria = () => {
    return (
        <section className={styles.categorias}>
            <Titulo texto='Busque por categoria:' />
            <div className={styles.containerCards}>
                {categorias.map((categoria, index) =>
                    <CardCategoria
                        key={index}
                        imagem={categoria.imagem}
                        nomeCategoria={categoria.nomeCategoria}
                    />)}
            </div>
            <CarrinhoLateral/>
        </section>
    )
}

export default SecaoCategoria;