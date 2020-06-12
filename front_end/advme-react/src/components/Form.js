import React from 'react';

const Form = (props) => {
    function renderHiddenField(){
        if(props.hasHidden){
            return(
                <input type='hidden' value={props.hiddenVal} name='hidden'/>
            )
        }
        else
        return
    }
    function dateTime(){
        if(props.hasDateTime){
            return(
                <>
                    <label>Date</label>
                    <input type='date' name='datetime' /><br/>
                </>
            )
        }
    }
    return(
        <div>
            <form onSubmit={props.callBack}>
                {props.inputs.map((inputName) => {
                    return(
                        <div>
                            <label>{inputName}</label>
                            <input name={inputName} type='text'/><br/>
                        </div>
                        )
                    }
                )
                }
                {renderHiddenField()}
                {dateTime()}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form

