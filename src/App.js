import React from 'react';
import {Config} from './constants/config';
import Fonts from './components/Fonts';
import './App.css';
import {update_timer} from './actions/index';
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.update_timer();
    setInterval(this.props.update_timer,1000);
  }
  componentWillUnmount(){
    clearInterval(this.props.update_timer,1000);
  }
  render(){
    return (
      <div>
        <Fonts/>
        <h1>
          {Config.loadingMessage}
        </h1>
        <div id="currentProgress">
          <h2>
            Current Progress
          </h2>
          <div id="rectLoad">
            <p id="loadNum">
              {this.props.percentComplete}%
            </p>
            <svg width="50vw" height="6vh">
              <g transform="translate(0,0)">
                <rect 
                  className="loadRect" 
                  x="0vw" 
                  y="0" 
                  height="6vh" 
                  style={{'fillOpacity': 0.75,'width':this.props.percentCompleteVW}}
                >
                </rect>
                <rect 
                  className="loadRect" 
                  x={this.props.percentCompleteVW} 
                  y="0" 
                  height="6vh" 
                  style={{'fillOpacity': 0.25,'width':this.props.percentRemainVW}}
                >
                </rect>
              </g>
            </svg>
          </div>
        </div>
        <div id="timeRemaining">
          <h2>
            Estimated Time Remaining
          </h2>
          <p id="timeRemainingValue">
          {this.props.totalRemaining}
          </p>
        </div>
      </div>
    );
  }
}

function MapStateToProps (state) {
  return {
    percentCompleteVW: state.percentCompleteVW,
    percentRemainVW: state.percentRemainVW,
    percentComplete: state.percentComplete,
    totalRemaining: state.totalRemaining
  }
}

export default connect(MapStateToProps,{update_timer})(App);
