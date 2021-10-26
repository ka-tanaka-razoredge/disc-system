export function load() {
  return `

  const bloom = 100;
  const som = 200;
  const ukemochi = 300;
  const detonator = 400;
  const dcoml = 500;

  //--------------------------------------------------------------------------------
  // sails
  //--------------------------------------------------------------------------------
  
  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_bloom',
        type: 'Sail',
        contentsForFrontInner: 'bloom',
        top: 0,
        left: bloom,
        width: som,
        height: 75,
      }
    })
  );

  this.tank.current.dispatchEvent(
    new CustomEvent('pushDisc', {
      detail: {
        identifier: 'sail_som',
        type: 'Sail',
        contentsForFrontInner: 'som',
        top: 0,
        left: som,
        width: som,
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
        width: 200,
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
        left: dcoml + 100,
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
        identifier: 'dcomal_1_a',
        contentsForFrontInner: '<span style="color: red">濺</span>',
        top: 50,
        left: dcoml
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
        contentsForFrontInner: 'ukemochi ON detonator',
        top: 300,
        left: som
      }
    })
  );

  

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
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('moveY', {
        detail: { identifier: 'tc_1_a', value: 53 }
      }));
    }
  ]);
  this.magazine.push([
    () => {
      this.tank.current.dispatchEvent(new CustomEvent('pushDisc', {
        detail: {
          identifier: 'dcoml_2_a',
          contentsForFrontInner: '<span style="color: green;" class="tooltip">漲<span class="tooltiptext tooltip-bottom">漲 could be 一向聴</span></span><br /> <span style="color: red;">濺</span>',
          top: 300,
          left: dcoml
        }
      }));
    }
  ]);
`;
}
