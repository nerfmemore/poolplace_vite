import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import SideMenu from "../components/SideMenu/SideMenu";


function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [isOpen, setIsOpen] = useState(document.documentElement.clientWidth < 1024 ? false : true);

    return (
        <div className="main-wrapper">
            <SideMenu setIsOpen = {setIsOpen} isOpen = {isOpen}></SideMenu>
            <div className="main-page">
            <Header setIsOpen = {setIsOpen} isOpen = {isOpen}></Header>
            <ProjectsList></ProjectsList>
            <Form></Form>
            <Footer></Footer>
            </div>
        </div>
    )
}

export default Projects;