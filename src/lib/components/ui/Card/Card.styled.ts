import styled from 'styled-components';

export const Card = styled.section`
  width: 80%;
  max-width: 600px;
  height: clamp(300px, 60%, auto);
  padding: ${({ theme }) => theme.layout.gapMedium};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.layout.radiusCard};
`;
