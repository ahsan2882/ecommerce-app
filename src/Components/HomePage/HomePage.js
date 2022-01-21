import React from "react";
import { useLocation } from "react-router-dom";
import { authCheck } from "../authCheck";
import Header from "./Header";
import HeroNav from "./HeroNav";

export default function HomePage() {
	let location = useLocation();

	authCheck(location.pathname);
	return (
		<>
			<Header />
			<HeroNav/>
		</>
	);
}
