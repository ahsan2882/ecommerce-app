import { createStore } from "redux";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
    username: "ahsan@gmail.com",
    password: "password123",
    authenticated: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: return {
            ...state,
            authenticated: true
        };
        case LOGOUT: return {
            ...state,
            authenticated: false
        };
        default: return state;
    }
};

const store = createStore(reducer);




function loginUser() {
    return {
        type: LOGIN
    };
}
function logoutUser() {
    return {
        type: LOGOUT
    };
}

export { loginUser, logoutUser };

export default store;

