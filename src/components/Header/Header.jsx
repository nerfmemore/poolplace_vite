import styles from '../Header/header.module.scss'


function Header(){
    return (
        <>
            <div className={styles.background}>
                <a href='tel:+74991137070' className={styles.number}>+7 (499) 113-70-70</a>
               {/*<img src='/logo.svg' alt='logo' className={styles.logo}></img>*/}
               {/*<div className={styles.menu}>
                    <span className={styles.point}>О компании</span>
                    <span className={styles.point}>Каталог</span>
                    <span className={styles.point}>Услуги</span>
                    <span className={styles.point}>Галерея</span>
                    <span className={styles.point}>Акции</span>
                    <span className={styles.point}>Контакты</span>
                </div>*/}
                {/*<button className={styles.button}>Оставить заявку</button>*/}
                {/*<div className={styles.number}>Москва</div>*/}
                <select name="City" id="123" className={styles.selector}>
                    <option value="Moscow">Москва</option>
                    <option value="SPb">Санкт-Петербург</option>
                </select>
            </div>
        </>
    )
}

export default Header;