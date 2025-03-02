import { Link, useLocation } from 'react-router-dom';
import styles from '../PoolsList/pools_list.module.scss';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
query NewQuery($categoryName: String) {
  posts(where: {categoryName: $categoryName}, first: 100) {
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
          mediaItemUrl
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
    

    
    if (loading) return <h1></h1>;
    if (error) return <h1>{error}</h1>;
    console.log(data.posts.nodes)
    const posts = data.posts.nodes.map((post) => {
      const file = post.featuredImage.node.mediaItemUrl;

      let content = post.content;
      let normalizedContent = content.replace(/\s+/g, ' ').trim();
      const parser = new DOMParser();
      const block  = parser.parseFromString(normalizedContent, 'text/html');
      //console.log(normalizedContent)
      const stats = normalizedContent.match(/<[^>]*class="([^"]*)list([^"]*)"[^>]*>/g)


      const div = document.createElement('div');
      div.innerHTML = normalizedContent;
      const description = div.querySelector('.pool_desc')
      const price = div.querySelector('.price');
      const ul = div.querySelector('.list');
      
      const what = div.querySelectorAll('.lis_item')
      const ul_list_params = Array.from(what)
      
      
      
      const result = normalizedContent.match(/<ul>[\s\S]*?<\/ul>/);
      //console.log(ul_list_params)
      
        return (
          <Link to={`/Pools/${post.id}`} state={post.id}>
            <div className={styles.inner} key={post.id}>
                <div><div className={styles.prop}><h2 className={styles.subtitle}>{post.title}</h2>
                <img className={styles.image} src={file} alt='Рендер бассейна' />
                </div>
                </div>
                <div className={styles.description_wrapper}>
                {<div className={styles.price} dangerouslySetInnerHTML={{ __html: price.outerHTML}}></div>}
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: ul.outerHTML}}>
                  
                </div>
                {/*<div className={styles.ul} dangerouslySetInnerHTML={{ __html: ul.outerHTML}}></div>*/}
                </div>
                <div className={styles.button}><div className={styles.context}>Характеристики...</div>{/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.41 12">
                <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z"/>
                </svg>*/}</div>
                {/*<div className={styles.block} dangerouslySetInnerHTML={{ __html: normalizedContent}} />*/}
            </div>
          </Link>
        )
    })

    return (
        <div className={styles.wrapper}>
          {/*<h2 className={styles.title}>Бассейны</h2>
          <span>Описание особенностей бассейнов</span>*/}
          <div className={styles.grid}>{posts}</div>
        </div>
    )
}

export default Blabla;