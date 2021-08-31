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

    if (props.isBottomOnly) {
      base.current.style.border = null;
    }
  }, []);

  const moveX = value => {
    base.current.style.left = value + 'px';
  };
  const moveY = value => {
    base.current.style.top = value + 'px';
  };

  const drawBottom = () => {
    if (!props.isBottomOnly) {
    } else {
    }
  };

  const drawBottomInner = () => {
    if (!props.contentsForBottomInner) {
      return props.contentsForFrontInner;
    } else {
      return props.contentsForBottomInner;
    }
  };

  const drawFront = () => {
    if (!props.isBottomOnly) {
      return (
        <div
          style={{
            transformStyle: 'preserve-3d',
            border: 'solid 1px lime',
            //          position: 'relative',
            width: 100 + 'px',
            height: 50 + 'px',
            transform: 'rotateX(-90deg) translateY(-25px) translateZ(-46px)'
          }}
        >
          {props.contentsForFrontInner}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        transformStyle: 'preserve-3d',
        border: '1px solid orange',
        height: 10 + 'px',
        width: 100 + 'px',
        top: props.top + 'px',
        left: props.left + 'px',
        position: 'absolute'
      }}
    >
      {drawBottomInner()}
      {drawFront()}
    </div>
  );
};
