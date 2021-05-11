import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ListCourses = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("/list-courses", {
            method: "GET"
        }).then(async (data1) => {
            let course = await data1.json()
            setData(course)
        })
    }, [])
    // console.log(data);

    return (
        <div>
            <h3>All Courses Available</h3>

            <ul>
                {data && data[0] ? data.map(e => {
                    let link = `/quiz/${e.courseTitle}`
                    return (<><Link to={link}>{e.courseTitle}</Link> <br /></>);

                }) : null}

            </ul>
        </div>
    );
}

export default ListCourses;