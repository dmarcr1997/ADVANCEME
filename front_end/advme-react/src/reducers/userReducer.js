const userReducer = (state={
    id: '',
    username: '',
    userLevel: 0,
    goals: [],
    skills: []
    }, action) => {
        switch(action.type){
            case 'NEW_USER':
                return{
                    id: action.user.id,
                    username: action.user.attributes.username,
                    userLevel: action.user.attributes.user_level,
                    goals: action.user.attributes.goals,
                    skills: action.user.attributes.skills
                }
            case 'GET_USER':
                return{
                    username: action.user.attributes.username,  userLevel: action.user.attributes.user_level, id: action.user.id, skills: action.user.attributes.skills, goals: action.user.attributes.goals
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
                    goals: allGoals(action.action.data)
                }
            case 'END_GOAL':
                return{
                    ...state, 
                    userLevel: updateUserLevel(state.userLevel,'goal'),
                    goals: allGoals(action.action.data)
                }
            default:
                return state
        }
    }


    let allGoals = (goals) => {
        return(
            goals.map(goal => {
                return{
                    'id': goal.id, 
                    'name': goal.attributes.name, 
                    'timeframe': goal.attributes.timeframe, 
                    'exp': goal.attributes.exp, 
                    'user_id': goal.attributes.user_id,
                    'ended': goal.attributes.ended
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