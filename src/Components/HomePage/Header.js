import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const logout = () => {
        localStorage.setItem("authenticated", "false");
        navigate("/logout");
    };
    return (
        <>
            <header className="w-full">
                <nav className="max-w-6xl w-full mx-auto mt-12 mb-5" aria-label="search navigation">
                    <ul className="navBar flex items-center justify-between w-full">
                        <li className="w-1/6">
                            <Link to='/'><h1 className="text-2xl uppercase text-indigo-400">e-shop</h1></Link>
                        </li>
                        <li className="w-1/2">
                            <div className="flex items-stretch">
                                <input type="search" name="search" id="searchProduct" className="w-11/12 px-4 py-2 outline-none bg-gray-100" placeholder="Search in store" />
                                <button className="w-1/12 bg-indigo-500"><i className="fas fa-search"></i></button>
                            </div>
                        </li>
                        <li className="w-1/12">
                            <Link to='/cart'><i className="fas fa-shopping-cart text-lg"></i></Link>
                        </li>
                        <li className="w-1/6">
                            <Link to='/logout'>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
