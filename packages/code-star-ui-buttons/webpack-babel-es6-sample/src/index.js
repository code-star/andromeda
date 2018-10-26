import React from 'react';
import ReactDOM from 'react-dom';
import {
  ButtonOne, ButtonTwo
} from '../../lib/code-star-ui-buttons.js';

const p1 = {
  'padding': '10px'
};

const pl1 = {
  'paddingLeft': '10px'
};

ReactDOM.render(
  <div>
    <h1 style={pl1}>Sample Button One</h1>
    <div style={p1}>
      <ButtonOne>Sample Button One</ButtonOne>
    </div>

    <h1 style={pl1}>Sample Button Two</h1>
    <div style={p1}>
      <ButtonTwo>Sample Button Two</ButtonTwo>
    </div>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
