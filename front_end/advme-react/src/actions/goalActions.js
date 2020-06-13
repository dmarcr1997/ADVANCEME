export const newGoal = (name, date, user_id) => {
       let params = {'goals': {'name': name, 'timeframe': date, 'user_id': user_id}};
       return (dispatch) => {
           fetch(`https://advance-me.herokuapp.com/users/${user_id}/goals/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(params)})
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_GOAL', action: data
            }))
        }
       
    }

export const endGoal = (goal_id, user_id) => {
    let params = {'goals': {'goal_id': goal_id, 'user_id': user_id}}
        return (dispatch) => {
            fetch(`https://advance-me.herokuapp.com/users/${user_id}/goals/${goal_id}/end`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(params)})
             .then(resp => resp.json())
             .then(data => dispatch({type: 'END_GOAL', action: data}))
         }
    }
