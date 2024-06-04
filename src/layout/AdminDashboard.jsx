import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AdminNavBar from "../components/AdminNavBar/AdminNavBar";

const AdminDashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <AdminNavBar></AdminNavBar>
            <div>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default AdminDashboard;