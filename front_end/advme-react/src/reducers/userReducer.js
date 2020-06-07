const userReducer = (state={
    username: '',
    goals: [],
    skills: []}, action) => {
        switch(action.type){
            case 'NEW_USER':
                return{
                    ...state,
                    id: action.id
                    username: action.username,
                }
            case 'GET_USER':
                return{
                    username: action.username,
                    goals: action.goals,
                    skills: action.skills
                }
            default:
                return state
        }
    }

export default userReducer