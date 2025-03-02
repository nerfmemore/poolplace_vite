import { Link, useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styles from '../RenderSlider/render.module.scss'
import { useState } from 'react';

const GET_SLIDER = gql`
query NewQuery {
  posts(where: {categoryName: "Render"}) {
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

function SingleProject (props) {
    const [slideId, setSlideId] = useState(0);
  
    console.log(props);
  
    const slides = props.data;
  
    const nextSlide = () => {
      setSlideId((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }
  
    const prevSlide = () => {
      setSlideId((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
    }
  
  
    return (
      <div className={styles.inner}>
            <div className={styles.cont}>
            {props.data.map(image => (
                <img key={image} className={styles.image} src={image} style={{translate: `${-100 * slideId}%`}}></img>
              ))}
            <button className={`${styles.button} ${styles.left_arr}`} onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(7.41 12) rotate(-180)" fill="#f6f6f6"/>
  </svg>
  </button>
            <button className={`${styles.button} ${styles.right_arr}`} onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" fill="#f6f6f6"/>
  </svg>
  </button>
            </div>
            <h4 className={styles.subtitle}>{props.title}</h4>
        </div>
    )
  }

function Render() {
    const {loading, error, data} = useQuery(GET_SLIDER);
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>

    console.log(data);

    const slides = data.posts.nodes.map((post) => {
        let content = post.content;
        const normalizedContent = content.replace(/\s+/g, ' ').trim();
        const div = document.createElement('div');
        div.innerHTML = normalizedContent;
        const nodeList = div.querySelectorAll('img');

        const imageList = Array.from(nodeList);
        const lol = imageList.map((image) => {
            return (
              <img className={styles.image} src={image.src} onClick={() => changeSlider()}/>
            )
          })
          console.log(lol)
          const kek = lol.map(image => {
            return image.props.src
          })
          console.log(kek);

          return (
            <>
            <SingleProject data={kek} title={post.title}/>
            </>
          )
    })

    return (
        <div className={styles.qoq}>
            {slides}
        </div>
    )
}

export default Render;