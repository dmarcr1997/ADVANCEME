export const setType = (num) =>{
    return(dispatch) => {
        return dispatch({type: 'SET_TYPE', direction: num})
    } 
}