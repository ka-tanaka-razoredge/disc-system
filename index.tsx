import React, { Component } from 'react';
import { render } from 'react-dom';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import Tank from './Tank';
import './style.css';

//import { load, loadDemo } from './demo';

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
    this.magazine = [];
  }

  componentDidMount() {
    this.timer = setInterval(this.doRoutine, 1000);
  }

  doRoutine = function() {
    if (this.counter === Number.MAX_SAFE_INTEGER) this.counter = 0;
    switch (this.counter) {
      case 1:
        /*      
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
*/
        // eval(load());
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              type: 'Magazine',
              identifier: 'tc_0_alpha',
              contentsForFrontInner: `spine`,
              top: 0,
              left: 0,
              height: 300,
              width: 500,
              discs: [
                [
                  {
                    identifier: 'Au',
                    contentsForBottomInner: '燈',
                    contentsForFrontInner: '[漲, 濺] get registered onto dcoml',
                    top: 0
                  }
                ],
                [
                  {
                    identifier: 'Pt',
                    contentsForFrontInner: 'dcoml < m ',
                    top: 100,
                    left: 50
                  }
                ],
                [
                  {
                    type: 'Magazine',
                    indentifier: 'a_alpha_on',
                    contentsForFrontInner: `Au`,
                    top: 200,
                    left: 200,
                    height: 100,
                    width: 200,
                    discs: [
                      [
                        {
                          identifier: 'Cu',
                          contentsForBottomInner: '蓬',
                          contentsForFrontInner: `dcoml < m capturing`,
                          top: 0
                        }
                      ],
                      [
                        {
                          identifier: 'Cu',
                          contentsForBottomInner: '蔦',
                          contentsForFrontInner: `dcoml < m target`,
                          top: 10
                        }
                      ],
                      [
                        {
                          identifier: 'Cu',
                          contentsForBottomInner: '蕩',
                          contentsForFrontInner: `dcoml < m bubbling`,
                          top: 90
                        }
                      ]
                    ]
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
        break;
      case 2:
        // eval(loadDemo());
        break;
      default:
        if (1 <= this.magazine.length) {
          let simultaneous = this.magazine.shift();
          simultaneous.map(doIt => {
            doIt();
          });
        }
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
