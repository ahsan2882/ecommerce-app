import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/navLogo.png";

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
                <nav className="w-7/12 mx-auto my-3" aria-label="main navigation">
                    <ul className="topNav flex items-center justify-evenly w-full">
                        <li className="topNavItem uppercase">
                            <h3>Save more on app</h3>
                        </li>
                        <li className="topNavItem uppercase">
                            <h3>Daraz Affiliate program</h3>
                        </li>
                        <li className="topNavItem uppercase">
                            <h3>Sell on daraz</h3>
                        </li>
                        <li className="topNavItem uppercase">
                            <h3>Customer Care</h3>
                        </li>
                        <li className="topNavItem uppercase">
                            <h3>Track my order</h3>
                        </li>
                        <li className="topNavItem uppercase">
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className="topNavItem uppercase">
                            <Link to='/signup'>Signup</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="max-w-6xl w-full mx-auto my-3 mb-5" aria-label="search navigation">
                    <ul className="navBar flex items-center justify-between w-full">
                        <li className="w-1/6">
                            <Link to='/'><img src={logo} alt="siteLogo" className="h-9"/></Link>
                        </li>
                        <li className="w-1/2">
                            <div className="flex items-stretch">
                                <input type="search" name="search" id="searchProduct" className="w-11/12 px-4 py-2 outline-none bg-gray-200" placeholder="Search in Daraz" />
                                <button className="w-1/12 bg-orange-500"><i className="fas fa-search"></i></button>
                            </div>
                        </li>
                        <li className="w-1/12">
                            <Link to='/cart'><i className="fas fa-shopping-cart text-lg"></i></Link>
                        </li>
                        <li className="w-1/6">
                            <div>
                                Get mobile app
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
