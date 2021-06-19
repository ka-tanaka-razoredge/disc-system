import React, { useRef, useEffect, useState } from 'react';
import Disc from './Disc';
import MetalTape from './MetalTape';
import Magazine from './Magazine';

export default (props: { identifier: string }, ref) => {
  const base = useRef(null);
  const joint = useRef(null);

  const [discs, setDiscs] = useState([]);
  let { tense, setTense } = useState(false);
  let t = false;

  useEffect(() => {
    base.current.addEventListener('moveX', e => {
      moveX(e.detail.value);
    });
    base.current.addEventListener('moveY', e => {
      moveY(e.detail.value);
    });

    base.current.addEventListener('dblclick', function(e) {
      if (t === false) {
        rotateX(90);
        t = true;
      } else {
        rotateX(0);
        t = false;
      }
    });

    joint.current.addEventListener('rotateX', e => {
      rotateX(e.detail.value);
    });
  });

  const moveX = value => {
    base.current.style.left = value + 'px';
  };
  const moveY = value => {
    base.current.style.top = value + 'px';
  };

  const rotateX = value => {
    joint.current.style.transform = 'rotateX(' + value + 'deg)';
  };

  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        transformStyle: 'preserve-3d',
        border: '1px solid blue',
        height: 10 + 'px',
        width: 100 + 'px',
        top: 0 + 'px',
        left: 0 + 'px',
        position: 'absolute'
      }}
    >
      <div
        ref={joint}
        style={{
          transformStyle: 'preserve-3d',
          border: 'solid 1px red',
          position: 'absolute',
          top: 0 + 'px',
          height: 0 + 'px',
          transform: 'rotateX(0deg)'
        }}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            border: 'solid 1px green',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            width: props.width + 'px',
            height: props.height + 'px',
            top: 0 + 'px',
            left: 0 + 'px',
            transform: ''
          }}
        >
          {props.discs.map((line, index) => {
            return line.map((disc, index) => {
              if ('type' in disc === false || disc.type === 'Disc') {
                return (
                  <Disc
                    identifier={disc.identifier}
                    contentsForFrontInner={disc.contentsForFrontInner}
                    top={disc.top}
                  />
                );
              } else if (disc.type === 'Magazine') {
                return (
                  <Magazine
                    identifier={disc.identifier}
                    contentsForFrontInner={disc.contentsForFrontInner}
                    discs={disc.discs}
                    height={disc.height}
                    width={disc.width}
                  />
                );
              } else if (disc.type === 'MetalTape') {
                return (
                  <MetalTape
                    identifier={disc.identifier}
                    contentsForFrontInner={disc.contentsForFrontInner}
                    top={disc.top}
                    left={disc.left}
                    height={disc.height}
                  />
                );
              }
            });
          })}
        </div>
      </div>
    </div>
  );
};
