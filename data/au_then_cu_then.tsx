export function loadFirstFrame() {
  return `
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        type: 'Magazine',
        identifier: 'tc_0_alpha',
        contentsForFrontInner: `spine`,
        top: 0,
        left: 0,
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
`;
}
