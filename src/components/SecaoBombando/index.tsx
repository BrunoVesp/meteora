import Titulo from '../Titulo';
import styles from './SecaoBombando.module.css';
import produtos from '../../mocks/produtos.json';
import CardProduto from '../CardProduto';
import { useModalContext } from '../../hooks/useModalContext';
import Modal from '../Modal';

const SecaoBombando = () => {
    const { abrirModal } = useModalContext();

    return (
        <section className={styles.secaoBombando}>
            <Titulo texto='Produtos que estão bombando!' />
            <div className={styles.containerCards}>
                {produtos.map(produto =>
                    <CardProduto
                        key={produto.id}
                        imagem={produto.imagem}
                        nomeProduto={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        aoClicar={() => abrirModal(produto)}
                    />
                )}
                <Modal />
            </div>
        </section>
    )
}

export default SecaoBombando;