const initialState = {
  game: 'Home'
}

const formReducer = (state=initialState, action) => {
  switch(action.type) {
      case 'PLAY_GAME':
          return {
              game: action.payload.game
          }
      default: return state
  }
}

export default formReducer