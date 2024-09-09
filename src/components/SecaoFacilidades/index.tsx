import ItemInfo from '../ItemInfo';
import Titulo from '../Titulo';
import styles from './SecaoFacilidades.module.css';

const SecaoFacilidades = () => {
    return (
        <section className={styles.secaoFacilidades}>
            <Titulo texto='Conheça todas as nossas facilidades' />
            <div className={styles.containerInfos}>
                <ItemInfo 
                    imagem='/Desktop/Icones/x-diamond.png'
                    titulo='PAGUE PELO PIX'
                    descricao='Ganhe 5% OFF em pagamentos via PIX' 
                />
                <ItemInfo 
                    imagem='/Desktop/Icones/arrow-repeat.png'
                    titulo='TROCA GRÁTIS'
                    descricao='Fique livre para trocar em até 30 dias.' 
                />
                <ItemInfo 
                    imagem='/Desktop/Icones/flower.png'
                    titulo='SUSTENTABILIDADE'
                    descricao='Moda responsável, que respeita o meio ambiente.' 
                />
            </div>
        </section>
    )
}

export default SecaoFacilidades;