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
        <tr>
            <td>
            {props.goal.name}
            </td>
            <td>
            {props.goal.timeframe}
            </td>
            <td>    
                {renderEnded()}
            </td>
        </tr>
    )
} 

export default Goal