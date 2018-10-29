import React, { Component } from 'react'
import { connect } from 'react-redux'
import Games from '../src/components/games-home'
import CastleWorld from '../src/components/castle/world'
import VolcanoWorld from '../src/components/volcano/world'

class App extends Component {
  render() {
    let app

    function setApp(display) {
      switch(display) {
        case 'Home': 
          return app = <Games />
        case 'Castle':
          return app = <CastleWorld />
        case 'Volcano':
          return app = <VolcanoWorld />
        default: return app = <Games />
      }
    }
    
    return (
      <div className="home">
        <div className='home-element'>
          <h3 style={{color: 'white'}}>{this.props.home.game}</h3>
        </div>
        <div className='home-element'>
          {setApp(this.props.home.game)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

export default connect(mapStateToProps)(App)
