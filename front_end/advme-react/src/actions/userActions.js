

export const newUser = (inputs) => {
        let userData = {'users': inputs}
       return (dispatch) => {
           fetch('http://localhost:3000/signup', {
                method: 'POST',
                credentials: 'include',
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
                    return dispatch({type: 'NEW_USER', user: data.data})
            })
            .catch(error => console.log(error.message))
        };
       
    } 

export const getUser = (inputs) => {
    let userData = {'users': inputs}
        return (dispatch) => {
            fetch('http://localhost:3000/login',{
                method: 'POST',
                credentials: 'include',
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
                    return dispatch({type: 'INVALID_USER', error: data.error})
                else
                    return dispatch({type: 'GET_USER', user: data.data})
                })
             .catch(error => console.log(error.message))
         }
    }

export const logout = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/logout',{
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(data => {
            return dispatch({type: 'LOGOUT'})
        })
    }
}

export const checkLogin = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/',{
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.sessh){
             
                fetch(`http://localhost:3000/user/${data.sessh}`,{
                    credentials: 'include'
                })
                .then(resp => resp.json())
                .then(data => {
                    if(data.data){
                        return dispatch({type: 'GET_USER', user: data.data})
                    } 
                    else
                        return dispatch({type: 'INVALID_USER', error: data.error})
                })
            }
            else if(data.no_sessh)
                        return dispatch({type: 'USER_LOG'})
    
        })

    }
}

export const setLoading = () => {
    return(dispatch) => {
        return dispatch({type: 'USER_LOG'})
    }
}
