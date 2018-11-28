import * as React from 'react'
import Button from '@material-ui/core/Button'

export interface IContainedSecondaryButton {
  classes?: {}
}

export const ContainedSecondaryButton = (props: IContainedSecondaryButton) => {
  return (
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
  )
}

