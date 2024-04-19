import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import OurContacts from "../components/OurContacts/OurContacts";
import SideMenu from "../components/SideMenu/SideMenu";


function Contacts() {
    return (
        <div className="main-wrapper">
        {<SideMenu></SideMenu>}
        <div className="main-page">
        <Header></Header>
        <Form></Form>
        <OurContacts></OurContacts>
        
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Contacts;