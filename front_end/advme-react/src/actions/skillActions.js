    export const newSkill = (inputs, id) => {
        let params = {'skills': {'name': inputs, 'user_id': id}};
       return (dispatch) => {
           fetch(`https://advance-me.herokuapp.com/users/${id}/skills/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(params)})
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_SKILL', action: data
            }))
            .catch(error => console.log(error.message))
        }
       
    } 

    export const increaseSkill = (user_id, skill_id) => {
        return (dispatch) => {
            fetch(`https://advance-me.herokuapp.com/users/${user_id}/skills/${skill_id}/train`)
             .then(resp => resp.json())
             .then(data => dispatch({type: 'INCREASE_SKILL', action: data}))
             .catch(error => console.log(error.message))
         }
    }