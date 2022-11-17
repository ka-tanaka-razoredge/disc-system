export function load() {
  return `
    const dispatchEvent = (lop) => {
      this.tank.current.dispatchEvent(
        new CustomEvent(lop.event, {
          detail: lop.detail
        })
      );
    };
    const alpha = 110;
    const beta = 220;
    const gamma = 330;
    const delta = 440;
    const epsilon = 550;

    //--------------------------------------------------------------------------------
    // sails
    //--------------------------------------------------------------------------------
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'sail_audience',
          type: 'Sail',
          contentsForFrontInner: "<font color='blue'>侍</font>: endUser",
          top: 0,
          left: alpha,
          width: 100,
          height: 75,
        }
      })
    );

    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'sail_blue',
          type: 'Sail',
          contentsForFrontInner: "<font color='blue'>儚</font>: 新規申込",
          top: 0,
          left: beta,
          width: 100,
          height: 75,
        }
      })
    );

    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'sail_dcosom',
          type: 'Sail',
          contentsForFrontInner: "<font color='blue'>佃</font>: validationErrors",
          top: 0,
          left: gamma,
          width: 100,
          height: 75,
        }
      })
    );

    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'sail_river',
          type: 'Sail',
          contentsForFrontInner: "<font color='blue'>代</font>: TextArea",
          top: 0,
          left: delta,
          width: 100,
          height: 75,
        }
      })
    );

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
        contentsForFrontInner: 'has {bodyJa}',
        top: 10,
        left: 330
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'textArea_el_1',
        contentsForFrontInner: 'onInput => update(this.isValid)',
        top: 10,
        left: 460
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'agt_game_1',
        contentsForFrontInner: '',
        top: 10,
        left: 100
      }
    })


  `;
}
