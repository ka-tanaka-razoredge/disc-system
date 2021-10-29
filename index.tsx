import React, { Component } from 'react';
import { render } from 'react-dom';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import Tank from './Tank';
import './style.css';
import './razoredge.css';

import { load } from './data/first_story/first_story';
//import { load } from './data/score_20210831';
//import { load, loadDemo } from './demo';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
    this.counter = 0;
    this.timer = null;
    this.tank = React.createRef();
    this.magazine = [];
  }

  componentDidMount() {
    this.timer = setInterval(this.doRoutine, 1000);
  }

  doRoutine = function () {
    if (this.counter === Number.MAX_SAFE_INTEGER) this.counter = 0;
    switch (this.counter) {
      case 1:
        eval(load());
        break;
      case 2:
        // eval(loadDemo());
        break;
      default:
        if (1 <= this.magazine.length) {
          let simultaneous = this.magazine.shift();
          simultaneous.map((doIt) => {
            doIt();
          });
        }
        break;
    }
    this.counter++;
  }.bind(this);

  render() {
    return (
      <div style={{}}>
        <Tank ref={this.tank} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
