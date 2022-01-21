import React from "react";
import { Link } from "react-router-dom";

function LoggedOut() {
    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-5xl font-medium text-center">You have been logged out!</h1>
                <Link to='/login' className="text-2xl mt-4 hover:text-blue-600">Click here to login</Link>
           </section>

        </>
    );
}

export default LoggedOut;
