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
  
    //--------------------------------------------------------------------------------
    // discs
    //--------------------------------------------------------------------------------

    //--------------------------------------------------------------------------------
    // 
    //--------------------------------------------------------------------------------
    this.magazine.push([
      () => {
        this.tank.current.dispatchEvent(
          new CustomEvent('pushDisc', {
            detail: {
              identifier: 'hand_sex_a',
              contentsForFrontInner: 'turnable from !turnable',
              top: 100,
              left: 10,
              height: 100,
              type: 'MetalTape',
            }
          })
        );
      }
    ]);
  `;
}
