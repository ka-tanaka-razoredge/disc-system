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
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_3_aa',
        contentsForFrontInner: "褐 ON ooVb",
        top: 30,
        left: 500
      }
    })

    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: "ooVb",
        top: 0,
        left: 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: ">>= encase(&#123;case: 褐&#125;)",
        top: 20,
        left: 200
      }
    })
  `;
}
