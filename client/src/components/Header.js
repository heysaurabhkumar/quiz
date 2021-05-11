import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Quiz Website</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/student">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teacher">Teacher</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >


        // <div>
        //     <header className="">
        //         <a className="btn" href="/">Home</a>
        //         <center>
        //             <h1>Quiz Website</h1>
        //         </center>
        //     </header>
        // </div>
    );
};


export default Header;