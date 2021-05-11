import React, { useState } from 'react';

const CreateCourse = () => {
    const [courseTitle, setCourseTitle] = useState("");

    const [q1, setq1] = useState("");
    const [q1o1, setq1o1] = useState("");
    const [q1o1c, setq1o1c] = useState(false);
    const [q1o2, setq1o2] = useState("");
    const [q1o2c, setq1o2c] = useState(false);
    const [q1o3, setq1o3] = useState("");
    const [q1o3c, setq1o3c] = useState(false);
    const [q1o4, setq1o4] = useState("");
    const [q1o4c, setq1o4c] = useState(false);

    const [q2, setq2] = useState("");
    const [q2o1, setq2o1] = useState("");
    const [q2o1c, setq2o1c] = useState(false);
    const [q2o2, setq2o2] = useState("");
    const [q2o2c, setq2o2c] = useState(false);
    const [q2o3, setq2o3] = useState("");
    const [q2o3c, setq2o3c] = useState(false);
    const [q2o4, setq2o4] = useState("");
    const [q2o4c, setq2o4c] = useState(false);

    return (
        <form>
            <h3>Create New Course</h3>

            <div className="form-group">
                <label>Course Title</label>
                <input type="text" className="form-control" placeholder="Enter Course Title" onChange={e => {
                    setCourseTitle(e.target.value);
                }} required />
            </div>

            <br /><div className="form-group">
                <label>Question 1</label>
                <input type="text" className="form-control" placeholder="Enter Question" onChange={e => {
                    setq1(e.target.value);
                }} required />
            </div>

            <div className="form-group">
                <label>Option 1</label>
                <input type="text" className="form-control" placeholder="Enter Option 1" onChange={e => {
                    setq1o1(e.target.value);
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques1option1" onChange={(e) => setq1o1c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques1option1">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 2</label>
                <input type="text" className="form-control" placeholder="Enter Option 2" onChange={e => {
                    setq1o2(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques1option2" onChange={(e) => setq1o2c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques1option2">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 3</label>
                <input type="text" className="form-control" placeholder="Enter Option 3" onChange={e => {
                    setq1o3(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques1option3" onChange={(e) => setq1o3c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques1option3">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 4</label>
                <input type="text" className="form-control" placeholder="Enter Option 4" onChange={e => {
                    setq1o4(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques1option4" onChange={(e) => setq1o4c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques1option4">Tick if ths is right option</label>
                </div>
            </div>
            <br />



            <br /><div className="form-group">
                <label>Question 2</label>
                <input type="text" className="form-control" placeholder="Enter Question" onChange={e => {
                    setq2(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <label>Option 1</label>
                <input type="text" className="form-control" placeholder="Enter Option 1" onChange={e => {
                    setq2o1(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques2option1" onChange={(e) => setq2o1c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques2option1">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 2</label>
                <input type="text" className="form-control" placeholder="Enter Option 2" onChange={e => {
                    setq2o2(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques2option2" onChange={(e) => setq2o2c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques2option2">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 3</label>
                <input type="text" className="form-control" placeholder="Enter Option 3" onChange={e => {
                    setq2o3(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques2option3" onChange={(e) => setq2o3c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques2option3">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 4</label>
                <input type="text" className="form-control" placeholder="Enter Option 4" onChange={e => {
                    setq2o4(e.target.value)
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques2option4" onChange={(e) => setq2o4c(e.currentTarget.checked)} />
                    <label className="custom-control-label" htmlFor="ques2option4">Tick if ths is right option</label>
                </div>
            </div>
            <br />




            {/* <br /><div className="form-group">
                <label>Question 3</label>
                <input type="text" className="form-control" placeholder="Enter Question" onChange={e => { }} required />
            </div>

            <div className="form-group">
                <label>Option 1</label>
                <input type="text" className="form-control" placeholder="Enter Option 1" onChange={e => {
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques3option1" />
                    <label className="custom-control-label" htmlFor="ques3option1">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 2</label>
                <input type="text" className="form-control" placeholder="Enter Option 2" onChange={e => {
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques3option2" />
                    <label className="custom-control-label" htmlFor="ques3option2">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 3</label>
                <input type="text" className="form-control" placeholder="Enter Option 3" onChange={e => {
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques3option3" />
                    <label className="custom-control-label" htmlFor="ques3option3">Tick if ths is right option</label>
                </div>
            </div>

            <div className="form-group">
                <label>Option 4</label>
                <input type="text" className="form-control" placeholder="Enter Option 4" onChange={e => {
                }} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="ques3option4" />
                    <label className="custom-control-label" htmlFor="ques3option4">Tick if ths is right option</label>
                </div>
            </div>
            <br /> */}

            <button type="submit" className="btn btn-primary btn-block" onClick={() => {
                fetch("/create-course", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        courseTitle,
                        q1,
                        q1o1,
                        q1o1c,
                        q1o2,
                        q1o2c,
                        q1o3,
                        q1o3c,
                        q1o4,
                        q1o4c,
                        q2,
                        q2o1,
                        q2o1c,
                        q2o2,
                        q2o2c,
                        q2o3,
                        q2o3c,
                        q2o4,
                        q2o4c
                    }),
                })
            }}>Create</button>

        </form>
    );
};


export default CreateCourse;