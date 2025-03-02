import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import MainDescription from "../components/MainDescription/MainDescription";
import OurProjects from "../components/Projects/Projects";
import PromoSlider from "../components/PromoSlider/PromoSlider";
import Services from "../components/Services/Services";
import SideMenu from "../components/SideMenu/SideMenu";


function MainPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth < 1024 ? false : true);

    return (
        <div className="main-wrapper">
        <SideMenu setIsOpen = {setIsOpen} isOpen = {isOpen}></SideMenu>
        <div className="main-page">
        <Header setIsOpen = {setIsOpen} isOpen = {isOpen}></Header>
        <Main></Main>
        {<PromoSlider></PromoSlider>}
        {/*<Services></Services>*/}
        <OurProjects></OurProjects>
        <MainDescription></MainDescription>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default MainPage;