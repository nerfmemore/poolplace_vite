import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Promos from "../components/Promos/Promos";
import SideMenu from "../components/SideMenu/SideMenu";


function Promo() {
    return (
        <div className="main-wrapper">
        <SideMenu></SideMenu>
        <div className="main-page">
        <Header></Header>
        <Promos></Promos>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Promo;