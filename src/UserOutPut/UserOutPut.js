import React from 'react';
import './UserOutPut.css';

const useroutput = (props) => {
    return (
        <div className="Accounts">
            <p>{props.username}</p>
            <p>Drugi paragraf</p>
        </div>
    )
};

export default useroutput;