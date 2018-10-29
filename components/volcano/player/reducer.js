import walkSprite from './player_walk.png'

const initialState = {
    position: [0, 0],
    backgroundImage: `url('${walkSprite}')`,
    blueArmor: 'false',
    spriteLocation: '0px 0px',
    direction: 'east',
    walkIndex: 0,
}

const volcanoPlayerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_VOLCANO_PLAYER':
            return {
                ...action.payload
            }
        default: return state
    }
}

export default volcanoPlayerReducer