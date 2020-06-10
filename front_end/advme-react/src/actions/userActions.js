

export const newUser = (inputs) => {
        let userData = {'users': inputs}
       return (dispatch) => {
           fetch('https://advance-me.herokuapp.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(resp => resp.json())
            .then(data => dispatch({type: 'NEW_USER', action: data.data}))
            .catch(error => console.log(error.message))
        };
       
    } 

export const getUser = (inputs) => {
    let userData = {'users': inputs}
        return (dispatch) => {
            fetch('https://advance-me.herokuapp.com/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(userData)
            })
             .then(resp => resp.json())
             .then(data => dispatch({type: 'GET_USER', user: data.data}))
             .catch(error => console.log(error.message))
         }
    }
