export function load() {
  return `
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        type: 'Magazine',
        identifier: 'tc_0_alpha',
        contentsForFrontInner: 'spine',
        top: 100,
        left: 500,
        height: 300,
        width: 300,
        discs: [
          [{ identifier: 'Au', contentsForFrontInner: 'Au', top: 0 }],
          [{ identifier: 'Pt', contentsForFrontInner: 'Pt', top: 200 }],
          [{ identifier: 'Cu', contentsForFrontInner: 'Cu', top: 100 }],
          [
            {
              type: 'MetalTape',
              identifier: '『Au, Cu, Pt』',
              contentsForFrontInner: "<font color='green'>『Au, Cu, Pt』</font>",
              top: 0,
              left: 110,
              height: 210
            }
          ]
        ]
      }
    })
  );
`;
}

export function loadDemo() {
  return `
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('forwardCurrentIndex', {
          detail: {
            value: 0
          }
        })
      );
    }
  ]);
  for (let i = 0; i <= 1 - 1; i++) this.magazine.push([]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('forwardCurrentIndex', {
          detail: {
            value: 15
          }
        })
      );
    }
  ]);
  for (let i = 0; i <= 1 - 1; i++) this.magazine.push([]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('forwardCurrentIndex', {
          detail: {
            value: 20
          }
        })
      );
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('forwardCurrentIndex', {
          detail: {
            value: 25
          }
        })
      );
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('forwardCurrentIndex', {
          detail: {
            value: 30
          }
        })
      );
    }
  ]);
`;
}
