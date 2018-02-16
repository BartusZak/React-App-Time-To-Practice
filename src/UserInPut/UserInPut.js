import React from 'react';

const userinput = (prop) => {
    return <input style={prop.style} onChange={prop.change} value={prop.username}/>
};

export default userinput;