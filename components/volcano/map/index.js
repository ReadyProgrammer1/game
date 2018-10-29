import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../../config/constants'


const grass = require('../../../images/volcano/grass.png')
const tree = require('../../../images/volcano/tree.png')
const book = require('../../../images/volcano/book.png')
const castleFloor = require('../../../images/volcano/CastleFloor.png')
const wall = require('../../../images/volcano/castle-tower-wall.png')
const bridge = require('../../../images/volcano/bridge.png')
const lavaflow = require('../../../images/volcano/lavaflow.png')
const throne = require('../../../images/volcano/throne.png')
const door = require('../../../images/volcano/door.png')
const knight1 = require('../../../images/volcano/knight-1.png')
const knight2 = require('../../../images/volcano/knight-2.png')
const knight4 = require('../../../images/volcano/knight-4.png')
const pumpkinsLeft = require('../../../images/volcano/pumpkinsleft.png')
const pumpkinsMiddle = require('../../../images/volcano/pumpkinsmiddle.png')
const pumpkinsRight = require('../../../images/volcano/pumpkinsright.png')
const pondLeft = require('../../../images/volcano/PondLeft.png')
const pondCenter = require('../../../images/volcano/PondCenter.png')
const pondRight = require('../../../images/volcano/PondRight.png')
const gateCenter = require('../../../images/volcano/GateCenter.png')
const gateLeft = require('../../../images/volcano/GateLeft.png')
const gateRight = require('../../../images/volcano/GateRight.png')
const rock = require('../../../images/volcano/rock.png')
const rockSnow = require('../../../images/volcano/rock-snow.png')
const volcano = require('../../../images/volcano/volcano.png')
const redArmor = require('../../../images/volcano/red-armor.png')
const iceLeft = require('../../../images/volcano/ice-left.png')
const iceRight = require('../../../images/volcano/ice-right.png')
const chest = require('../../../images/volcano/chest.png')
const exit = require('../../../images/volcano/exit.png')
const caveUpperLeft = require('../../../images/volcano/cave-upper-left.png')
const caveUpperMiddle = require('../../../images/volcano/cave-upper-middle.png')
const caveUpperRight = require('../../../images/volcano/cave-upper-right.png')
const caveLowerLeft = require('../../../images/volcano/cave-lower-left.png')
const caveLowerMiddle = require('../../../images/volcano/cave-lower-middle.png')
const caveLowerRight = require('../../../images/volcano/cave-lower-right.png')
const fallTree = require('../../../images/volcano/fall-tree.png')
const volcanoLowerLeft = require('../../../images/volcano/volcano-lower-left.png')
const volcanoLowerRight = require('../../../images/volcano/volcano-lower-right.png')
const volcanoUpperLeft = require('../../../images/volcano/volcano-upper-left.png')
const volcanoUpperRight = require('../../../images/volcano/volcano-upper-right.png')

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
            return caveUpperLeft
        case 12: 
            return caveUpperMiddle
        case 13:
            return caveUpperRight
        case 14:
            return caveLowerLeft
        case 15:
            return caveLowerMiddle
        case 16:
            return caveLowerRight
        case 17:
            return rock
        case 18: 
            return tree
        case 19:
            return rockSnow
        case 20:
            return volcano
        case 21:
            return iceLeft
        case 22:
            return iceRight
        case 23:
            return knight1
        case 24:
            return knight2
        case 25:
            return fallTree
        case 26:
            return knight4
        case 27:
            return redArmor
        case 28:
            return castleFloor
        case 29:
            return throne
        case 30:
            return door
        case 31:
            return wall
        case 32:
            return lavaflow
        case 33:
            return lavaflow
        case 34:
            return bridge
        case 35:
            return pumpkinsLeft
        case 36: 
            return pumpkinsMiddle
        case 37:
            return pumpkinsRight
        case 38:
            return book
        case 39:
            return exit
        case 40:
            return volcanoUpperLeft
        case 41:
            return volcanoUpperRight
        case 42:
            return volcanoLowerLeft
        case 43:
            return volcanoLowerRight
    }
}

function MapTile(props) {
    return <div 
    style={{
        display: 'inline-flex',
        backgroundColor: 'sienna',
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

function VolcanoMap(props) {
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
        tiles: state.volcanoMap.tiles,
        volcano: state.volcanoMap.volcano,
        ...state.volcanoMap
    }
}

export default connect(mapStateToProps)(VolcanoMap)