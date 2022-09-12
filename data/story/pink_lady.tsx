export function load() {
  return `
    const dispatchEvent = (lop) => {
      this.tank.current.dispatchEvent(
        new CustomEvent(lop.event, {
          detail: lop.detail
        })
      );
    };

    //--------------------------------------------------------------------------------
    // sails
    //--------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------
    // rels
    //--------------------------------------------------------------------------------

    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_a',
        contentsForFrontInner: '漲: {m: "HR", l: 慶 }',
        top: 110,
        left: 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: '<font color="blue">慶</font>: <br />逆転; sudden death;',
        top: 100,
        left: 200
      }
    })
  
  `;
}
