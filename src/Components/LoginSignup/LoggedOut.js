import React from "react";
import { Link } from "react-router-dom";

function LoggedOut() {
    return (
        <>
            <section>
                <h1 className="text-5xl font-medium text-center">You have been logged out!</h1>
                <Link to='/login' />
           </section>

        </>
    );
}

export default LoggedOut;
