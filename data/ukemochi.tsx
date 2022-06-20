export function load() {
  return `

    const dispatchEvent = (lop) => {
      this.tank.current.dispatchEvent(
        new CustomEvent(lop.event, {
          detail: lop.detail
        })
      );
    };

    const audience = 100;
    const bloom = 210;
    const som = 320;
    const ukemochi = 430;
    const detonator = 540;
    const dcoml = 650;
    const oilField = 800;
    const rig = 900;

    //--------------------------------------------------------------------------------
    // sails
    //--------------------------------------------------------------------------------
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'sail_rig',
          type: 'Sail',
          contentsForFrontInner: 'ukemochi',
          top: 0,
          left: 10,
          width: 100,
          height: 75,
        }
      })
    );
    
    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'tc_0_a',
          contentsForFrontInner: "向聴数: >= 1",
          top: 10,
          left: 10
        }
      })
    );

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: "向聴数: 0",
        top: 100,
        left: 10
      }
    })

    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'tc_0_b',
          contentsForFrontInner: ">>= rig_1",
          top: 10,
          left: bloom
        }
      })
    );
  
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: ">>= rig_2 // throw({what: applier})",
        top: 100,
        left: bloom
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
