import * as React from 'react'
import Button from '@material-ui/core/Button'

export interface IContainedDefaultButton {
  classes?: {}
}

export const ContainedDefaultButton = (props: IContainedDefaultButton) => {
  return (
    <Button variant="contained">
      Default
    </Button>
  )
}

