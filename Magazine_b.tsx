import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef
} from 'react';
import Disc from './Disc';
import MetalTape from './MetalTape';
import Magazine from './Magazine';

export default forwardRef((props: { identifier: string }, ref) => {
  const base = useRef(null);
  const joint = useRef(null);

  const [discs, setDiscs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let { tense, setTense } = useState(false);
  let t = false;

  useImperativeHandle(ref, () => ({
    forwardCurrentIndex(index) {
      // doors
      loRef.map(loRef => {
        loRef.current.style.transform = 'rotateX(0deg)';
      });

      if (loRef.length - 1 < index) return;

      console.log(index);
      setCurrentIndex(index);
      console.log(currentIndex);
      let v = 30;
      // radian = degree * ( Math.PI / 180 )
      loRef[index].current.style.transform = 'rotateX(' + v + 'deg)';
      let radian = v * (Math.PI / 180);
      let n = 1;
      for (let i = index + 1; i <= loRef.length - 1; i++) {
        //      loRef[i].current.style.top = Math.cos(radian);

        loRef[i].current.style.top = 10 * Math.cos(radian);

        // TODO
        loRef[i].current.style.transform =
          'translateZ(' +
          10 * Math.sin(radian) * n +
          'px) rotateX(' +
          v +
          'deg)';
        n++;
      }
    }
  }));

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
    //    console.log(loRef);
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
                top: 10 * index + 'px',
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
});
