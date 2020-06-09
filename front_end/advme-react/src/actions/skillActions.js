    export const newSkill = (inputs, id) => {
       return (dispatch) => {
           fetch(`http://https://advance-me.herokuapp.com/users/${id}/skills/new`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(inputs)})
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_SKILL', action: data
            }))
        }
       
    } 

    export const increaseSkill = (user_id, skill_id) => {
        return (dispatch) => {
            fetch(`http://https://advance-me.herokuapp.com/users/${user_id}/goals/${skill_id}`)
             .then(resp => resp.json())
             .then(data => dispatch({type: 'INCREASE_SKILL', action: data}))
         }
    }