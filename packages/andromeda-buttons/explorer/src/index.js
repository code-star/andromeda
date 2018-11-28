import React from 'react';
import ReactDOM from 'react-dom';
import { ContainedDefaultButton, ContainedPrimaryButton, ContainedSecondaryButton } from '../../build/andromeda-buttons';
// import { ContainedDefaultButton } from 'andromeda-buttons';

import 'primer-utilities/index.scss'

ReactDOM.render(
  <div>
    <h1 className="pl-1">🎨 Andromeda Buttons</h1>

    <h2 className="pl-2">🗿 Contained Default Button</h2>
    <div className="pl-6">
      <ContainedDefaultButton />
    </div>

    <h2 className="pl-2">🗿 Contained Primary Button</h2>
    <div className="pl-6">
      <ContainedPrimaryButton />
    </div>

    <h2 className="pl-2">🗿 Contained Secondary Button</h2>
    <div className="pl-6">
      <ContainedSecondaryButton />
    </div>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
