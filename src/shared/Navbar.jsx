import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/viewFoods'}>View Foods</Link></li>
        <li><Link to={'/addFood'}>Add Food</Link></li>
        <li><Link to={'/cart'}>Cart</Link></li>
    </>
    const { user, signOutUser } = useAuth()

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Foodoko</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className={`ml-auto space-x-2 ${user ? "navbar-end" : "md:navbar-end grid items-center gap-2"}`}>
                    {
                        user ? <><button onClick={signOutUser} className="btn">Log Out</button></> : <>
                            <Link to={'/registration'} className="btn">Registration</Link>
                            <Link to={'/login'} className="btn">Login</Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;