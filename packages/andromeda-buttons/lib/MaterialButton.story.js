import { storiesOf } from '@storybook/react'

import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton
} from './MaterialButton.render'

const containedDefaultText = 'Contained Default'
const containedPrimaryText = 'Contained Primary'
const containedSecondaryText = 'Contained Secondary'

storiesOf('Buttons/MaterialButtons', module)
  .add(containedDefaultText,() => containedDefaultMaterialButton,
    {
      info: containedDefaultText,
      notes: `Must render ${containedDefaultText}`
    })
  .add(containedPrimaryText,() => containedPrimaryMaterialButton,
  {
    info: containedPrimaryText,
    notes: `Must render ${containedPrimaryText}`
  })
  .add(containedSecondaryText,() => containedSecondaryMaterialButton,
  {
    info: containedSecondaryText,
    notes: `Must render ${containedSecondaryText}`
  })
