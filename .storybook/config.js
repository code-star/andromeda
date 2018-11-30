import { addDecorator, setAddon, configure } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withOptions } from '@storybook/addon-options';
import { version } from '../lerna.json';
import './index.css'

import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);
addDecorator(
  withOptions({
    name: `Andromeda v${version}`,
    url: 'https://github.com/code-star/andromeda',
    showAddonPanel: true,
    addonPanelInRight: false
  })
)

setAddon(JSXAddon);

const req = require.context('../packages', true, /.story.tsx$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
