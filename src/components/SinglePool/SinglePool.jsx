import style from '../SinglePool/pools.module.scss'
import { Link, useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useEffect, useLayoutEffect, useState } from 'react';
import Form from "../Form/Form";

const GET_POOL = gql`
query SinglePromo($id: ID!) {
    post(id: $id) {
      content
      id
      title
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

  const changeSlide = (event) => {
    setSlideId(event)
  }


  return (
    <div className={style.wrap}>
    <div className={style.inner}>
          
          {props.data.map(image => (
              <img key={image} className={style.image} src={image} style={{translate: `${-100 * slideId}%`}}></img>
            ))}
          <button className={`${style.slider_btn} ${style.left_arrow}`} onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(7.41 12) rotate(-180)" fill="#f6f6f6"/>
</svg>
</button>
            <button className={`${style.slider_btn} ${style.right_arrow}`} onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 7.41 12">
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" fill="#f6f6f6"/>
</svg>
</button>


          
      </div>
      {/*<div className={style.footer} >
                {props.data.map((image, index) => (
                  <img className={style.image_small} src={image} onClick={() => changeSlide(index)}></img>
                ))} 
                <button className={`${style.button} ${style.left_arr}`} onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
                <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(7.41 12) rotate(-180)" fill="#f6f6f6"/>
                </svg>
                </button>
                <button className={`${style.button} ${style.right_arr}`} onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
                <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" fill="#f6f6f6"/>
                </svg>
                </button>
              </div>*/}   
    </div>
  )
}

function SinglePool(){
    const [isModal, setIsModal] = useState(false);

    const toggleModal = () => {
      setIsModal(!isModal);
    }

    const {state} = useLocation();
    const {loading, error, data} = useQuery(GET_POOL, {
        variables: {
            id: `${state}`,
        }
      });
      console.log(state)
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>{error}</h1>
    
    const clickHandler = (e) => {
      const el = e.target.closest('.button_contact');
      if (el && e.currentTarget.contains(el)) {
        setIsModal(!isModal)
      }
    }

    const content = data.post.content;
    const normalizedContent = content.replace(/\s+/g, ' ').trim();
    const div = document.createElement('div');
    div.innerHTML = normalizedContent;
    const nodeList = div.querySelector('.sub_image img');
    
    const desc = div.querySelector('.pool_description');

    const nodeList2 = div.querySelectorAll('.sub_image img');
    const imageList = Array.from(nodeList2);
    const lol = imageList.map(image => {
      return (<img src={image.src} />)
    })
    const kek = lol.map(image => {
      return image.props.src
    })
    
    

    console.log(kek)
    return (
        <>
        <div className={style.wrapper}>
        
        <div className='pool_wrapper'>
          <SingleProject data={kek}/>
          <div onClick={clickHandler} dangerouslySetInnerHTML={{ __html: desc.outerHTML}}/>
        </div>
        
        </div>
        
        {isModal && (<div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.content}>
            <div className={style.container}><Form></Form></div>
            <div className={style.but} onClick={toggleModal}><svg height='24' width='24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div> 
          </div>
        </div>)}
        </>
        
    )
    
}

export default SinglePool;