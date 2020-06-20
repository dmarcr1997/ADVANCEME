import { allGoals, allSkills, updateUserLevel, sortSkills} from './ReducerHelpers';

const userReducer = (state={
    id: '',
    username: '',
    userLevel: 0,
    goals: [],
    skills: [],
    loggedIn: false,
    error: '',
    loading: false,
    type: 1
    }, action) => {
        switch(action.type){
            case 'USER_LOG':
                let curLoading = state.loading
                return{
                    ...state,
                    loading: !curLoading
                }
            case 'INVALID_USER':
                return{
                    ...state,
                    error: action.error,
                    loading: false
                }
            case 'NEW_USER':
                return{
                    ...state,
                    id: action.user.id,
                    username: action.user.attributes.username,
                    userLevel: action.user.attributes.user_level,
                    goals: allGoals(action.user.attributes.goals, false),
                    skills: allSkills(action.user.attributes.skills, false),
                    loggedIn: true,
                    loading: false
                }
            case 'GET_USER':
                return{
                    ...state,
                    username: action.user.attributes.username,  
                    userLevel: action.user.attributes.user_level, 
                    id: action.user.id, 
                    skills: allSkills(action.user.attributes.skills,false), 
                    goals: allGoals(action.user.attributes.goals, false),
                    loggedIn: true,
                    loading: false
                }
            case 'NEW_SKILL':
                return{
                    ...state, 
                    skills: allSkills(action.action.data, true)
                }
            case 'INCREASE_SKILL':
               return {
                   ...state,
                   userLevel: updateUserLevel(state.userLevel, 'skill'),
                   skills: allSkills(action.action.data, true)
               }
            case 'NEW_GOAL':
                
                return{
                    ...state, 
                    goals: allGoals(action.action.data, true)
                }
            case 'END_GOAL':
                return{
                    ...state, 
                    userLevel: updateUserLevel(state.userLevel,'goal'),
                    goals: allGoals(action.action.data, true)
                }
            case 'LOGOUT':
                return{
                    ...state,
                    id: '',
                    username: '',
                    userLevel: 0,
                    goals: [],
                    skills: [],
                    loggedIn: false,
                    error: '',
                    loading: false
                }
            case 'SET_TYPE':
                return{
                    ...state,
                    type: action.direction
                }
            default:
                return state
        }
    }



export default userReducer