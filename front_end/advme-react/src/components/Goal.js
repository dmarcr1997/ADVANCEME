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
        return(<div>Incomplete</div>)
    }
    // debugger
    return(
        <div>
            {props.goal.name}
            <ul>
                <li>Due: {props.goal.timeframe}</li>
                <li>ended: {renderEnded()}</li>
                <button onClick={() => endGoal()}>End</button>
            </ul>
        </div>
    )
} 

export default Goal