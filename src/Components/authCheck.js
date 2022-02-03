import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const authCheck = (path) => {
    const authStatus = useSelector(state => state.authenticated);
    // console.log(authStatus);
    let navigate = useNavigate();
    useEffect(() => {

        if (authStatus === false) {
            navigate("/login");
            return null;
        }
        navigate(path);
        return null;
    }, []);


};

export { authCheck };