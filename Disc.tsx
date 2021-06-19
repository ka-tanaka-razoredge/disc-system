import React, { useRef, useEffect } from 'react';

export default (props: { identifier: string }, ref) => {
  const base = useRef(null);

  useEffect(() => {
    base.current.addEventListener('moveX', e => {
      moveX(e.detail.value);
    });
    base.current.addEventListener('moveY', e => {
      moveY(e.detail.value);
    });
  });

  const moveX = value => {
    base.current.style.left = value + 'px';
  };
  const moveY = value => {
    base.current.style.top = value + 'px';
  };

  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        border: '1px solid orange',
        height: 10 + 'px',
        width: 100 + 'px',
        top: 0 + 'px',
        left: 0 + 'px',
        position: 'absolute'
      }}
    >
      {props.identifier}
      <div
        style={{
          transformStyle: 'preserve-3d',
          border: 'solid 1px lime',
          position: 'relative',
          width: 100 + 'px',
          height: 50 + 'px',
          transform: 'translateY(-70px) rotateX(-90deg) translateX(30px)'
        }}
      >
        {props.contentsForFrontInner}
      </div>
    </div>
  );
};
