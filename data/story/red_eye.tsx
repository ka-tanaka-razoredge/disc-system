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
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'tc_1_a',
          type: 'Sail',
          contentsForFrontInner: 'ooAbstractBud',
          top: 0,
          left: 0,
          width: 100,
          height: 75,
        }
      })
    );
  

    //--------------------------------------------------------------------------------
    // rels
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_x',
        contentsForFrontInner: "BurstOnFly ON ooHopper",
        top: 250,
        left: 600
      }
    })

    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_a',
        contentsForFrontInner: "bloom",
        top: 400,
        left: 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: 'ooHopper: <span color="blue">仁</span>',
        top: 20,
        left: 200
      }
    })
  
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_b',
        contentsForFrontInner: 'beginCountDownToBloomOnRelease: <span color="blue">池</span>',
        top: 100,
        left: 200
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_c',
        contentsForFrontInner: 'ooConfetti: <span color="blue">伎</span>',
        top: 200,
        left: 300
      }
    })


    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_agt',
        contentsForFrontInner: "仁 >>= hold()",
        top: 30,
        left: 500
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_2_agt',
        contentsForFrontInner: "[仁, 伎] >>= mesh()",
        top: 220,
        left: 500
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_3_agt',
        contentsForFrontInner: '池 < "release"',
        top: 300,
        left: 500
      }
    })
  `;
}
