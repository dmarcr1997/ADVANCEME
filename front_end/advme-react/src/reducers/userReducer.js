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
    type: 1,
    trainDates: []
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
                    loading: false,
                    trainDates: action.user.attributes.train_dates
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
                    loading: false,
                    trainDates: action.user.attributes.train_dates
                }
            case 'NEW_SKILL':
                debugger
                return{
                    ...state, 
                    skills: allSkills(action.action.data.attributes.skills, false)
                }
            case 'INCREASE_SKILL':
                debugger
               return {
                   ...state,
                   userLevel: action.action.data.attributes.user_level,
                   skills: allSkills(action.action.data.attributes.skills, false),
                   trainDates: action.action.data.attributes.train_dates
               }
            case 'NEW_GOAL':
                debugger
                return{
                    ...state, 
                    goals: allGoals(action.action.data.attributes.goals, false)
                }
            case 'END_GOAL':
                debugger
                return{
                    ...state, 
                    userLevel: action.action.data.attributes.user_level,
                    goals: allGoals(action.action.data.attributes.goals, false),
                    trainDates: action.action.data.attributes.train_dates
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
                    loading: false,
                    trainDates: []
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