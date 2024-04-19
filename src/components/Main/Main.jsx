import styles from '../Main/main.module.scss';

/*import poster from '../assets/pool2.jpg'*/

function Main(){
    return (
        <>
            <div className={styles.video}>
                <video autoPlay muted loop>
                <source src='/b1.mp4' type='video/mp4'></source>
            </video>
            {/*<div className={styles.header}>
                <span>+74991137070</span>
                <span>Москва</span>
    </div>*/}
            <div className={styles.wrapper}>
            <div className={styles.intro}>
                <h1 className={styles.title}>Создание композитных бассейнов "под ключ"</h1>
                {/*<span className={styles.subtitle}>Разработаем проект с нуля под ваши индивидуальные нужды бла бла бла</span>
                <span className={styles.subtitle}>О компании</span>*/}
            </div>
            <div className={styles.services}>
                <div className={styles.service}>
                    {/*<span className={styles.sub}>УСЛУГИ</span>*/}
                    <span className={styles.description}>Строительство под ключ</span>
                </div>
                <div className={styles.service}>
                    {/*<span className={styles.sub}>УСЛУГИ</span>*/}
                    <span className={styles.description}>Монтаж оборудования</span>
                </div>
                <div className={styles.service}>
                    {/*<span className={styles.sub}>УСЛУГИ</span>*/}
                    <span className={styles.description}>Сервисное обслуживание</span>
                </div>
                <div className={styles.service}>
                    {/*<span className={styles.sub}>УСЛУГИ</span>*/}
                    <span className={styles.description}>Пока что не придумал</span>
                </div>
                
            </div>
            </div>
            </div>
        </>
    )
}

export default Main;