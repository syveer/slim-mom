// src/styles/globalStyles.js
import { css } from '@emotion/react';
import { keyframes } from '@emotion/react';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const waveAnimation = keyframes`
  2% {
    transform: translateX(1);
  }
  25% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(1);
  }
`;

const globalStyles = css`
  @import-normalize; /* bring in normalize.css styles */

  body {
    margin: auto;
    font-family: 'Jost', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: auto;
    background: linear-gradient(
      315deg,
      rgb(255, 255, 255) 3%,
      rgb(240, 240, 240) 38%,
      rgb(230, 230, 230) 68%,
      rgb(220, 220, 220) 98%
    );
    animation: ${gradientAnimation} 25s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    color: #777a83;
  }

  .wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: ${waveAnimation} 30s -13s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: ${waveAnimation} 38s -10s linear reverse infinite;
    opacity: 0.8;
  }

  .wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: ${waveAnimation} 40s -11s reverse infinite;
    opacity: 0.9;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button,
  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  span {
    margin: 0;
    padding: 0;
  }
`;

export default globalStyles;
