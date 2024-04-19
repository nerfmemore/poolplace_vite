import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import FullServices from "../components/FullServices";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";


function OurServices(){
    return (
        <div className="main-wrapper">
        {/*<SideMenu></SideMenu>*/}
        <Header></Header>
        <FullServices></FullServices>
        <Form></Form>
        <Footer></Footer>
        </div>
    )
}

export default OurServices;