import React from 'react';

const Form = (props) => {
    
    return(
        <div>
            <form onSubmit={props.callBack}>
                {props.inputs.map(inputName => <input name={inputName} type='text'/>)}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form

