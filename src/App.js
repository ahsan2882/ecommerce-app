
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductDetail from "./Components/HomePage/ProductDetail";
import LoggedOut from "./Components/LoginSignup/LoggedOut";
import LoginContainer from "./Components/LoginSignup/LoginContainer";
import NotFound from "./Components/NotFound";
import store from "./Components/reduxStore/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<BRouter>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginContainer page={"login"} />} />
						<Route path='/signup' element={<LoginContainer page={"signup"} />} />
						<Route path='/logout' element={<LoggedOut />} />
						<Route path='/products/:productId' element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BRouter>
			</Provider>
		</>
	);
}

export default App;
