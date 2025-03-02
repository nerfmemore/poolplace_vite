import styles from '../OurContacts/our_contacts.module.scss'

function OurContacts(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.map_block}>
                <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A61c53084efe7a0de8275c8fe0b5680fbbbbf28e9627ec992ff6fe491dc56b37d&amp;source=constructor" width="100%" height="400" frameborder="0">
                </iframe>
                <div className={styles.contacts}>
                <h2 className={styles.subtitle}>Наш офис:</h2>
                <span className={styles.span}>Киевское шоссе, 22-й километр, 4, стр. 1, корп. А</span>
                <span className={styles.span}>С 10:00 до 21:00</span>
                <span className={styles.span}>info@poolplace.ru</span>
                <span className={styles.span}>+74991137070</span>
                <span className={styles.span}>Доп. данные</span>
                </div>
            </div>
            
        </div>
    )
}

export default OurContacts;