
    export const allGoals = (goals, attr) => {
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
   
    
    export const allSkills = (skills, attr) => {
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

    export const updateUserLevel = (level, type) => {
        switch(type){
            case 'skill':
                return level + (0.25)
            case 'goal':
                return level + 1
            default:
                return
        }
    } 

    export const sortSkills = (skills,attr) => {
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