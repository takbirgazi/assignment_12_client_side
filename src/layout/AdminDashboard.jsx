import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const AdminDashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <NavBar></NavBar>
            <div>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default AdminDashboard;