import { NavLink } from 'react-router-dom';
import styles from '../SideMenu/side_menu.module.scss';

import { useState } from 'react';
import Form from "../Form/Form";



function SideMenu() {
    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth < 1024 ? false : true);
    const [isModal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!isModal);
        console.log(isModal)
    }

    const toggleOpener = () => {
      setIsOpen(!isOpen);
      console.log(document.documentElement.clientWidth)
    }

    if (isModal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    if (document.documentElement.clientWidth < 992 && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return (
    <>
    <div className={isOpen ? styles.what : styles.what2} >{/*<button className={styles.menu_button} onClick={toggleOpener}>Меню</button>*/}
    
    <div className={isOpen ? styles.navigation : styles.navclosed}>
    
    <div className={styles.ww} onClick={toggleOpener}>
    <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#2699FB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    <button className={styles.closer} onClick={toggleOpener}>
      
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#2A9FDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      </button>
        <img className={styles.img} src='/logo.svg' alt='logo'></img>
        <div className={styles.wrapper}>
        
        <nav>
            <ul>
                <li><NavLink to={`/`} className={({isActive}) => isActive ? styles.active : ''}>Главная<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41" className={styles.icon}>
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(12) rotate(90)" />
</svg>
</NavLink></li>
                <li><NavLink to={`/Catalog`} className={({isActive}) => isActive ? styles.active : ''}>Каталог<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41" className={styles.icon}>
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(12) rotate(90)" />
</svg></NavLink></li>
                <li><NavLink to={`/Projects`} className={({isActive}) => isActive ? styles.active : ''}>Наши проекты<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41" className={styles.icon}>
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(12) rotate(90)" />
</svg></NavLink></li>
                <li><NavLink to={`/Promo`} className={({isActive}) => isActive ? styles.active : ''}>Акции<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41" className={styles.icon}>
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(12) rotate(90)" />
</svg></NavLink></li>
                <li><NavLink to={`/Contacts`} className={({isActive}) => isActive ? styles.active : ''}>Контакты<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41" className={styles.icon}>
  <path id="ic_chevron_right_24px" d="M1.41,0,0,1.41,4.58,6,0,10.59,1.41,12l6-6Z" transform="translate(12) rotate(90)" />
</svg></NavLink></li>
            </ul>
        </nav>
        
        <div className={styles.bottomNav}>
            <button className={styles.button} onClick={toggleModal}>Оставить заявку</button>
            {/*<span className={styles.point}>Наш Интернет-Магазин</span>
            <a href='tel:+74991137070' className={styles.point}>+74991137070</a>
            <span className={styles.point}>info@poolplace.ru</span>
    <span className={styles.point}>Киевское шоссе, 22-й километр, 4, стр. 1, корп. А</span>*/}
        </div>
        </div>
        
        {isModal && (<div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={styles.container}><Form></Form></div>
            <div className={styles.but} onClick={toggleModal}>
              <svg height='24' width='24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</div>    
          </div>
        </div>)}
    </div>
    
    
    </div>
    </>
    )
}

export default SideMenu;