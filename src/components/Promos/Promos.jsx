import style from '../Promos/promos.module.scss'
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
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

function Promos(){
    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth);
    const {loading, error, data} = useQuery(GET_PROMOS);
    if (loading) return <h1></h1>;
    if (error) return <h1>{error}</h1>

    console.log(document.documentElement.clientWidth);
    const posts = data.posts.nodes.map((post) => {
        const file = post.featuredImage.node.mediaItemUrl;
        console.log(post)

        return (
          
            <div className={style.inner}>
              
              {/*<h3 className={style.title}>{post.title}</h3>*/}
              <img className={style.image} src={file} alt='Рекламное изображение'></img>
            </div>
          
        )
    })
    //<Link className={style.link} to={`/Promo/${post.id}`} state={post.id}>
    const posts2 = (
      <>
        <div className={style.inner2}>
          <img className={style.image} src='/third.jpg' alt='Рекламное изображение'></img>
        </div>
        <div className={style.inner2}>
          <img className={style.image} src='/second.jpg' alt='Рекламное изображение'></img>
        </div>
          <div className={style.inner2}>
          <img className={style.image} src='/first.jpg' alt='Рекламное изображение'></img>
        </div>
      </>
    )

    return (
        <>
        <div className={style.wrapper}>
            {posts}
            {posts2}
        </div>
        </>

    )
}

export default Promos;