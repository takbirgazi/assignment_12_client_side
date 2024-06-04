import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const AdminError = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Helmet>
                <title>Error - Health Care Diagnostics</title>
            </Helmet>
            <h2 className="text-2xl font-bold my-3">404 | Page Not Found</h2>
            <NavLink to="/admin/statisticsPage" className="px-2 py-1 border rounded bg-blue-500 text-white">Go to Home</NavLink>
        </div>
    );
};

export default AdminError;