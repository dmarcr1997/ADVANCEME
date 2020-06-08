export const newUser = (inputs) => {
       return (dispatch) => {
           fetch('http://https://advance-me.herokuapp.com/users/new', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(inputs)})
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_USER', action: data
            }))
        }
       
    } 

export const getUser = (id) => {
        return (dispatch) => {
            fetch(`http://https://advance-me.herokuapp.com/users/${id}`)
             .then(resp => resp.json())
             .then(data => dispatch({type: 'GET_USER', action: data}))
         }
    }
