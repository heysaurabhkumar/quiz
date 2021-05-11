import React from "react";
// import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Header from "./components/Header";
import Selector from "./components/Selector";
import Teacher from "./components/Teacher";
import Student from "./components/Student";


import StudentSignUp from "./components/StudentSignUp";
import StudentSignIn from "./components/StudentSignIn";
import TeacherSignUp from "./components/TeacherSignUp";
import TeacherSignIn from "./components/TeacherSignIn";

import Quiz from "./components/Quiz";
import CreateCourse from "./components/CreateCourse";
import ListCourses from "./components/ListCourses";


const App = () => {

  return (
    <Router>
      <Header />
      <Selector />
      <Route path='/student' component={Student} />
      <Route path='/teacher' component={Teacher} />
      <Route path='/student/sign-up' component={StudentSignUp} />
      <Route path='/student/sign-in' component={StudentSignIn} />
      <Route path='/teacher/sign-up' component={TeacherSignUp} />
      <Route path='/teacher/sign-in' component={TeacherSignIn} />
      {/* <Route path='/quiz' component={Quiz} /> */}
      <Route path="/quiz/:course">
        <Quiz />
      </Route>
      <Route path='/create-course' component={CreateCourse} />
      <Route path='/list-courses' component={ListCourses} />
    </Router>
  );
}

export default App;
