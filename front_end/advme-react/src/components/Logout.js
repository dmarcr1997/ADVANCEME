import React from 'react';
const Logout = (props) =>{
    return(
        <div>
            <h3>Are You Sure?</h3>
            <button onClick={props.logout('yes')}>Yes</button>
            <button onClick={props.logout('no')}>No</button>
        </div>
    )
}

export default Logout