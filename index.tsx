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
              height: 300,
              width: 300,
              discs: [
                [{ identifier: 'Au', contentsForFrontInner: `Au`, top: 0 }],
                [{ identifier: 'Pt', contentsForFrontInner: `Pt`, top: 200 }],
                [{ identifier: 'Cu', contentsForFrontInner: `Cu`, top: 100 }],
                [
                  {
                    type: 'MetalTape',
                    identifier: '『Au, Cu, Pt』',
                    contentsForFrontInner: `<font color='green'>『Au, Cu, Pt』</font>`,
                    top: 0,
                    left: 110,
                    height: 210
                  }
                ]
              ]
            }
          })
        );
        /*
        // ooMagazine_2 on ooMagazine_1
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              type: 'Magazine',
              identifier: 'tc_0_',
              contentsForFrontInner: `spine`,
              top: 100,
              left: 200,
              height: 500,
              width: 100,
              discs: [
                [
                  {
                    type: 'Magazine',
                    indentifier: 'a_alpha_on',
                    contentsForFrontInner: `Au`,
                    top: 10,
                    height: 100,
                    width: 100,
                    discs: [
                      [
                        {
                          identifier: 'Cu',
                          contentsForFrontInner: `Cu`,
                          top: 0
                        }
                      ]
                    ]
                  }
                ],
                [{ identifier: 'Cu', contentsForFrontInner: `Cu`, top: 100 }]
              ]
            }
          })
        );
*/
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

        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              identifier: 'tc_0_a',
              contentsForFrontInner: ``,
              top: 100,
              left: 300
            }
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
