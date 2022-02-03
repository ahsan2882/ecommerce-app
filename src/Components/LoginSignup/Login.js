import React from "react";
import logo from "../../assets/images/loginLogo.jpg";
import LoginCss from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { authCheck } from "../authCheck";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../reduxStore/store";

export default function Login() {
	const dispatch = useDispatch();
	const userEmail = useSelector(state => state.username);
	const userPass = useSelector(state => state.password);
	let navigate = useNavigate();
	authCheck("/");
	const submitForm = (e) => {
		e.preventDefault();
		console.log(userEmail, userPass);
		let emailVal = document.getElementById("email").value;
		let passVal = document.getElementById("password").value;
		if (emailVal === userEmail && passVal === userPass) {
			navigate("/");
			dispatch(loginUser());
		} else {
			alert("Wrong username or password");
		}
		console.log(emailVal, passVal);
	};
	const showPassword = () => {
		let passField = document.querySelector("#password");
		let passIcon = document.getElementsByClassName("showPass")[0];
		if (passField.type === "password") {
			passField.type = "text";
			passIcon.classList.remove("fa-eye");
			passIcon.classList.add("fa-eye-slash");
		} else {
			passField.type = "password";
			passIcon.classList.remove("fa-eye-slash");
			passIcon.classList.add("fa-eye");
		}
	};
	return (
		<>
			<section className={`w-full max-w-5xl bg-white mx-auto flex py-12 rounded-2xl items-center justify-evenly px-8 ${LoginCss.loginSec}`}>
				<section className={`w-1/2 ${LoginCss.leftSec}`}>
					<img src={logo} alt="Login Page-logo" className='w-full h-full object-cover' />
				</section>
				<section className={`w-1/2 flex flex-col items-center justify-evenly ${LoginCss.rightSec}`}>
					<form className='flex flex-col items-start justify-around w-5/6 mx-auto' onSubmit={submitForm}>
						<h1 className='self-center text-2xl mb-8'>Welcome</h1>
						<div className="flex flex-col my-4 w-full border-b-2 border-black rounded-b-md">
							<label htmlFor="email">Email: </label>
							<input type="email" name="email" id="email" autoComplete="off" required placeholder='user@gmail.com' className='outline-none px-4 py-3 w-11/12' />
						</div>
						<div className="flex flex-col my-4 w-full border-b-2 border-black rounded-b-md">
							<label htmlFor="password">Password: </label>
							<div className="flex items-center justify-between">
								<input type="password" name="password" autoComplete="off" required id="password" placeholder='Password' className='outline-none px-4 py-3 w-11/12' />
								<i className="fa fa-eye mr-3 showPass" onClick={showPassword}></i>
							</div>
						</div>
						<div className={`${LoginCss.btnSec} flex items-center justify-evenly w-full`}>
							<button type="submit" className='self-center my-6 w-5/12 py-2 rounded-2xl flex items-center justify-center bg-red-400 hover:bg-red-500 font-bold tracking-widest text-white uppercase text-lg'>Login</button>
							<Link to ='/signup' className='self-center my-6 w-5/12 py-2 rounded-2xl flex items-center justify-center bg-blue-400 hover:bg-blue-500 font-bold tracking-widest text-white uppercase text-lg'>Signup</Link>
						</div>
					</form>
				</section>
			</section>
		</>
	);
}
