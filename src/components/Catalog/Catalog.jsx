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
                    <img className={styles.image} src='/pool_photo.jpg' alt="Фотография бассейна" />
                    <h2 className={styles.subtitle}>Композитные бассейны</h2>
                    </div>
                    </Link>
                </div>
                <div className={styles.position}>
                    <Link to={'/Pools'} state={'Hydromassage'}>
                    <div className={styles.inner}>
                    <img className={styles.image} src="/pool_photo.jpg" alt="" />
                    <h2 className={styles.subtitle}>Гидромассажные бассейны</h2>
                    </div>
                    </Link>
                </div>
                <div className={styles.position}>
                    <Link to={'/Pools'} state={'SPA'}>
                    <div className={styles.inner}>
                    <img className={styles.image} src="/pool_photo.jpg" alt="" />
                    <h2 className={styles.subtitle}>СПА</h2>
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