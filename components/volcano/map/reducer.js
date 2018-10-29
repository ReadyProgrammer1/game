
const initialState = {
    tiles: [],
    volcano: 'false',
}


const volcanoMapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_VOLCANO_TILES':
            return {
                ...action.payload
            }
        default: return state
    }
}

export default volcanoMapReducer