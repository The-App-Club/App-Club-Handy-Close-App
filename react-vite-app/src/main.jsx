import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {useEffect, useCallback, useMemo, useRef, useState} from 'react';
import {Nav} from './components/Nav';

import '@fontsource/inter';
import './styles/index.scss';
import {Button} from '@mui/material';

const App = () => {
  const [open, setOpen] = useState(false);
  const [isTrigger, setIsTrigger] = useState(false);

  const handleClick = (e) => {
    setOpen((prevOpen) => {
      return !prevOpen;
    });
    setIsTrigger(true);
  };
  return (
    <div>
      <Nav
        open={open}
        setOpen={setOpen}
        isTrigger={isTrigger}
        setIsTrigger={setIsTrigger}
      />
      <div
        className={css`
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1;
        `}
      >
        <Button variant={'outlined'} onClick={handleClick}>
          Do
        </Button>
      </div>
      <main
        className={css`
          position: relative;
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-size: 4rem;
          }
        `}
      >
        <article>
          <section>1</section>
          <section>2</section>
          <section>3</section>
        </article>
      </main>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
