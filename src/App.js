import React from 'react';
import {Config} from './constants/config';
import Fonts from './components/Fonts';
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
      <div
        className="l-container c-loadingBar"
      >
        <Fonts/>
        <div
          className="c-loadingBar__loadingMessage"
        >
          {Config.loadingMessage}
        </div>
        <div
          className="c-loadingBar__currentProgress"
        >
          <div
            className="c-loadingBar__currentTitle"
          >
            Current Progress
          </div>
          <div
            className="c-loadingBar__bar"
          >
            <div
              className="c-loadingBar__percentComplete"
            >
              {this.props.percentComplete}%
            </div>
            <div
              className="c-loadingBar__barComplete"
            >
              <svg>
                <g 
                  transform="translate(0,0)"
                >
                  <rect 
                    x="0" 
                    y="0" 
                    rx="1rem"
                    ry="1rem"
                    height="100%" 
                    style={{
                      'fillOpacity': 0.75,
                      'width':`${this.props.percentComplete}%`
                    }}
                  >
                  </rect>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div 
          className="c-loadingBar__remaining"
        >
          <div
            className="c-loadingBar__remainingTitle"
          >
            Estimated Time Remaining
          </div>
          <div 
            className="c-loadingBar__remainingValue"
          >
            {this.props.totalRemaining}
          </div>
        </div>
      </div>
    );
  }
}

function MapStateToProps (state) {
  return {
    percentComplete: state.percentComplete,
    totalRemaining: state.totalRemaining
  }
}

export default connect(MapStateToProps,{update_timer})(App);
