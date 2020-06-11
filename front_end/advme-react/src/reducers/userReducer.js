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
                    ...state, username: action.user.attributes.username, id: action.user.id, skills: action.user.attributes.skills, goals: action.user.attributes.goals
                }
            case 'NEW_SKILL':
                return{
                    ...state, 
                    skills: allSkills(action.action.data)
                }
            case 'INCREASE_SKILL':
               return {
                   ...state,
                   skills: allSkills(action.action.data)
               }
            case 'NEW_GOAL':
                
                return{
                    ...state, 
                    goals: allGoals(action.action.data)
                }
            case 'END_GOAL':
                  debugger
                return{
                    ...state, 
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
                    'level': skill.attributes.level, 
                    'happiness': skill.attributes.happiness, 
                    'user_id': skill.attributes.user_id
                    }
                }
            )
        )
    }

export default userReducer