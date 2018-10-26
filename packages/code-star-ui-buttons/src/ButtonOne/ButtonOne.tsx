import * as React from 'react'
import * as style from './ButtonOne.scss'

export interface IButtonOneProps {
  className?: string
  children: React.ReactNode
}

const ButtonOne = ({ className, children }: IButtonOneProps) => (
  <div className={`${style.buttonOne} ${className}`.trim()}>
    {children}
  </div>
)

export default ButtonOne
