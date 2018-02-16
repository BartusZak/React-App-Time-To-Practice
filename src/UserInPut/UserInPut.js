import React from 'react';

const userinput = (prop) => {
    return <input onChange={prop.change}/>
};

export default userinput;