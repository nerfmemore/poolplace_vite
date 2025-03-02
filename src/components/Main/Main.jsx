import styles from '../Main/main.module.scss';

/*import poster from '../assets/pool2.jpg'*/

function Main(){
    return (
        <>
            <div className={styles.video}>
                <video autoPlay muted loop playsInline>
                <source src='/b1.mp4' type='video/mp4'></source>  
                </video>
                <img className={styles.mainpic} src="/main_pic.jpg" alt="Заглавная фотография бассейна" />
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
                    
                    <span className={styles.description}>Строительство под ключ</span>
                </div>
                <div className={styles.service}>
                    {/*<img src="/test1.PNG" alt="Иконка строительства" />*/}
                    <span className={styles.description}>Монтаж оборудования</span>
                </div>
                <div className={styles.service}>
                    
                    {/*<img src="/test2.PNG" alt="Иконка строительства" />*/}
                    <span className={styles.description}>Сервисное обслуживание</span>
                </div>
                <div className={styles.service}>
                    
                    {/*<img src="/test3.PNG" alt="Иконка строительства" />*/}
                    <span className={styles.description}>Интернет-магазин</span>
                </div>
                
            </div>
            </div>
            </div>
        </>
    )
}

export default Main;