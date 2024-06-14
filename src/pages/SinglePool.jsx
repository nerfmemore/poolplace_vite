import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import SinglePool from "../components/SinglePool/SinglePool";


function OnePool() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main-wrapper">
        <SideMenu></SideMenu>
        <div className="main-page">
        <Header></Header>
        <SinglePool></SinglePool>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default OnePool;