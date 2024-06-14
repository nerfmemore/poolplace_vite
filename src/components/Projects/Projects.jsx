import { Link } from 'react-router-dom';
import styles from '../Projects/projects.module.scss';
import { useQuery, gql } from '@apollo/client';


const GET_PROJECTS = gql`
query MyQuery2 {
    posts(last: 4, where: {categoryName: "Project"}) {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
      }
    }
  }
`;

function OurProjects(){
    const {loading, error, data} = useQuery(GET_PROJECTS);
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>;
    console.log(data);

    const what = data.posts.nodes.map(item => {
        const image = item.featuredImage.node.link;
        const title = item.title;
        
        return (
            <Link to={`/Projects`}>
            <div className={styles.project}>
                <img className={styles.image} src={image}/>
                <span className={styles.subtitle}>{title}</span>
            </div>
            </Link>
        )
    })

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Наши проекты</span>
            <div className={styles.projects}>
                {what}
                {/*<div className={styles.project}>
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
    </div>*/}
            </div>
        </div>
    )
}

export default OurProjects;