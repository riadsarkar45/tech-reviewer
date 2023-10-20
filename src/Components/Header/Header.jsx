import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContexts } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Header = () => {
    const { user, logOut } = useContext(AuthContexts);
    const hangleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success("Logout Successfull")
            })
            .catch(error => console.error(error))
    }
    const navebar = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-product">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>



    return (
        <div className="w-[85%] m-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navebar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-[2rem]" src="https://i.ibb.co/TgzRk37/logo-removebg-preview.png" alt="logo" />techreviewer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navebar}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="rounded-full w-[47px]">
                                        {
                                            user && user.photoURL ? (
                                                <img src={user.photoURL} alt="User Profile" />
                                            ) : (
                                                <img src="https://i.ibb.co/nj0mhSs/download-2.png" alt="Default Profile" />
                                            )
                                        }

                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {
                                                user && user.displayName ? (
                                                    user.displayName
                                                ) : (
                                                    user.email
                                                )
                                            }

                                        </a>
                                    </li>
                                    <li><Link>{user.email}</Link></li>
                                    <li onClick={hangleLogOut } ><a>Logout</a></li>
                                </ul>
                            </div>
                        </> : <Link className="btn" to="/login">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;