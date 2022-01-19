/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter as BRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginContainer from "./Components/LoginSignup/LoginContainer";


function App() {
  let navigate = useNavigate();
  
  return (
    <>
      <BRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginContainer page={'login'} />} />
          <Route path='/signup' element={<LoginContainer page={'signup'} />} />
        </Routes>
      </BRouter>
    </>
  );
}

export default App;
