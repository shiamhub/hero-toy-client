import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import img from './../assets/brand-logo.png'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        {
            user && <>
                <li><Link to="/myToys">My Toys</Link></li>
                <li><Link to="/addToy">Add A Toy</Link></li>
            </>
        }
        <li><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="bg-sky-200">
            <div className="navbar w-3/4 mx-auto">
                <div className="w-full justify-between">
                    <div className="flex items-start">
                        <img className="w-28 lg:w-28" src={img} alt="" />
                        <h1 className="text-3xl font-bold text-yellow-600">Toy</h1>
                        
                    </div>
                    {/* <a className="grow normal-case text-xl">Toy</a> */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div title={user.displayName} className="dropdown dropdown-end ml-4">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>{user.displayName}</li>
                                <li>
                                    {user.email}
                                </li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div> : <Link to="/login" className="btn">Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;