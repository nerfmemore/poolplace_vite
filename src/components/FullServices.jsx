import styles from '../styles/list_of_services.module.scss'

function FullServices(){
    return (
        <>
        <section className={styles.wrapper}>
            <h1>Наши услуги</h1>
            <span>Краткое описание услуг,
            предоставляемых нашей компанией бла бла бла</span>
            <div className={styles.service}>
                
                {/*<img className={styles.photo} src='../assets/photopool.jpg' alt="Фото бассейна"></img>*/}
                <div className={styles.picture}></div>
                <div className={styles.description}>
                    <h2>Название услуги</h2>
                    <span>Описание услуги</span>
                    <button>Кнопка</button>
                </div>
            </div>
            <div className={styles.service}>
                
                {/*<img className={styles.photo} src='../assets/photopool.jpg' alt="Фото бассейна"></img>*/}
                <div className={styles.description}>
                    <h2>Название услуги</h2>
                    <span>Описание услуги</span>
                    <button>Кнопка</button>
                </div>
                <div className={styles.picture}></div>
            </div>
            <div className={styles.service}>
                
                {/*<img className={styles.photo} src='../assets/photopool.jpg' alt="Фото бассейна"></img>*/}
                <div className={styles.picture}></div>
                <div className={styles.description}>
                    <h2>Название услуги</h2>
                    <span>Описание услуги</span>
                    <button>Кнопка</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default FullServices;