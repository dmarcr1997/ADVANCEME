export const setType = (num) =>{
    debugger
    return(dispatch) => {
        return dispatch({type: 'SET_TYPE', direction: num})
    } 
}