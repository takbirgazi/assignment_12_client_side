import { Outlet } from "react-router-dom";

const UserRoot = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserRoot;