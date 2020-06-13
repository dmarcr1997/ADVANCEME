const userReducer = (state={
    id: '',
    username: '',
    userLevel: 0,
    goals: [],
    skills: [],
    loggedIn: false,
    error: ''
    }, action) => {
        switch(action.type){
            case 'INVALID_USER':
                return{
                    ...state,
                    error: action.error
                }
            case 'NEW_USER':
                return{
                    id: action.user.id,
                    username: action.user.attributes.username,
                    userLevel: action.user.attributes.user_level,
                    goals: allGoals(action.user.attributes.goals, false),
                    skills: action.user.attributes.skills,
                    loggedIn: true
                }
            case 'GET_USER':
                debugger
                return{
                    username: action.user.attributes.username,  
                    userLevel: action.user.attributes.user_level, 
                    id: action.user.id, 
                    skills: action.user.attributes.skills, 
                    goals: allGoals(action.user.attributes.goals, false),
                    loggedIn: true
                }
            case 'NEW_SKILL':
                return{
                    ...state, 
                    skills: allSkills(action.action.data)
                }
            case 'INCREASE_SKILL':
               return {
                   ...state,
                   userLevel: updateUserLevel(state.userLevel, 'skill'),
                   skills: allSkills(action.action.data)
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
            default:
                return state
        }
    }


    let allGoals = (goals, attr) => {
        let goalAttributes;
       
        return(
            goals.map(goal => {
                if (attr === true){
                    goalAttributes = goal.attributes
                }
                else{
                    goalAttributes = goal
                }
                let date = goalAttributes.timeframe.split('T')[0]
                return{
                    'id': goal.id, 
                    'name': goalAttributes.name, 
                    'timeframe': date, 
                    'exp': goalAttributes.exp, 
                    'user_id': goalAttributes.user_id,
                    'ended': goalAttributes.ended
                    }
                }
            )
        )
    }
   
    
    let allSkills = (skills) => {
        return(
            skills.map(skill => {
                return{
                    'id': skill.id, 
                    'name': skill.attributes.name, 
                    'lastTrain': skill.attributes.last_train,
                    'level': skill.attributes.level, 
                    'happiness': skill.attributes.happiness, 
                    'user_id': skill.attributes.user_id
                    }
                }
            )
        )
    }

    let updateUserLevel = (level, type) => {
        switch(type){
            case 'skill':
                return level + (0.25)
            case 'goal':
                return level + 1
            default:
                return
        }
    } 

export default userReducer