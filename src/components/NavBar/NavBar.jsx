import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const isAdmin = true;
    const navigate = useNavigate();
    const logOutHandler = () => {
        logOut()
            .then(() => {
                navigate("/login");
            })
    }
    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTests'>All Tests</NavLink></li>
        {
            user ? <>
                {
                    isAdmin ?
                        <>
                            <li><NavLink to="/admin/statisticsPage">Statistics</NavLink></li>
                            <li><NavLink to='/admin/addBanner'>Add Banner</NavLink></li>
                            <li><NavLink to="/admin/addTest">Add Test</NavLink></li>
                            <li><NavLink to="/admin/allBanners">All Banners</NavLink></li>
                            <li><NavLink to="/admin/adminAllTests">All Tests</NavLink></li>
                            <li><NavLink to="/admin/reservation">Reservation</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to='/user/upcomingAppointments'>My Appointments</NavLink></li>
                            <li><NavLink to="/user/testResult">Test Results</NavLink></li>
                            <li><NavLink to="/user/myProfile">My Profile</NavLink></li>
                        </>
                }
                <button onClick={logOutHandler} className="px-2 py-1">Log Out</button>
            </>
                :
                <>
                    <li><NavLink to="/signUp">Sign Up</NavLink></li>
                    <li><NavLink to='/login'>Log In</NavLink></li>
                </>

        }
    </>
    return (
        <div className="navbar border-b z-10 bg-white bg-opacity-55 flex gap-5">
            <div className="navbar-start w-1/4">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Health Care Diagnostics</a>
            </div>
            <div className="navbar-end hidden lg:flex w-3/4">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;