import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;