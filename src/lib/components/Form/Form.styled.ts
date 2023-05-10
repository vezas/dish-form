import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-block: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapSmall};
`;
