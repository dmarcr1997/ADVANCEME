import React from 'react';

const Form = (props) => {
    
    return(
        <div>
            <form onSubmit={props.callBack}>
                {props.inputs.map(inputName => <input name={inputName} type='text' onChange={props.handleChange} value={props.inputName}/>)}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form

