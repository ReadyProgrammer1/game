import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'


function VolcanoPlayer(props) {
    return (
        <div id= 'theVolcanoPlayer'
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
        ...state.volcanoPlayer,    
    }
}

export default connect(mapStateToProps)(handleMovement(VolcanoPlayer))