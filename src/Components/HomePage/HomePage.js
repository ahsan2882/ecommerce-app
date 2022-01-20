import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

	let navigate = useNavigate();
	useEffect(() => {
		let authStatus = localStorage.getItem("authenticated");
		if (authStatus === null || authStatus === "false") {
			navigate("/login");
			authStatus === null && localStorage.setItem("authenticated", "false");
		}
	}, []);
	return (
		<>
			<h1>This is the homepage</h1>
		</>
	);
}
