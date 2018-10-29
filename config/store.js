import { createStore, combineReducers } from 'redux'
import castlePlayerReducer from '../components/castle/player/reducer'
import castleMapReducer from '../components/castle/map/reducer'
import volcanoPlayerReducer from '../components/volcano/player/reducer'
import volcanoMapReducer from '../components/volcano/map/reducer'
import homeReducer from '../components/games-home/reducer'
import insideReducer from './insideReducer'

const rootReducer = combineReducers({
    castlePlayer: castlePlayerReducer,
    castleMap: castleMapReducer,
    volcanoPlayer: volcanoPlayerReducer,
    volcanoMap: volcanoMapReducer,
    home: homeReducer,
    inside: insideReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store