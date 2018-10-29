import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../../config/constants'


const grass = require('../../../images/castle/grass.png')
const tree = require('../../../images/castle/tree.png')
const book = require('../../../images/castle/book.png')
const castleFloor = require('../../../images/castle/CastleFloor.png')
const wall = require('../../../images/castle/castle-tower-wall.png')
const bridge = require('../../../images/castle/bridge.png')
const river1 = require('../../../images/castle/river1.png')
const river2 = require('../../../images/castle/river2.png')
const throne = require('../../../images/castle/throne.png')
const door = require('../../../images/castle/door.png')
const knight1 = require('../../../images/castle/knight-1.png')
const knight2 = require('../../../images/castle/knight-2.png')
const knight3 = require('../../../images/castle/knight-3.png')
const knight4 = require('../../../images/castle/knight-4.png')
const castleTopLeft = require('../../../images/castle/castle-large_01.png')
const castleTopCenter = require('../../../images/castle/castle-large_02.png')
const castleTopRight = require('../../../images/castle/castle-large_03.png')
const castleBottomLeft = require('../../../images/castle/castle-large_04.png')
const castleBottomCenter = require('../../../images/castle/castle-large_05.png')
const castleBottomRight = require('../../../images/castle/castle-large_06.png')
const flowersLeft = require('../../../images/castle/FlowersLeft.png')
const flowersRight = require('../../../images/castle/FlowersRight.png')
const pondLeft = require('../../../images/castle/PondLeft.png')
const pondCenter = require('../../../images/castle/PondCenter.png')
const pondRight = require('../../../images/castle/PondRight.png')
const gateCenter = require('../../../images/castle/GateCenter.png')
const gateLeft = require('../../../images/castle/GateLeft.png')
const gateRight = require('../../../images/castle/GateRight.png')
const rock = require('../../../images/castle/rock.png')
const rockSnow = require('../../../images/castle/rock-snow.png')
const treeSnow = require('../../../images/castle/tree-snow.png')
const blueArmor = require('../../../images/castle/blue-armor.png')
const iceLeft = require('../../../images/castle/ice-left.png')
const iceRight = require('../../../images/castle/ice-right.png')
const chest = require('../../../images/castle/chest.png')
const exit = require('../../../images/castle/exit.png')


function getTileSprite(type) {
    switch(type) {
        case 0: 
            return grass
        case 1:
            return 'mixed'
        case 3:
            return tree
        case 4:
            return chest
        case 5:
            return gateCenter
        case 6:
            return pondLeft
        case 7: 
            return pondCenter
        case 8:
            return pondRight
        case 9:
            return gateLeft
        case 10:
            return gateRight
        case 11:
            return castleTopLeft
        case 12: 
            return castleTopCenter
        case 13:
            return castleTopRight
        case 14:
            return castleBottomLeft
        case 15:
            return castleBottomCenter
        case 16:
            return castleBottomRight
        case 17:
            return rock
        case 18: 
            return tree
        case 19:
            return rockSnow
        case 20:
            return treeSnow
        case 21:
            return iceLeft
        case 22:
            return iceRight
        case 23:
            return knight1
        case 24:
            return knight2
        case 25:
            return knight3
        case 26:
            return knight4
        case 27:
            return blueArmor
        case 28:
            return castleFloor
        case 29:
            return throne
        case 30:
            return door
        case 31:
            return wall
        case 32:
            return river1
        case 33:
            return river2
        case 34:
            return bridge
        case 35:
            return flowersLeft
        case 36: 
            return flowersRight
        case 37:
            return book
        case 38:
            return exit
    }
}

function MapTile(props) {
    return <div 
    style={{
        display: 'inline-flex',
        backgroundColor: '#42b842',
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        //backgroundImage: `url('${getTileSprite(props.tile)}')`,
    }}>
    <img src={getTileSprite(props.tile)}/>
    </div>
}

function MapRow(props) {
    return <div 
        className="row"
        style={{
            height: SPRITE_SIZE,
        }}
        >
        {
            props.tiles.map( tile => <MapTile tile={tile} />)
        }
        </div>
}

function CastleMap(props) {
    //alert('castlemap props ' + JSON.stringify(props))
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '560px',
                border: '4px solid white',
                border: '4px solid white',
                webkitBoxShadow: '0px 0px 0px 2px blue',
                mozBoxShadow: '0px 0px 0px 2px blue',
                boxShadow: '0px 0px 0px 2px blue',
                
            }}
        >
            {
                
                props.tiles.map( row => <MapRow tiles={row} />)
                
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.castleMap.tiles,
        castle: state.castleMap.castle,
        ...state.castleMap
    }
}

export default connect(mapStateToProps)(CastleMap)