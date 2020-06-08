import React from 'react';

const form = (props) => {
    
    return(
        <div>
            <form onSubmit={() => props.callBack}>
                {props.inputs.map(inputName => <input name={inputName} type='text' onChange={props.handleChange} value={props.inputName}/>)}
                <input type='submit'>{props.buttonTxt}</input>
            </form>
        </div>
    )
}

export default form