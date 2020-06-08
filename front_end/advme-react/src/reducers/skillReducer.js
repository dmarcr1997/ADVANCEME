const skillReducer = (state={
    name: '',
    level: 0,
    happiness: 0}, action) => {
        switch(action.type){
            case 'NEW_SKILL':
                return{
                    id: action.id,
                    name: action.name,
                    level: action.level,
                    happiness: action.happiness
                }
            case 'INCREASE_LEVEL':
                let newLvl = state.level + 1
                return{
                    ...state,
                    level: newLvl
                }
            default:
                return state
        }
    }

export default skillReducer
