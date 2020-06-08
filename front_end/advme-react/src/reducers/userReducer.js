const userReducer = (state={
    username: '',
    goals: [],
    skills: []}, action) => {
        debugger
        switch(action.type){
            case 'NEW_USER':
                return{
                    ...state,
                    id: action.id,
                    username: action.attributes.username,
                    goals: action.goals,
                    skills: action.skills
                }
            case 'GET_USER':
                return{
                    username: action.attributes.username,
                    goals: action.attributes.goals,
                    skills: action.attributes.skills
                }
            default:
                return state
        }
    }

export default userReducer