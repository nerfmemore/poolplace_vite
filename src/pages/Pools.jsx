import Blabla from "../components/PoolsList/PoolsList";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import { useEffect, useState } from "react";
import Render from "../components/RenderSlider/Render";


function Pools(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth < 1024 ? false : true);

    return (
        <div className="main-wrapper">
        <SideMenu setIsOpen = {setIsOpen} isOpen = {isOpen}></SideMenu>
        <div className="main-page">
        <Header setIsOpen = {setIsOpen} isOpen = {isOpen}></Header>
        {/*<Render></Render>*/}
        <Blabla></Blabla>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Pools;