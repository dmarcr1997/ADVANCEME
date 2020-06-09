const userReducer = (state={
    id: '',
    username: '',
    goals: [],
    skills: []
    }, action) => {
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
                    ...state, username: action.user.attributes.username, id: action.user.id
                }
            default:
                return state
        }
    }

export default userReducer