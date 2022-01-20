
import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginContainer from "./Components/LoginSignup/LoginContainer";


function App() {
	return (
		<>
			<BRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginContainer page={"login"} />} />
					<Route path='/signup' element={<LoginContainer page={"signup"} />} />
					<Route path='/dashboard' element={<HomePage />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
			</BRouter>
		</>
	);
}

export default App;
