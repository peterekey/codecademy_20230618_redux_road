const initialWagonState = {
    'supplies': 100,
    'distance': 0,
    'days': 0,
    'cash': 200
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
            if (state.supplies - (action.payload * 20) < 0) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    'supplies': state.supplies - (action.payload * 20),
                    'distance': state.distance + (action.payload * 10),
                    'days': state.days + action.payload
                }
            }
        
        case 'activity/tippedWagon':
            return {
                ...state,
                'supplies': state.supplies - 30,
                'distance': state.distance,
                'days': state.days + 1
            }
        
        
        case 'activity/sell':
            return {
                ...state,
                'supplies': state.supplies - 20,
                'cash': state.cash + 5
            }
        
        case 'activity/buy':
            return {
                ...state,
                'supplies': state.supplies + 25,
                'cash': state.cash - 15
            }

        case 'activity/theft':
            return {
                ...state,
                'cash': state.cash / 2
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

// Game step 11
const travelDays = {
    type: 'activity/travel',
    payload: 3
}
wagon = reducer(wagon, travelDays)
console.log('After travelling for 3 days', wagon)

// Game step 12
const longTravel = {
    type: 'activity/travel',
    payload: 3
}
wagon = reducer(wagon, longTravel)
console.log('Testing new negative supply if/else',wagon)

// Game step 13
const buySupplies = {
    type: 'activity/buy'
}
wagon = reducer(wagon, buySupplies)
console.log('Buying supplies', wagon)

wagon = reducer(wagon, {type: 'activity/theft'})
console.log('Theft', wagon)

wagon = reducer(wagon, {type: 'activity/sell'})
console.log('Selling', wagon)