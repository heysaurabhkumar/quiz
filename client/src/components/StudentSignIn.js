import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

const StudentSignin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();
    return (

        <form>
            <h3>Student Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={e => {
                    setemail(e.target.value);
                }} required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={e => {
                    setpassword(e.target.value);
                }} required />
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={() => {
                fetch("/student/sign-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                })
                history.push("/list-courses")
            }}>Submit</button>
            <p className="forgot-password text-right">
                New Student <Link to="/student/sign-up">Register?</Link>
            </p>
        </form>
    );
};

export default StudentSignin;