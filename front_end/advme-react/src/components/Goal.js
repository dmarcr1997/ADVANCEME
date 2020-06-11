import React from 'react'

const Goal = (props) => {
    let endGoal = () => {
        props.complete(props.goal.id, props.user_id)
    }

    let renderEnded = () => {
        if(props.goal.ended === true){
            return(<div>Complete</div>)
        }
        else
        return(<div>Incomplete<br/><button onClick={() => endGoal()}>End</button></div>)
    }
    // debugger
    return(
        <div>
            {props.goal.name}
            <ul>
                <li>Due: {props.goal.timeframe}</li>
                <li>ended: {renderEnded()}</li>
                
            </ul>
        </div>
    )
} 

export default Goal