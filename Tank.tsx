import React, { useState, useRef, useEffect } from 'react';
export default React.forwardRef((props, ref) => {
  //const base = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const [discs, setDiscs] = useState([]);
  const discsRef = useRef(discs);

  useEffect(() => {
    if (initialized === false) {
      // TODO: removeEventListener
      ref.current.addEventListener('pushDisc', e => {
        pushDisc(e.detail);
      });
      setInitialized(false);
    }
  });

  const pushDisc = (lop = { itentifier }) => {
    console.log(lop);
  };

  return <div ref={ref}>tank</div>;
});
