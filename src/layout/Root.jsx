import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;