import styles from '../Catalog/catalog.module.scss'
//import img from '../assets/pool2.jpg'//
import { Link } from 'react-router-dom'


function OurCatalog() {
    return (
        <div className={styles.wrapper}>
            {/*<h1 className={styles.title}>Каталог</h1>
            <p className={styles.description}>Список наших товаров</p>*/}
            <div className={styles.catalog}>
                <div className={styles.position}>
                    <Link to={'/Pools'} state={'Composite'}>
                    <div className={styles.inner}>
                    <img className={styles.image} src='/zima3.jpg' alt="Фотография бассейна" />
                    <h2 className={styles.subtitle}>Композитные бассейны</h2>
                    </div>
                    </Link>
                </div>
                <div className={styles.position}>
                    <Link to={'/Pools'} state={'SPA'}>
                    <div className={styles.inner}>
                    <img className={styles.image} src="/zima2.jpg" alt="" />
                    <h2 className={styles.subtitle}>SPA</h2>
                    </div>
                    </Link>
                </div>
                <div className={styles.position}>
                    <Link to={'/Pools'} state={'Pavillione'}>
                    <div className={styles.inner}>
                    <img className={styles.image} src="/zima1.jpg" alt="" />
                    <h2 className={styles.subtitle}>Павильоны</h2>
                    </div>
                    </Link>
                </div>
                {/*<div className={styles.position}>
                    <h2 className={styles.subtitle}>Позиция 3</h2>
                    <div className={styles.service}></div>
                </div>
                <div className={styles.position}>
                    <h2 className={styles.subtitle}>Позиция 4</h2>
                    <div className={styles.service}></div>
                </div>*/}
            </div>
        </div>
    )
}

export default OurCatalog