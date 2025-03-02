import { useState } from 'react';
import styles from '../ProjectsList/projectslist.module.scss'
import { useQuery, gql } from '@apollo/client';

const GET_PROJECTS = gql`
query Projects {
  posts(where: {categoryName: "Project"}, first: 100) {
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

function SingleProject (props) {
  const [slideId, setSlideId] = useState(0);

  const slides = props.data;

  const nextSlide = () => {
    setSlideId((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
  }

  const prevSlide = () => {
    setSlideId((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
  }

  const goToSlide = (slideIndex) => {
    setSlideId(slideIndex);
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
          <div className={styles.foot}>
            <h4 className={styles.subtitle}>{props.title}</h4>
            <div className={styles.slideDots}>
                        {slides.map((slide, slideIndex) => {
                          return <div key={slideIndex} className={slideIndex === slideId ? styles.dotActiveStyle : styles.dotStyle} onClick={() => goToSlide(slideIndex)}>●</div>
                        })}
            </div>
          </div>
      </div>
  )
}


function ProjectsList() {
    const {loading, error, data} = useQuery(GET_PROJECTS);
    const [isModal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [slideId, setSlideId] = useState(0);

    if (loading) return <h1></h1>;
    if (error) return <h1>{error}</h1>;
    //console.log(data)
    const toggleModal = (data) => {
      setModalData(data)
      setSlideId(0);
      {/*console.log(modalData)*/}
    }
    
    if (modalData != null) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    

    function Modal(data){

      const images = data.data.map(image => {
        return image;
      });
      
      
      return (
        <div className={styles.modal}>
              <div onClick={() => toggleModal(null)} className={styles.overlay}></div>
              <div className={styles.content}>
                {/*<img className={styles.image} src={images[slideId]} alt="Слайд" />*/}
                {images.map(image => (
                  <img key={image} className={styles.image} src={image} style={{translate: `${-100 * slideId}%`}}></img>
                ))}
                {/*<div className={styles.container}>{data.data[0]}</div>
                <button onClick={() => toggleModal(null)}>Close</button>*/}
              </div>
              {/*<div className={styles.footer}>
                {images.map((image, index) => (
                  <img className={styles.image_small} src={image} onClick={() => changeSlide(index)}></img>
                ))} </div>*/}
        </div>
      )
    }

    //console.log(data)
    const posts = data.posts.nodes.map((post) => {
      
      //const file = post.featuredImage.node.link;//
      const content = post.content;
      
      const normalizedContent = content.replace(/\s+/g, ' ').trim();
      const div = document.createElement('div');
      div.innerHTML = normalizedContent;
      const nodeList = div.querySelectorAll('img');
      
      const imageList = Array.from(nodeList);
      const lol = imageList.map((image) => {
        return (
          <img loading="lazy" className={styles.image} src={image.src} onClick={() => changeSlider()}/>
        )
      })
      
      const kek = lol.map(image => {
        return image.props.src
      })
      //console.log(kek)
      
      return (
          <>
          
          <SingleProject data={kek} title={post.title}/>
          
          </>
      )
    });
    
    return (
        <div className={styles.wrapper}>
            {/*<h2 className={styles.title}>Наши проекты</h2>
            <span>Список наших проектов</span>*/}
            <div className={styles.grid}>{posts}</div>
            <div></div>
        </div>

    )
}


export default ProjectsList;