const initialWagonState = {
    'supplies': 100,
    'distance': 0,
    'days': 0
}

const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
        case 'activity/gather':
            return {
                ...state,
                'supplies': state.supplies + 15,
                'distance': state.distance,
                'days': state.days + 1
            }
        case 'activity/travel':
            return {
                ...state,
                'supplies': state.supplies - (action.payload * 20),
                'distance': state.distance + (action.payload * 10),
                'days': state.days + action.payload
            }
        default:
            return state
    }
}