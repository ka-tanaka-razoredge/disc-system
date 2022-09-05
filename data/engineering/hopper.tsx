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
    // rels
    //--------------------------------------------------------------------------------

    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: "ooHopper",
        top: 0,
        left: 10
      }
    })
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_a',
        contentsForFrontInner: "bloom",
        top: 100,
        left: 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: ">>= hold",
        top: 20,
        left: 200
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_b',
        contentsForFrontInner: ">>= release",
        top: 30,
        left: 200
      }
    })
  `;
}
