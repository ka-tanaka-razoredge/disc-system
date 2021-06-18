import React, { Component } from 'react';
import { render } from 'react-dom';
import Tank from './Tank';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.counter = 0;
    this.timer = null;
    this.tank = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(this.doRoutine, 1000);
  }

  doRoutine = function() {
    if (this.counter === Number.MAX_SAFE_INTEGER) this.counter = 0;
    switch (this.counter) {
      case 1:
        console.log(this.base);
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: { identifier: 'doRoutine' }
          })
        );
        break;
    }
    this.counter++;
  }.bind(this);

  render() {
    return (
      <div>
        <Tank ref={this.tank} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
