import React, { useState, useRef, useEffect } from 'react';
import Disc from './Disc';

export default React.forwardRef((props: { identifier: string }, ref) => {
  //const base = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const [discs, setDiscs] = useState([]);
  const discsRef = useRef(discs);
  const setDiscEx = discs => {
    discsRef.current = discs;
    setDiscs(discs);
  };

  useEffect(() => {
    if (initialized === false) {
      // TODO: removeEventListener
      ref.current.addEventListener('pushDisc', e => {
        pushDisc(e.detail);
      });
      setInitialized(false);
    }
    //    ref.current.style.tranform = 'rotateY(45deg) rotateX(45deg)';
  });

  const pushDisc = (lop = { itentifier }) => {
    setDiscEx(discs.concat(lop));
    //console.log(discs.length);
    //console.log(discs);
    //console.log(lop);
  };
  //  return <div ref={ref} style={{ 'tranform-style': 'preserved-3d' }} />;
  return (
    <div
      ref={ref}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800 + 'px',
        border: '1px solid red',
        width: 800 + 'px',
        height: 450 + 'px',
        position: 'relative',
        transform: 'rotateY(40deg) rotateX(45deg)'
      }}
    >
      {discs.map((disc: { identifier }, index) => {
        if (discs.indexOf(disc.identifier) == -1) {
          return <Disc identifier={disc.identifier} />;
        }
      })}
    </div>
  );
});
