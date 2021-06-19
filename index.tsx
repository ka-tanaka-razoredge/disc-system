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
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              type: 'Magazine',
              identifier: 'tc_0_alpha',
              contentsForFrontInner: `spine`,
              top: 100,
              left: 500,
              height: 500,
              discs: [
                [{ indentifier: 'a_alpha_on_', contentsForFrontInner: `Au` }]
              ]
            }
          })
        );
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              identifier: 'tc_0_alpha',
              contentsForFrontInner: ``,
              top: 100,
              left: 500
            }
          })
        );
        /*
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              identifier: 'tc_0_beta',
              contentsForFrontInner: ``,
              top: 100,
              left: 600
            }
          })
        );
*/
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
