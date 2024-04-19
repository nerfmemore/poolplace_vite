import styles from '../Projects/projects.module.scss'

function OurProjects(){
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Наши проекты</span>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <span className={styles.subtitle}>Проект</span>
                    <span className={styles.description}>Площадь кв.м.</span>
                </div>
                <div className={styles.project}>
                    <span className={styles.subtitle}>Проект</span>
                    <span className={styles.description}>Площадь кв.м.</span>
                </div>
                <div className={styles.project}>
                    <span className={styles.subtitle}>Проект</span>
                    <span className={styles.description}>Площадь кв.м.</span>
                </div>
                <div className={styles.project}>
                    <span className={styles.subtitle}>Проект</span>
                    <span className={styles.description}>Площадь кв.м.</span>
                </div>
            </div>
        </div>
    )
}

export default OurProjects;