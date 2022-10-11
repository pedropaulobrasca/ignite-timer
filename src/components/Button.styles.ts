import styled, { css } from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'blue',
  secondary: 'yellow',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  /* background-color: ${({ variant }) => buttonVariants[variant]} */
  ${({ variant }) => css`
    background-color: ${buttonVariants[variant]};
  `}
`
