import styled from 'styled-components';

export const SummaryWrapper = styled.section`
  padding: ${({ theme }) => theme.layout.gapLittle};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.layout.radius};
  display: grid;
  gap: ${({ theme }) => theme.layout.gapLittle};
`;
