import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.font.weight400};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const AccentedParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.font.weight700};
`;

export const StyledErrorMessage = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.font.weight700};
`;
