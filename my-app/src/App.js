/*jshint esversion: 6 */
/* jshint ignore:start */

import React from 'react';
import { render } from 'react-dom';

import Project from './Project';
import './display.css';

function App() {
  return (
    <div>
      <h1>Project Uno</h1>
      <Project>
        <div label='Site Analysis'>
          <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Zoning Review'>
        <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Programming'>
        <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Conceptual Design'>
        <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Schematic'>
        <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Design Development'>
        <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
        <div label='Technical drawing, Spec, Permit, Exemptions'>
           <p>
            <strong>First Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Second Thing:</strong> Coming Soon
          </p>
          <p>
            <strong>Third Thing:</strong> Coming Soon
          </p>
          <button>
            Next
          </button>
        </div>
      </Project>
    </div>
  );
}

export default App;

/* jshint ignore:end */