import React from 'react';
import { useLocation, Link } from 'react-router-dom';
const Selector = () => {
    const location = useLocation()
    return (
        <div className="selector">

            {
                location.pathname === '/' && (<div><h3>Are you a Student or Teacher?</h3><br />
                    <Link className="btn btn-primary" to="/student">Student</Link>
                    <Link className="btn btn-primary" to="/teacher">Teacher</Link></div>)
            }
        </div>
    );
};

export default Selector;