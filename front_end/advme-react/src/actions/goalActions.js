export const goalActions = () => {
    let newGoal = (inputs, id) => {
       return (dispatch) => {
           fetch(`http://https://advance-me.herokuapp.com/users/${id}/goals/new`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(inputs)})
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_GOAL', action: data
            }))
        }
       
    } 

    let endGoal = (user_id, goal_id) => {
        return (dispatch) => {
            fetch(`http://https://advance-me.herokuapp.com/users/${user_id}/goals/${goal_id}`)
             .then(resp => resp.json())
             .then(data => dispatch({type: 'END_GOAL', action: data}))
         }
    }
}