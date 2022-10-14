import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  border-radius: 8px;
  border: 0;
  margin: 8px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  font-weight: bold;
`
