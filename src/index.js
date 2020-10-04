import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          min-height: 100vh;
          margin: 0;
          background-image: url('backgroundguest.jpg');
          background-size: cover;
          background-repeat: no-repeat;

          font-family: 'Quicksand', 'Kumbh Sans', sans-serif, ---apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.2;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
