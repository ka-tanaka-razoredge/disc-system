import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import Disc from './Disc';
import Magazine from './Magazine';
import MagazineB from './Magazine_b';
import Sail from './Sail';

export default React.forwardRef((props: { identifier: string }, ref) => {
  //const base = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const [discs, setDiscs] = useState([]);
  const discsRef = useRef(discs);
  const loRef = [];
  const setDiscEx = (discs) => {
    discsRef.current = discs;
    setDiscs(discs);
  };

  // useImperativeHandle(ref, () => ({}));

  useEffect(() => {
    if (initialized === false) {
      // TODO: removeEventListener
      ref.current.addEventListener('pushDisc', (e) => {
        pushDisc(e.detail);
      });

      ref.current.addEventListener('forwardCurrentIndex', (e) => {
        forwardCurrentIndex(e.detail);
      });

      ref.current.addEventListener('moveY', (e) => {
        return moveY(e.detail);
      });

      setInitialized(false);
    }
    //    ref.current.style.tranform = 'rotateY(45deg) rotateX(45deg)';
  }, []);

  const pushDisc = (lop = { identifier }) => {
    console.log('---- pushDisc ----');
    console.log(discsRef.current);
    setDiscEx(discsRef.current.concat(lop));
    console.log(discs);
    setTimeout(() => {
      document.getElementById(lop.identifier).dispatchEvent(
        new CustomEvent('moveX', {
          detail: {
            value: lop.left,
          },
        })
      );
      document.getElementById(lop.identifier).dispatchEvent(
        new CustomEvent('moveY', {
          detail: {
            value: lop.top,
          },
        })
      );
    }, 1);
  };

  const moveY = (lop) => {
    console.log('---- moveY ----');
    const disc = document.getElementById(lop.identifier);
    //    const disc = giveDisc({ identifier: lop.identifier });
    disc.dispatchEvent(
      new CustomEvent('moveY', {
        detail: {
          value: lop.value,
        },
      })
    );
  };

  const giveDisc = (lop) => {
    console.log('---- giveDisc ----');
    return discsRef.current.find((disc) => disc.identifier === lop.identifier);
  };

  const forwardCurrentIndex = (lop) => {
    loRef[0].current.forwardCurrentIndex(lop.value);
  };

  for (let i = 0; i <= 100 - 1; i++) {
    loRef.push(useRef(null));
  }

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
        left: 50 + 'px',
        transform: 'rotateY(40deg) rotateX(45deg)',
      }}
    >
      {discsRef.current.map((disc: { identifier }, index) => {
        if (discsRef.current.indexOf(disc.identifier) == -1) {
          if ('type' in disc === false || disc.type === 'Disc') {
            return (
              <Disc
                identifier={disc.identifier}
                contentsForFrontInner={disc.contentsForFrontInner}
                title={disc.title}
              />
            );
          } else if (disc.type === 'Sail') {
            return (
              <Sail
                identifier={disc.identifier}
                contentsForFrontInner={disc.contentsForFrontInner}
                title={disc.title}
                top={disc.top}
                left={disc.left}
                height={disc.height}
                width={disc.width}
              />
            );
          } else {
            return (
              <Magazine
                ref={loRef[index]}
                identifier={disc.identifier}
                contentsForFrontInner={disc.contentsForFrontInner}
                contentsForBottomInner={disc.contentsForBottomInner}
                discs={disc.discs}
                top={disc.top}
                left={disc.left}
                height={disc.height}
                width={disc.width}
              />
            );
          }
        }
      })}
    </div>
  );
});
