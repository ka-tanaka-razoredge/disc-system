import React, { useRef, useEffect } from 'react';

export default (props: { identifier: string }, ref) => {
  const base = useRef(null);

  useEffect(() => {
    base.current.addEventListener('moveX', (e) => {
      moveX(e.detail.value);
    });
    base.current.addEventListener('moveY', (e) => {
      moveY(e.detail.value);
    });
  }, []);

  const moveX = (value) => {
    base.current.style.left = value + 'px';
  };
  const moveY = (value) => {
    base.current.style.top = value + 'px';
  };
  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        transformStyle: 'preserve-3d',
        border: '1px solid blue',
        height: 1 + 'px',
        width: 100 + 'px',
        top: props.top + 'px',
        left: props.left + 'px',
        position: 'absolute',
      }}
    >
      <div
        style={{
          height: 1 + 'px',
          transform: 'rotateX(-90deg)',
        }}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            border: '1px solid blue',
            width: 10 + 'px',
            height: 10 + 'px',
          }}
        ></div>
      </div>
      <div
        style={{
          top: 10 + 'px',
          height: 1 + 'px',
          transform: 'rotateX(90deg)',
        }}
      ></div>
    </div>
  );
};
