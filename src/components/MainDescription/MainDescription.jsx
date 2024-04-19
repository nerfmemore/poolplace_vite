import styles from '../MainDescription/main_desc.module.scss'

function MainDescription(){
    return (
        <article className={styles.wrapper}>
            <h2 className={styles.title}>О компании</h2>
            <span className={styles.article}>Мы, компания PoolPlace, занимаемся строительством частных бассейнов
            начиная со стадии разработки сметы и вплоть до сдачи проекта лично
            в руки заказачику. Занимаемся этим с 2015 года и имеем безупречную репутацию.</span>
        </article>
    )
}

export default MainDescription;