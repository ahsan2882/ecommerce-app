import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const authCheck = (path) => {
    let navigate = useNavigate();
    useEffect(() => {
        let loginTime = localStorage.getItem("loginTime");
        let currentTime = new Date().getTime();
        let authStatus = localStorage.getItem("authenticated");

        if (authStatus === null || loginTime === null || authStatus === "false") {
            localStorage.setItem("authenticated", "false");
            localStorage.setItem("loginTime", "-1");
            navigate("/login");
            return null;
        }
        if ((currentTime - parseInt(loginTime) > 1800000)) {
            localStorage.setItem("authenticated", "false");
            return null;
        }

        console.log(path);
        navigate(path);
        return null;
    }, []);


};

export { authCheck };