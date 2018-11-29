import React from 'react';
import ReactDOM from 'react-dom';
// import { MaterialButton } from '../../build/andromeda-buttons';
import { MaterialButton } from 'andromeda-buttons';

import 'primer-utilities/index.scss'

function handleOnClick() {
  console.log('~handling onClick~')
}

ReactDOM.render(
  <div>
    <h1 className="pl-1">🎨 Andromeda MaterialButtons</h1>

    <h2 className="pl-2">🗿 Contained Default MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
      >
        Default
      </MaterialButton>
    </div>

    <h2 className="pl-2">🗿 Contained Primary MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Primary
      </MaterialButton>
    </div>

    <h2 className="pl-2">🗿 Contained Secondary MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="secondary"
        onClick={handleOnClick}
      >
        Secondary
      </MaterialButton>
    </div>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
