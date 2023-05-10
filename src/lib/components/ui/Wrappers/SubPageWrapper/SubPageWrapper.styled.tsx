import styled from 'styled-components';

export const SubPageWrapper = styled.main`
  margin-block: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapLittle};
`;
