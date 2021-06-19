import React from 'react';

export default () => {
  return (
    <div
      ref={base}
      id={props.identifier}
      style={{
        border: '1px solid blue',
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
        {props.identifier}
      </div>
    </div>
  );
};
