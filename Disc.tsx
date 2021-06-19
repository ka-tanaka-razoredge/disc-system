import React, { useRef } from 'react';

export default (props: { identifier: string }) => {
  const base = useRef(null);

  const moveX = value => {
    base.current.style.left = value + 'px';
  };

  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        border: '1px solid blue',
        height: 10 + 'px',
        width: 100 + 'px',
        position: 'absolute'
      }}
    >
      {props.identifier}
      <div
        style={{
          transformStyle: 'preserve-3d',
          border: 'solid 1px lime',
          position: 'absolute',
          top: 0 + 'px',
          width: 100 + 'px',
          height: 50 + 'px',
          transform: 'translateY(-60px) rotateX(-90deg) translateX(20px)'
        }}
      >
        {props.identifier}
      </div>
    </div>
  );
};
