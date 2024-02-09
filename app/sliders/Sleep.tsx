'use client';

import React, { useEffect } from 'react';

const SleepSlider = () => {
  let active: false | string = false;
  let scrollerMiddle: HTMLElement | null = null;
  let scrollerTop: HTMLElement | null = null;

  const scrollIt = (x: number) => {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector('.wrapper')!.offsetWidth)
    );
    if (active === 'middle') {
      document
        .querySelector('.middle')!
        .setAttribute('style', `width: ${transform}px`);
      scrollerMiddle!.setAttribute('style', `left: ${transform - 25}px`);
      if (
        scrollerTop!.getBoundingClientRect().left >
        scrollerMiddle!.getBoundingClientRect().left - 5
      ) {
        document
          .querySelector('.top')!
          .setAttribute('style', `width: ${transform - 5}px`);
        scrollerTop!.setAttribute('style', `left: ${transform - 30}px`);
      }
    }
    if (active === 'top') {
      document
        .querySelector('.top')!
        .setAttribute('style', `width: ${transform}px`);
      scrollerTop!.setAttribute('style', `left: ${transform - 25}px`);
      if (
        scrollerTop!.getBoundingClientRect().left >
        scrollerMiddle!.getBoundingClientRect().left - 5
      ) {
        document
          .querySelector('.middle')!
          .setAttribute('style', `width: ${transform + 5}px`);
        scrollerMiddle!.setAttribute('style', `left: ${transform - 20}px`);
      }
    }
  };

  useEffect(() => {
    const handleMouseDownMiddle = () => {
      active = 'middle';
      scrollerMiddle!.classList.add('scrolling');
    };

    const handleMouseUp = () => {
      active = false;
      scrollerMiddle!.classList.remove('scrolling');
      scrollerTop!.classList.remove('scrolling');
    };

    const handleTouchStartMiddle = () => {
      active = 'middle';
      scrollerMiddle!.classList.add('scrolling');
    };

    const handleTouchEnd = () => {
      active = false;
      scrollerMiddle!.classList.remove('scrolling');
      scrollerTop!.classList.remove('scrolling');
    };

    scrollerMiddle = document.querySelector('.scroller-middle');
    scrollerTop = document.querySelector('.scroller-top');

    if (scrollerMiddle && scrollerTop) {
      scrollerMiddle.addEventListener('mousedown', handleMouseDownMiddle);
      scrollerTop.addEventListener('mousedown', () => {
        active = 'top';
        scrollerTop!.classList.add('scrolling');
      });

      document.body.addEventListener('mouseup', handleMouseUp);
      document.body.addEventListener('mouseleave', handleMouseUp);

      scrollerMiddle.addEventListener('touchstart', handleTouchStartMiddle);
      scrollerTop.addEventListener('touchstart', () => {
        active = 'top';
        scrollerTop!.classList.add('scrolling');
      });

      document.body.addEventListener('touchend', handleTouchEnd);
      document.body.addEventListener('touchcancel', handleTouchEnd);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!active) return;
      let x = e.pageX;
      x -= document.querySelector('.wrapper')!.getBoundingClientRect().left;
      scrollIt(x);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!active) return;
      e.preventDefault();
      let x = e.touches[0].pageX;
      x -= document.querySelector('.wrapper')!.getBoundingClientRect().left;
      scrollIt(x);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document
      .querySelector('.wrapper')!
      .addEventListener('touchmove', handleTouchMove);

    return () => {
      if (scrollerMiddle && scrollerTop) {
        scrollerMiddle.removeEventListener('mousedown', handleMouseDownMiddle);
        scrollerTop.removeEventListener('mousedown', () => {
          active = 'top';
          scrollerTop!.classList.add('scrolling');
        });
        document.body.removeEventListener('mouseup', handleMouseUp);
        document.body.removeEventListener('mouseleave', handleMouseUp);
        scrollerMiddle.removeEventListener(
          'touchstart',
          handleTouchStartMiddle
        );
        scrollerTop.removeEventListener('touchstart', () => {
          active = 'top';
          scrollerTop!.classList.add('scrolling');
        });
        document.body.removeEventListener('touchend', handleTouchEnd);
        document.body.removeEventListener('touchcancel', handleTouchEnd);
        document.body.removeEventListener('mousemove', handleMouseMove);
        document
          .querySelector('.wrapper')!
          .removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  useEffect(() => {
    active = 'middle';
    scrollIt(460);
    active = 'top';
    scrollIt(230);
    active = false;
  }, []);

  return (
    <div>
      <h2 className="text-center">
        How much sleep did you get "last night" and when?
      </h2>
      <br />
      <br />
      <div className="wrapper">
        <div className="bottom"></div>
        <div className="middle"></div>
        <div className="top"></div>
        <div className="scroller scroller-middle">
          <div className="scroller__thumb">
            {/* Left arrow */}
            <div
              style={{
                position: 'absolute',
                left: 5,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid orange',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                cursor: 'pointer'
              }}
            ></div>
            {/* Right arrow */}
            <div
              style={{
                position: 'absolute',
                right: 5,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid orange',
                borderRight: '8px solid transparent',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                cursor: 'pointer'
              }}
            ></div>
          </div>
        </div>
        <div className="scroller scroller-top">
          <div className="scroller__thumb">
            {/* Left arrow */}
            <div
              style={{
                position: 'absolute',
                left: 5,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid orange',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                cursor: 'pointer'
              }}
            ></div>
            {/* Right arrow */}
            <div
              style={{
                position: 'absolute',
                right: 5,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid orange',
                borderRight: '8px solid transparent',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                cursor: 'pointer'
              }}
            ></div>
          </div>
        </div>
      </div>
      <style>{TestSliderStyle}</style> {/* Include the styles */}
    </div>
  );
};

const TestSliderStyle = `


.wrapper {
  width: 690px;
  height: 60px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.bottom,
.middle,
.top {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  pointer-events: none;
  overflow: hidden;
  img {
    height: 100%;
  }
}

.bottom {
  background: #2196f3;
}
.middle {
  background: #bbdefb;
}
.top {
  background: #ffffff;
}

.top {
  width: 125px;
}

.scroller {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.9;
  transition: opacity 0.12s ease-in-out;
  pointer-events: auto;
  cursor: pointer;
  box-shadow: 3.5px 0px 7px rgba(100, 100, 100, 0.2);
}

.scroller:hover {
  opacity: 1;
}

.scrolling {
  pointer-events: none;
  opacity: 1;
}

.scroller__thumb {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 7px;
}

.scroller:before,
.scroller:after {
  content: ' ';
  display: block;
  width: 7px;
  height: 9999px;
  position: absolute;
  left: 50%;
  margin-left: -3.5px;
  z-index: 30;
  transition: 0.1s;
  box-shadow: 3.5px 0px 7px rgba(100, 100, 100, 0.2);
}
.scroller:before {
  top: 49px;
}
.scroller:after {
  bottom: 49px;
}

/* If you want to cahnge the colors, make sure you change the fill in the svgs to match */
.scroller-middle > .scroller__thumb {
  border: 5px solid #ffccbc;
}
.scroller-middle:before,
.scroller-middle:after {
  background: #000000;
}

.scroller-top > .scroller__thumb {
  border: 5px solid #ffab91;
}
.scroller-top:before,
.scroller-top:after {
  background: #000000;
}


`;

export default SleepSlider;
