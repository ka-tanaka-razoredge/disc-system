export function load() {
  return `
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        type: 'Magazine',
        identifier: 'tc_0_alpha',
        contentsForFrontInner: 'spine',
        top: 0,
        left: 0,
        height: 300,
        width: 300,
        discs: [
          [{ identifier: 'offense', contentsForFrontInner: 'offense', top: 0, left: 0 }],
          [{ identifier: 'defense', contentsForFrontInner: 'defense', top: 0, left: 100 }],
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
