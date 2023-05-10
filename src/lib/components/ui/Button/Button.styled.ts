import styled from 'styled-components';

export const Button = styled.button`
  width: max-content;
  padding: 1em 1.5em;
  border: none;
  border-radius: ${({ theme }) => theme.layout.radius};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    background-color: inherit;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
