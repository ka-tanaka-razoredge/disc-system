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
    /*
    joint.current.addEventListener('rotateX', e => {
      rotateX(e.detail.value);
    });
*/
    rotateX(10);
    loRef[1].current.style.transform = 'rotateX(' + 45 + 'deg)';
  }, []);

  const moveX = value => {
    base.current.style.left = value + 'px';
  };
  const moveY = value => {
    base.current.style.top = value + 'px';
  };

  const rotateX = value => {
    //    joint.current.style.transform = 'rotateX(' + value + 'deg)';
  };

  const loRef = [];
  const doors = [];
  for (let i = 0; i <= props.height / 10 - 1; i++) {
    doors.push({
      transformStyle: null,
      border: null,
      position: null,
      top: null,
      height: null,
      transform: null
    });
    loRef.push(useRef(null));
    console.log(loRef);
  }

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
      {doors.map((v, index) => {
        return (
          <dangerouslySetInnerHTML>
            <div
              ref={loRef[index]}
              style={{
                transformStyle: 'preserve-3d',
                border: 'solid 1px red',
                position: 'relative',
                top: 0 + 'px',
                height: 0 + 'px',
                transform: 'rotateX(0deg)'
              }}
            >
              <div
                style={{
                  transformStyle: 'preserve-3d',
                  border: 'solid 1px green',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  position: 'relative',
                  width: props.width + 'px',
                  height: 10 + 'px',
                  top: 0 + 'px',
                  left: 0 + 'px',
                  transform: ''
                }}
              >
                {index}
              </div>
            </div>
          </dangerouslySetInnerHTML>
        );
      })}
    </div>
  );
};
