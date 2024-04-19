import styles from '../Services/services.module.scss'

function Services(){
    return (
    <div className={styles.main}>
        <span className={styles.title}>Мы предоставляем услуги</span>
        <div className={styles.services}>
            <div className={styles.service}>
                <span>Услуга</span>
                <span>Наименование услуги</span>
            </div>
            <div className={styles.service}>
                <span>Услуга</span>
                <span>Наименование услуги</span>
            </div>
            <div className={styles.service}>
                <span>Услуга</span>
                <span>Наименование услуги</span>
            </div>
            <div className={styles.service}>
                <span>Услуга</span>
                <span>Наименование услуги</span>
            </div>
        </div>
    </div>
    )
}

export default Services;