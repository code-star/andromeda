import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { version } from '../lerna.json';
import './index.css'

addDecorator(
  withOptions({
    name: `Andromeda v${version}`,
    url: 'https://github.com/code-star/andromeda',
    showAddonPanel: true,
    addonPanelInRight: false
  })
)


const req = require.context('../packages', true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
