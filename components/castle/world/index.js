import React from 'react'
import CastlePlayer from '../player'
import CastleMap from '../map'

import { connect } from 'react-redux'

import { castleTiles } from '../../../data/maps/Castle1'
import { tilesCastle } from '../../../data/maps/Castle2'
import store from '../../../config/store'

function CastleWorld(props) {
    
    if (store.getState().inside.insideWorld == 'true') {
        store.dispatch({ type: 'ADD_CASTLE_TILES', payload: {
            tiles: tilesCastle,
        }})
    } else {
        store.dispatch({ type: 'ADD_CASTLE_TILES', payload: {
            tiles: castleTiles,
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
            <CastleMap />
            <CastlePlayer />
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        ...state.inside,   
    }
}
export default connect(mapStateToProps)(CastleWorld)