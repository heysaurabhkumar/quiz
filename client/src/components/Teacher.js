import React from 'react';
import { useLocation } from 'react-router-dom';

import TeacherSignin from './TeacherSignIn';

const Teacher = () => {
    const location = useLocation()
    return (
        <>
            {
                location.pathname === '/teacher' && (<>
                    <TeacherSignin />
                </>)
            }
        </>
    );
};

export default Teacher;