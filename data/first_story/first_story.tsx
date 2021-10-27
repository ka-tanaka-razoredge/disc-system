export function load() {
  return `
  
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
        identifier: 'sail_audience',
        type: 'Sail',
        contentsForFrontInner: 'au',
        top: 0,
        left: audience,
        width: 100,
        height: 75,
      }
    })
  );
  
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_bloom',
        type: 'Sail',
        contentsForFrontInner: 'bloom',
        top: 0,
        left: bloom,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_som',
        type: 'Sail',
        contentsForFrontInner: 'pipelines',
        top: 0,
        left: som,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_ukemochi',
        type: 'Sail',
        contentsForFrontInner: 'ukemochi',
        top: 0,
        left: ukemochi,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_detonator',
        type: 'Sail',
        contentsForFrontInner: 'provider',
        top: 0,
        left: detonator,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_dcoml',
        type: 'Sail',
        contentsForFrontInner: 'dcoml',
        top: 0,
        left: dcoml,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_oilField',
        type: 'Sail',
        contentsForFrontInner: 'oilField',
        top: 0,
        left: oilField,
        width: 100,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_rig',
        type: 'Sail',
        contentsForFrontInner: 'rig',
        top: 0,
        left: rig,
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
        contentsForFrontInner: 'status: tonic',
        top: 0,
        left: bloom
      }
    })
  );
/*
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'dcomal_0_a',
        contentsForFrontInner: 'null',
        top: 10,
        left: dcoml
      }
    })
  );
*/
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'tc_1_a',
        contentsForFrontInner: 'status: subdominant',
        top: 50,
        left: bloom
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'tc_2_a',
        contentsForFrontInner: 'status: dominant',
        top: 300,
        left: bloom
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'uke_som_2_a',
        contentsForFrontInner: 'ukemochi ON provider',
        top: 300,
        left: som
      }
    })
  );

  //--------------------------------------------------------------------------------
  // discs.ukemochi
  //--------------------------------------------------------------------------------
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'uk_0_a',
        contentsForFrontInner: 'status: tonic',
        top: 0,
        left: ukemochi
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'uk_0200_a',
        contentsForFrontInner: 'status: dominant',
        top: 250,
        left: ukemochi
      }
    })
  );

  //--------------------------------------------------------------------------------
  // discs.provider
  //--------------------------------------------------------------------------------
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'pro_0100',
        contentsForFrontInner: 'get a provider',
        top: 300,
        left: detonator
      }
    })
  );

  //--------------------------------------------------------------------------------
  // lu<Disc> dcoml
  //--------------------------------------------------------------------------------  
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'dcomal_1_a',
        contentsForFrontInner: '<span style="color: red">濺</span>',
        top: 50,
        left: dcoml
      }
    })
  );

  this.tank.current.dispatchEvent(new CustomEvent('pushDisc', {
    detail: {
      identifier: 'dcoml_2_a',
      contentsForFrontInner: '<span style="color: green;" class="tooltip">漲<span class="tooltiptext tooltip-bottom">漲 could be 一向聴</span></span><br /> <span style="color: red;">濺</span>',
      top: 300,
      left: dcoml
    }
  }));

  //--------------------------------------------------------------------------------
  // lu<Cube>
  //--------------------------------------------------------------------------------
  for (let i = 0; i <= 25 - 1; i++) {
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'au_' + i + '_a',
          contentsForFrontInner: 'status: tonic',
          top: 10 * i,
          left: audience + 1,
          type: 'Cube',
          z: 50
        }
      })
    );
  }

  let loZ = [];
  loZ = [60, 40, 10, 60, 100];
  for (let i = 0; i <= 5 - 1; i++) {
    this.tank.current.dispatchEvent(
      new CustomEvent('pushDisc', {
        detail: {
          identifier: 'au_' + (25 + i) + '_a',
          contentsForFrontInner: 'status: tonic',
          top: 10 * (i + 25),
          left: audience,
          type: 'Cube',
          z: loZ[i]
        }
      })
    );
  }




/*
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 51 }
      }));
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 52 }
      }));
    }
  ]);
*/
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(
        new CustomEvent('pushDisc', {
          detail: {
            identifier: 'hand_sex_a',
            contentsForFrontInner: '逆転勝利',
            top: 350,
            left: 1000,
            height: 100,
            type: 'MetalTape',
          }
        })
      );
    }
  ]);

`;
}
