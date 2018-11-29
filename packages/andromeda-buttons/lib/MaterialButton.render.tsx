import * as React from 'react'
import { MaterialButton } from './MaterialButton'

const handleOnClick = () => { return }

export const containedDefaultMaterialButton = (
  <MaterialButton
  variant="contained"
  onClick={handleOnClick}
>
  Default
</MaterialButton>
)

export const containedPrimaryMaterialButton = (
  <MaterialButton
    variant="contained"
    color="primary"
    onClick={handleOnClick}
  >
    Primary
  </MaterialButton>
)

export const containedSecondaryMaterialButton = (
  <MaterialButton
    variant="contained"
    color="secondary"
    onClick={handleOnClick}
  >
    Secondary
  </MaterialButton>
)
