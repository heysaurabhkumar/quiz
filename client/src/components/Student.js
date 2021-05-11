import React from 'react';
import { useLocation } from 'react-router-dom';

import StudentSignin from './StudentSignIn';

const Student = () => {
    const location = useLocation()
    return (
        <>
            {
                location.pathname === '/student' && (<>
                    <StudentSignin />

                </>)
            }
        </>
    );
};

export default Student;