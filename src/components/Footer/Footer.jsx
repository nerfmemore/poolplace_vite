import styles from '../Footer/footer.module.scss'

function Footer(){
    return (
        <section className={styles.wrapper}>
            <div className={styles.social}>
                <h3 className={styles.subtitle}>Информация о юр. лице</h3>
                <span>ООО "Никита, Даня и КО"</span>
                <span className={styles.span}>ОГРН 11111111111111111</span>
                <span className={styles.span}>ИНН 7751178079</span>
            </div>
            <div className={styles.social}>
                <h3 className={styles.subtitle}>Соцсети</h3>
                <span className={styles.span}>YouTube</span>
                <span className={styles.span}>Instagram</span>
                <span className={styles.span}>VK</span>
                <span className={styles.span}>Telegram</span>
            </div>
            <div className={styles.social}>
                <h3 className={styles.subtitle}>Контакты</h3>
                <span className={styles.span}>Киевское шоссе, 22-й километр, 4, стр. 1, корп. А</span>
                <span className={styles.span}>C 10:00 до 21:00</span>
                <span className={styles.span}>info@poolplace.ru</span>
                <span className={styles.span}>+74991137070</span>
            </div>
        </section>
    )
}

export default Footer;