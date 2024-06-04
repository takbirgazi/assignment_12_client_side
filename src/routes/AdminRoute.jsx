import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import useAuth from "../hooks/useAuth";
import { ColorRing } from "react-loader-spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.object,
}