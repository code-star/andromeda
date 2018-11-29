import { storiesOf } from '@storybook/react'
import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton
} from './MaterialButton.render'

storiesOf('Buttons/MaterialButtons', module)
  .add('ContainedDefault', () => containedDefaultMaterialButton)
  .add('ContainedPrimary', () => containedPrimaryMaterialButton)
  .add('ContainedSecondary', () => containedSecondaryMaterialButton)
