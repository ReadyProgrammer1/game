import React from 'react'
import VolcanoPlayer from '../player'
import VolcanoMap from '../map'

import { connect } from 'react-redux'

import { volcanoTiles } from '../../../data/maps/Volcano1'
import { tilesVolcano } from '../../../data/maps/Volcano2'
import store from '../../../config/store'

function VolcanoWorld(props) {
    
    if (store.getState().inside.insideWorld == 'true') {
        store.dispatch({ type: 'ADD_VOLCANO_TILES', payload: {
            tiles: tilesVolcano,
        }})
    } else {
        store.dispatch({ type: 'ADD_VOLCANO_TILES', payload: {
            tiles: volcanoTiles,
        }})
    }

    return (
        <div id='gameWorld'
        style={{
                position: 'relative',
                width: '800px',
                height: '560px',
                margin: '20px auto',
            }}
        >
            <VolcanoMap />
            <VolcanoPlayer />
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        ...state.inside,   
    }
}
export default connect(mapStateToProps)(VolcanoWorld)