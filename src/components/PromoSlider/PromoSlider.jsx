import styles from '../PromoSlider/promoslider.module.scss';
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GET_PROMO_SLIDES = gql`
query SliderPromo {
  posts(last: 4, where: {categoryName: "Promo"}) {
    nodes {
      featuredImage {
        node {
          mediaItemUrl
          link
        }
      }
      title
      id
    }
  }
}
`;

function PromoSlider() {
    const {loading, error, data} = useQuery(GET_PROMO_SLIDES);
    const [isPageLoaded, setPageLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const interval = 3000;

    if (loading) return <h1></h1>;
    if (error) return <h1>{error}</h1>

    

    const slides = data.posts.nodes;
    //console.log(slides)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
    }
    
    const goToSlide = (slideIndex) => {
      setCurrentSlide(slideIndex);
    }

    

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
              {
                slides.map(slide => (
                  <Link className={styles.link} to={`/Promo/`} state={slide.id} key={slide.id}><img key={slide.id} className={styles.image} src={slide.featuredImage.node.mediaItemUrl} style={{translate: `${-100 * currentSlide}%`}} loading="lazy" alt="Слайд"></img></Link>
                  ))
              }
            </div>
            <div className={styles.slideDots}>
              {slides.map((slide, slideIndex) => {
                return <div key={slideIndex} className={slideIndex === currentSlide ? styles.dotActiveStyle : styles.dotStyle} onClick={() => goToSlide(slideIndex)}>●</div>
              })}
            </div>
            {/*<div className={styles.left} onClick={prevSlide}><img width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-left-2.png" alt="circled-left-2"/></div>*/}
            {/*<Link to={`/Promo/${slides[currentSlide].id}`} state={slides[currentSlide].id}><img className={styles.image} src={slides[currentSlide].featuredImage.node.link} alt="Слайд" /></Link>*/}
            {/*<div className={styles.right} onClick={nextSlide}><img width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></div>*/}
            <button className={`${styles.slider_btn} ${styles.left_arrow}`} onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(7.41 12) rotate(-180)" fill="#f6f6f6"/>
</svg>
</button>
            <button className={`${styles.slider_btn} ${styles.right_arrow}`} onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" fill="#f6f6f6"/>
</svg>
</button>
<div>
              
            </div>
        </div>
    )
}

export default PromoSlider;