

export const newUser = (inputs) => {
        let userData = {'users': inputs}
       return (dispatch) => {
           fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(resp => resp.json())
            .then(data => { 
                debugger
                if(data.error)
                    return dispatch({type: 'INVALID_USER', error: data.error})
                else
                    dispatch({type: 'NEW_USER', user: data.data})
            })
            .catch(error => console.log(error.message))
        };
       
    } 

export const getUser = (inputs) => {
    let userData = {'users': inputs}
        return (dispatch) => {
            fetch('http://localhost:3000/login',{
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
                debugger
                if(data.error)
                    return dispatch({type: 'INVALID_USER', error: data.error})
                else
                    return dispatch({type: 'GET_USER', user: data.data})
                })
             .catch(error => console.log(error.message))
         }
    }
