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
    // discs
    //--------------------------------------------------------------------------------
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: "向聴数: 0",
        top: 100,
        left: 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: ">>= rig_2 // throw({what: applier})",
        top: 100,
        left: 10
      }
    })

    //--------------------------------------------------------------------------------
    // 
    //--------------------------------------------------------------------------------
/*    
    this.magazine.push([
      () => {
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              identifier: 'hand_sex_a',
              contentsForFrontInner: 'flighted',
              top: 100,
              left: 300,
              height: 100,
              type: 'MetalTape',
            }
          })
        );
      }
    ]);
*/
  `;
}
