import styles from '../MainDescription/main_desc.module.scss'

function MainDescription(){
    return (
        <article className={styles.wrapper}>
            <h2 className={styles.title}>О компании</h2>
            <span className={styles.article}>Наша компания занимается комплексным строительством бассейнов под ключ, а также сервисным обслуживанием бассейнов и монтажом оборудования как для бассейнов, так и для специализированных объектов водоподготовки. Наша команда стремится быть в ногу со временем, мы соблюдаем тренды бассейной индустрии по всему миру, находим оптимальные решения, работаем над сервисом и качеством нашего продукта.</span>
        </article>
    )
}

export default MainDescription;