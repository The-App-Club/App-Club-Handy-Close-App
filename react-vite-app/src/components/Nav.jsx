import {useState, useEffect, useRef} from 'react';
import {useClickOutside} from '../hooks/useClickOutside';
import styled from '@emotion/styled';
import gsap, {Power3} from 'gsap';
import {css} from '@emotion/css';

const StyledNav = styled.nav`
  position: fixed;
  z-index: 2;
  transform: translate(-100%, 0%);
  background: wheat;
  min-height: 100vh;
  max-width: 30rem;
  @media (max-width: 768px) {
    max-width: 16rem;
  }
  height: 100%;
  overflow: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
`;

const Nav = ({open, setOpen, isTrigger, setIsTrigger}) => {
  const navContainerDomRef = useRef();

  useClickOutside(navContainerDomRef, (e) => {
    // console.log(e);
    if (!isTrigger) {
      setOpen(false);
    }
  });

  useEffect(() => {
    if (!open) {
      document.body.classList.remove('loading');
      gsap.to(navContainerDomRef.current, {
        x: `-100%`,
        duration: 0.6,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
        },
      });
    } else {
      document.body.classList.add('loading');
      gsap.to(navContainerDomRef.current, {
        x: `0%`,
        duration: 0.6,
        ease: Power3.easeInOut,
        onComplete: function () {
          setIsTrigger(false);
        },
      });
    }
  }, [open]);

  return (
    <StyledNav ref={navContainerDomRef}>
      <ul
        className={css`
          width: 100%;
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          li {
            width: 100%;
            min-height: 4rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        `}
      >
        {[...Array(30).keys()].map((n, index) => {
          return <li key={index}>Something Menu...</li>;
        })}
      </ul>
    </StyledNav>
  );
};

export {Nav};
