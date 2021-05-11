import React, { useState } from "react";
import { Link } from 'react-router-dom';

const TeacherSignUp = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    return (
        <form>
            <h3>Teacher Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" onChange={e => {
                    setfname(e.target.value);
                }} required />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" onChange={e => {
                    setlname(e.target.value);
                }} required />
            </div>

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
                fetch("/teacher/sign-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ fname, lname, email, password }),
                })
            }}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/teacher/sign-in">sign in?</Link>
            </p>
        </form>
    );
};


export default TeacherSignUp;