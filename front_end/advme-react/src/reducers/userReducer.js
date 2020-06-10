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
                    ...state, username: action.user.attributes.username, id: action.user.id, skills: action.user.attributes.skills
                }
            case 'NEW_SKILL':
               
                let allSkills = action.action.data.map(skill => {
                    return{
                    'id': skill.id, 
                    'name': skill.attributes.name, 
                    'level': skill.attributes.level, 
                    'happiness': skill.attributes.happiness, 
                    'user_id': skill.attributes.user_id
                    }
                })
                console.log(allSkills)
                debugger
                return{
                    ...state, 
                    skills: allSkills
                }
            case 'INCREASE_SKILL':
               return state
            default:
                return state
        }
    }

export default userReducer