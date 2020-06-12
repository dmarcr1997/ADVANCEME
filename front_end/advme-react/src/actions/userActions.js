

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
            .then(data => { 
                if(data.error)
                    return dispatch({type: 'INVALID', error: data.error})
                else
                    dispatch({type: 'NEW_USER', user: data.data})
            })
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
                    'Accepts': 'application/json',
                    'X-CSRF-TOKEN': unescape(document.cookie.split('=')[1])
                },
                body: JSON.stringify(userData)
            })
             .then(resp => resp.json())
             .then(data => {
                if(data.error)
                    return dispatch({type: 'INVALID', error: data.error})
                else
                    return dispatch({type: 'GET_USER', user: data.data})
                })
             .catch(error => console.log(error.message))
         }
    }
