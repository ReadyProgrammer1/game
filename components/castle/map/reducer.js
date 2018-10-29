
const initialState = {
    tiles: [],
    castle: 'false',
}


const castleMapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_CASTLE_TILES':
            return {
                ...action.payload
            }
        default: return state
    }
}

export default castleMapReducer