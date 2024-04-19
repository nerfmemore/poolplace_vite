import Blabla from "../components/PoolsList/PoolsList"
import OurCatalog from "../components/Catalog/Catalog"
import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu"


function Catalog() {
    return (
        <div className="main-wrapper">
        <SideMenu></SideMenu>
        <div className="main-page"><Header></Header>
        {/*<Blabla></Blabla>*/}
        <OurCatalog></OurCatalog>
        <Form></Form>
        <Footer></Footer>
        </div>
        </div>
    )
}

export default Catalog