const goalReducer = (state={
    name: '',
    timeframe: '',
    exp: 0,
    ended: false}, action) => {
        switch(action.type){
            case 'NEW_GOAL':
                return{
                    id: action.id,
                    name: action.name,
                    timeframe: action.timeframe,
                    exp: action.exp,
                    ended: false
                }
            case 'END_GOAL':
                return{
                    ...state,
                    ended: true,
                    exp: action.exp
                }
            default:
                return state
        }
    }

export default goalReducer
