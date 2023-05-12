import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'back-btn';
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: max-content;
  padding: 1em 1.5em;
  border: none;
  border-radius: ${({ theme }) => theme.layout.radius};
  background-color: ${({ theme, variant }) =>
    variant === 'back-btn' ? theme.colors.lightGray : theme.colors.darkBlue};
  color: ${({ theme, variant }) =>
    variant === 'back-btn' ? theme.colors.darkGray : theme.colors.white};
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'back-btn' ? 'inherit' : theme.colors.blue};
    color: ${({ theme, variant }) => variant === 'back-btn' && theme.colors.darkBlue};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
