import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import AdminDashboard from "../features/admin/components/AdminProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <AdminDashboard></AdminDashboard>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;