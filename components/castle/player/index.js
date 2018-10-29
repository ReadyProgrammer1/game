import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'


function CastlePlayer(props) {
    //alert('castleplayer')
    return (
        <div id= 'theCastlePlayer'
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: props.backgroundImage,
                backgroundPosition: props.spriteLocation,
                width: '40px',
                height: '40px',
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.castlePlayer,    
    }
}

export default connect(mapStateToProps)(handleMovement(CastlePlayer))