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
        
        case 'activity/tippedWagon':
            return {
                ...state,
                'supplies': state.supplies - 30,
                'distance': state.distance,
                'days': state.days + 1
            }
        
        default:
            return state
    }
}

// Game step 7
const state = undefined
const action = {}
let wagon = reducer(state, action)
console.log(wagon)

// Game step 8
const travelDay = {
    type: 'activity/travel',
    payload: 1
}
wagon = reducer(wagon, travelDay)
console.log('After travel day', wagon)

// Game step 9
const gatherSupplies = {
    type: 'activity/gather',
    payload: 0
}
wagon = reducer(wagon, gatherSupplies)
console.log('After gather day', wagon)

// Game step 10
wagon = reducer(wagon, {type: 'activity/tippedWagon'})
console.log('After tipping wagon', wagon)