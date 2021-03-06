    export const newSkill = (inputs, id) => {
        let params = {'skills': {'name': inputs, 'user_id': id}};
       return (dispatch) => {
           fetch(`https://advanceme.herokuapp.com/users/${id}/skills/new`, {
                method: 'POST',
                credentials: 'include',
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

    export const increaseSkill = (skill_id, user_id) => {
        let params = {'skills': {'skill_id': skill_id, 'user_id': user_id}}
        return (dispatch) => {
            fetch(`https://advanceme.herokuapp.com/users/${user_id}/skills/${skill_id}/train`,{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(params)})
             .then(resp => resp.json())
             .then(data => dispatch({type: 'INCREASE_SKILL', action: data}))
             .catch(error => console.log(error.message))
         }
    }