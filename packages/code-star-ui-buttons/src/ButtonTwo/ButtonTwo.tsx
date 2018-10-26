import * as React from 'react'
import * as style from './ButtonTwo.scss'

export interface IButtonTwoProps {
  className?: string
  children: React.ReactNode
}

const ButtonTwo = ({ className, children }: IButtonTwoProps) => (
  <div className={`${style.buttonTwo} ${className}`.trim()}>
    {children}
  </div>
)

export default ButtonTwo
