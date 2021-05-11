const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");

const JWT_SECRET = "quizwebsite";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

mongoose.connect("mongodb+srv://admin-saurabh:Test123@cluster0.wapcc.mongodb.net/quizDB", { useNewUrlParser: true, useUnifiedTopology: true });

//Student Sign Up
const studentSchema = {
    fname: String,
    lname: String,
    email: String,
    password: String
}

const Student = mongoose.model("Student", studentSchema);

app.post("/student/sign-up", async (req, res) => {

    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 12);
        const newStudent = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashPassword
        }
        await Student.create(newStudent);
    } catch (e) {
        console.log(e);
    }
})

//Student Sign In
app.post("/student/sign-in", async (req, res) => {
    const { email, password } = req.body;

    const student = await Student.findOne({ email: email })
    if (!student) {
        return res.status(422).json({ error: "Invalid User" })
    }
    bcrypt.compare(password, student.password)
        .then(user => {
            if (user) {
                const token = jwt.sign({ _id: student._id }, JWT_SECRET)
                const { fname, lname, email } = student

                res.json({ token, user: { fname, lname, email } })
                // console.log("login");
            } else {
                return res.status(422).json({ error: "Invalid User" })
            }
        })
        .catch(e => {
            console.log(e);
        })
})


//Teacher Sign Up
const teacherSchema = {
    fname: String,
    lname: String,
    email: String,
    password: String
}

const Teacher = mongoose.model("Teacher", teacherSchema);

app.post("/teacher/sign-up", async (req, res) => {
    try {
        const hashPassword = bcrypt.hashSync(req.body.password, 12);
        const newTeacher = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashPassword
        }
        await Teacher.create(newTeacher);
    } catch (e) {
        console.log(e);
    }
})

//Teacher Sign In
app.post("/teacher/sign-in", async (req, res) => {
    const { email, password } = req.body;

    const teacher = await Teacher.findOne({ email: email })
    if (!teacher) {
        return res.status(422).json({ error: "Invalid User" })
    }
    bcrypt.compare(password, teacher.password)
        .then(user => {
            if (user) {
                const token = jwt.sign({ _id: teacher._id }, JWT_SECRET)
                const { fname, lname, email } = teacher

                res.json({ token, user: { fname, lname, email } })
                // console.log("login");
            } else {
                return res.status(422).json({ error: "Invalid User" })
            }
        })
        .catch(e => {
            console.log(e);
        })
})

//create-course

const courseSchema = {
    courseTitle: String,
    questions: []
}

const Course = mongoose.model("Course", courseSchema);

app.post("/create-course", async (req, res) => {
    console.log(req.body);
    try {
        const newCourse = {
            courseTitle: req.body.courseTitle,
            questions: [
                {
                    questionText: req.body.q1,
                    answerOptions: [
                        { answerText: req.body.q1o1, isCorrect: req.body.q1o1c },
                        { answerText: req.body.q1o2, isCorrect: req.body.q1o2c },
                        { answerText: req.body.q1o3, isCorrect: req.body.q1o3c },
                        { answerText: req.body.q1o4, isCorrect: req.body.q1o4c }
                    ]
                },
                {
                    questionText: req.body.q2,
                    answerOptions: [
                        { answerText: req.body.q2o1, isCorrect: req.body.q2o1c },
                        { answerText: req.body.q2o2, isCorrect: req.body.q2o2c },
                        { answerText: req.body.q2o3, isCorrect: req.body.q2o3c },
                        { answerText: req.body.q2o4, isCorrect: req.body.q2o4c }
                    ]
                }
            ]
        }
        await Course.create(newCourse);
    } catch (e) {
        console.log(e);
    }

})

app.get("/list-courses", (req, res) => {
    Course.find({}, (err, foundData) => {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(foundData);
            res.send(foundData);
        }

    });
    // console.log(JSON.stringify(data));
    // res.send(data);
})

app.get("/list-quiz", async (req, res) => {
    const { course } = req.query;
    // console.log(course);
    await Course.findOne({ courseTitle: course }, (err, foundData) => {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(foundData);
            res.send(foundData);
        }

    });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})