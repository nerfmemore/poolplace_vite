import styles from '../Footer/footer.module.scss'

function Footer(){
    return (
        <section className={styles.wrapper}>
            <div className={styles.social}>
                <h3 className={styles.subtitle}>Информация о юр. лице</h3>
                <span>ООО "Новопул"</span>
                <span className={styles.span}>ОГРН 1207700104930</span>
                <span className={styles.span}>ИНН 7751178079</span>
                <span className={styles.span}>КПП 775101001</span>
            </div>
            <div className={styles.social}>
                <h3 className={styles.subtitle}>Соцсети</h3>
                
                <a href="https://wa.me/message/MXV6YQDEUB4VJ1" target="_blank" rel="noopener noreferrer"><span className={styles.span}>WhatsApp</span></a>
                <a href="https://t.me/poolplace/" target="_blank" rel="noopener noreferrer"><span className={styles.span}>Telegram</span></a>
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