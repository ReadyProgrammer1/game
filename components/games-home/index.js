import React, { Component } from 'react'
import store from '../../config/store'
import './styles.css'
import { forest, dragons, paradise, castle, volcano, football, soccer, csharpLogo, gitLogo, jsonLogo, 
  } from '../../images/home'

class Games extends Component {

  render() {

    function renderGameWorld(game) {
      store.dispatch({
        type: 'PLAY_GAME',
        payload: {
            game: game
        }
      })
    }

    return (
      <div className='color-container'>
        <div className='color-container'>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '80px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-4'>
            <img className='color-image' src={paradise}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-4'>
            <img className='color-image' src={forest}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img onClick={() => renderGameWorld('Volcano')} className='color-image' src={volcano}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-3'>
            <img onClick={() => renderGameWorld('Castle')} className='color-image' src={castle}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={dragons}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-3'>
            <img className='color-image' src={gitLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
        </div>
        <div className='color-container' style={{float: 'center'}}>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '50px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={football}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-4'>
            <img className='color-image' src={soccer}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={csharpLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={jsonLogo}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Games
