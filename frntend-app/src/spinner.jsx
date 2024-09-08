// src/Spinner.jsx
import React from 'react';

const Spinner = () => (
  <div className="spinner">
    <div className="lds-ripple"><div></div><div></div></div>
    <style jsx>{`
      .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ripple div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
      }
      @keyframes lds-ripple {
        0% {
          top: 36px;
          left: 36px;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: 0;
          left: 0;
          width: 72px;
          height: 72px;
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

export default Spinner;
