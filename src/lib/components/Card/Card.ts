import styled from 'styled-components';

export const Card = styled.div`
  width: 80%;
  max-width: 600px;
  height: 60%;
  max-height: 400px;
  padding: ${({ theme }) => theme.layout.gapMedium};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.layout.radiusCard};
`;
