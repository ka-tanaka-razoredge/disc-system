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
          contentsForFrontInner: '下人',
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
          contentsForFrontInner: '老婆',
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
          contentsForFrontInner: 'dcosom',
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
          contentsForFrontInner: 'river',
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
        contentsForFrontInner: 'tow&lt;ego忌避, ego礼賛&gt;',
        top: 10,
        left: alpha
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'inner-game-1-aql',
        contentsForFrontInner: 'settled',
        top: 400,
        left: alpha + 10
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'tc_1_b',
        contentsForFrontInner: '追い剥ぎ',
        top: 100,
        left: delta
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'dcosom',
        contentsForFrontInner: 'closerange&lt;下人, 老婆&gt;',
        top: 20,
        left: gamma
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'dcosom-Aql',
        contentsForFrontInner: 'closerange&lt;下人, 老婆&gt; distructed',
        top: 400,
        left: gamma
      }
    })
  
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'game',
        contentsForFrontInner: 'Conversation',
        top: 200,
        left: delta
      }
    })  

  `;
}
