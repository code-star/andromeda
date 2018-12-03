import * as React from 'react'
import Button from '@material-ui/core/Button'

export interface IButton {
  variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab'
  color?: 'inherit' | 'primary' | 'secondary' | 'default'
  className?: string
  children?: React.ReactNode
  onClick: () => void
}

export const MaterialButton = ({
  variant,
  color = 'inherit',
  className = '',
  children,
  onClick
}: IButton) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

