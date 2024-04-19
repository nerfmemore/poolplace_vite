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
    console.log(normalizedContent)
    return (
        <>
        <div className={style.wrapper}>
        <div className={style.inner} onClick={clickHandler} dangerouslySetInnerHTML={{ __html: normalizedContent}}/>
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