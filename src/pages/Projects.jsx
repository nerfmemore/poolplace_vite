import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import SideMenu from "../components/SideMenu/SideMenu";


function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="main-wrapper">
            <SideMenu></SideMenu>
            <div className="main-page">
            <Header></Header>
            <ProjectsList></ProjectsList>
            <Form></Form>
            <Footer></Footer>
            </div>
        </div>
    )
}

export default Projects;