import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.font.weight400};
  color: ${({ theme }) => theme.colors.darkGray};
`;
