import { Link, useLocation } from 'react-router-dom';
import styles from '../PoolsList/pools_list.module.scss';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
query NewQuery($categoryName: String) {
  posts(where: {categoryName: $categoryName}) {
    nodes {
      id
      title
      content
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          mediaDetails {
            file
          }
          link
        }
      }
    }
  }
}
`;

function Blabla() {
    const state = useLocation();
    const {loading, error, data} = useQuery(GET_POSTS, {
      variables: { categoryName: state.state}
    });


    
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>;
    console.log(data.posts.nodes)
    const posts = data.posts.nodes.map((post) => {
      const file = post.featuredImage.node.link;

      let content = post.content;
      let normalizedContent = content.replace(/\s+/g, ' ').trim();
      const parser = new DOMParser();
      const block  = parser.parseFromString(normalizedContent, 'text/html');
      console.log(normalizedContent)
      const stats = normalizedContent.match(/<[^>]*class="([^"]*)list([^"]*)"[^>]*>/g)


      const div = document.createElement('div');
      div.innerHTML = normalizedContent;
      const ul = div.querySelector('.list');
      
      const result = normalizedContent.match(/<ul>[\s\S]*?<\/ul>/);
      console.log(ul)
      
        return (
          <Link to={`/Pools/${post.id}`} state={post.id}>
            <div className={styles.inner} key={post.id}>
                <h2 className={styles.subtitle}>{post.title}</h2>
                <img className={styles.image} src={file} alt='Рендер бассейна' />
                {/*<div className={styles.ul} dangerouslySetInnerHTML={{ __html: ul.outerHTML}}></div>*/}
                {/*<div className={styles.block} dangerouslySetInnerHTML={{ __html: normalizedContent}} />*/}
            </div>
          </Link>
        )
    })

    return (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бассейны</h2>
          <span>Описание особенностей бассейнов</span>
          <div className={styles.grid}>{posts}</div>
        </div>
    )
}

export default Blabla;