
const initialState = {
  insideWorld: 'false',
}


const insideReducer = (state=initialState, action) => {
  switch(action.type) {
      case 'WORLD_RENDER':
          return {
              ...action.payload
          }
      default: return state
  }
}

export default insideReducer