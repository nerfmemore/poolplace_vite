import style from '../Promos/promos.module.scss'
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_PROMOS = gql`
query Promos {
    posts(where: {categoryName: "Promo"}) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            link
          }
        }
      }
    }
  }
`;

function Promos(){
    const {loading, error, data} = useQuery(GET_PROMOS);
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>

    console.log(data.posts.nodes);
    const posts = data.posts.nodes.map((post) => {
        const file = post.featuredImage.node.link;
        console.log(post)

        return (
          <Link className={style.link} to={`/Promo/${post.id}`} state={post.id}>
            <div className={style.inner}>
              
              <h3 className={style.title}>{post.title}</h3>
              <img className={style.image} src={file} alt='Рекламное изображение'></img>
            </div>
          </Link>
        )
    })
    return (
        <>
        <div className={style.wrapper}>
            {posts}
        </div>
        </>

    )
}

export default Promos;