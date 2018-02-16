import React from 'react';

const userinput = (prop) => {
    return <input onChange={prop.change} value={prop.username}/>
};

export default userinput;