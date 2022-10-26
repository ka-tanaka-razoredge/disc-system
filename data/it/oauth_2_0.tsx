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
          contentsForFrontInner: "<font color='blue'>儚</font>: Twitter",
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
          contentsForFrontInner: "<font color='blue'>佃</font>: Facebook",
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
          contentsForFrontInner: "<font color='blue'>代</font>: 認可サーバー powered by Facebook",
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
        contentsForFrontInner: 'Twitterの投稿をFacebookに横流ししたい',
        top: 200,
        left: alpha
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'condition-1',
        contentsForFrontInner: 'OAuthをsupport',
        top: 0,
        left: gamma
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'inner-game-1-aql',
        contentsForFrontInner: 'Facebookをsupport',
        top: 100,
        left: beta
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'endUser_game_5',
        contentsForFrontInner: '同じWeb browserで[儚, 佃]にlogin',
        top: 300,
        left: alpha
      }
    })

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'dcosom-Aql',
        contentsForFrontInner: 'Twitterへ投稿',
        top: 400,
        left: alpha
      }
    })
  
    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'game',
        contentsForFrontInner: '儚が代へアクセスすると代は<span title="「Facebookにも投稿しますか?」的な">認可ダイアログ</span>を表示する',
        top: 310,
        left: 600
      }
    })  

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'code-',
        contentsForFrontInner: '侍が認可ダイアログにYesと答える',
        top: 400,
        left: alpha
      }
    })  

    dispatchEvent({
      event: 'pushDisc',
      detail: {
        identifier: 'dialog-del',
        contentsForFrontInner: '代は儚へ制御を返す',
        top: 400,
        left: 600
      }
    })  

  `;
}
