import React from "react";
import { useLocation } from "react-router-dom";
import { authCheck } from "../authCheck";

export default function HomePage() {
	let location = useLocation();
	authCheck(location.pathname);
	return (
		<>
			<h1>This is the homepage</h1>
		</>
	);
}
