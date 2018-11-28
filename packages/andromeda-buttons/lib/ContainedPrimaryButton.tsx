import * as React from 'react'
import Button from '@material-ui/core/Button'

export interface IContainedPrimaryButton {
  classes?: {}
}

export const ContainedPrimaryButton = (props: IContainedPrimaryButton) => {
  return (
    <Button variant="contained" color="primary">
      Primary
    </Button>
  )
}

