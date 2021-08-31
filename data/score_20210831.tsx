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
          [{ identifier: 'graph', contentsForFrontInner: 'graph', top: 0, left: 0 }, { identifier: 'renderer', contentsForFrontInner: '<span style="color: rgba(0, 0, 0, 0.5)">renderer</span>', top: 0, left: 100 }],
          [{ identifier: 'defense', contentsForFrontInner: 'defense', top: 0, left: 250 }],
          [{ identifier: 'd', contentsForFrontInner: 'defense', top: 0, left: 500 }],
        ]
      }
    })
  );
`;
}
