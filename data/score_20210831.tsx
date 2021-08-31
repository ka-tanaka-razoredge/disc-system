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
          [{ identifier: 'graph', contentsForFrontInner: 'A', top: 0, left: 0 }, { identifier: 'renderer', contentsForFrontInner: 'B', top: 0, left: 100 }],
          [{ identifier: 'defense', contentsForFrontInner: 'defense', top: 0, left: 250 }],
          [{ identifier: 'd', contentsForFrontInner: 'defense', top: 0, left: 500 }],
        ]
      }
    })
  );
`;
}
