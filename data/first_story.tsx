export function load() {
  return `
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'tc_0_a',
        contentsForFrontInner: 'status: tonic',
        top: 0,
        left: 100
      }
    })
  );
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: 'status: subdominant',
        top: 50,
        left: 100
      }
    })
  );
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'tc_2_a',
        contentsForFrontInner: 'status: dominant',
        top: 300,
        left: 100
      }
    })
  );

  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 51 }
      }));
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 52 }
      }));
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 53 }
      }));
    }
  ]);
`;
}
