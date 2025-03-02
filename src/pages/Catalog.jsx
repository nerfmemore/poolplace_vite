import Blabla from "../components/PoolsList/PoolsList"
import OurCatalog from "../components/Catalog/Catalog"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu"
import { useEffect, useState } from "react"


function Catalog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth < 1024 ? false : true);

    return (
        <div className="main-wrapper">
        <SideMenu setIsOpen = {setIsOpen} isOpen = {isOpen}></SideMenu>
        <div className="main-page"><Header setIsOpen = {setIsOpen} isOpen = {isOpen}></Header>
        {/*<Blabla></Blabla>*/}
        <OurCatalog></OurCatalog>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Catalog