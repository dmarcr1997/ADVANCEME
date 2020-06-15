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
                    userLevel: allSkills(action.user.attributes.user_level,false),
                    goals: allGoals(action.user.attributes.goals, false),
                    skills: action.user.attributes.skills,
                    loggedIn: true
                }
            case 'GET_USER':
                return{
                    username: action.user.attributes.username,  
                    userLevel: action.user.attributes.user_level, 
                    id: action.user.id, 
                    skills: allSkills(action.user.attributes.skills,false), 
                    goals: allGoals(action.user.attributes.goals, false),
                    loggedIn: true
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
   
    
    let allSkills = (skills, attr) => {
        let allSkills = sortSkills(skills,attr)
        if(attr === false) allSkills = sortSkills(allSkills,attr)
        let skillAttributes;
        return(
            allSkills.map(skill => {
                if (attr === true){
                    skillAttributes = skill.attributes
                }
                else{
                    skillAttributes = skill
                }
                return{
                    'id': skill.id, 
                    'name': skillAttributes.name, 
                    'lastTrain': skillAttributes.last_train,
                    'level': skillAttributes.level, 
                    'happiness': skillAttributes.happiness, 
                    'user_id': skillAttributes.user_id
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

    let sortSkills = (skills,attr) => {
        let one, two
        return(
        skills.sort((a,b) =>{
        if (attr === true){
            one = a.attributes.name
            two = b.attributes.name
        }
        else{
            one = a.name
            two = b.name
        }
        if(one < two)
        return -1
        else if(one > two)
        return 1
        else
        return 0 
        })
        )
    }

export default userReducer