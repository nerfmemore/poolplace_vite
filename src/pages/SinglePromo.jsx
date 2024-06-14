import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Promo from "../components/SinglePromo/SinglePromo";


function SinglePromo(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main-wrapper">
        <SideMenu></SideMenu>
        <div className="main-page">
        <Header></Header>
        <Promo></Promo>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default SinglePromo;