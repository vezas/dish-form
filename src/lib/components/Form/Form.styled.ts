import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-block: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapSmall};

  & > input[type='submit'] {
    position: absolute;
    width: 0;
    height: 0;
  }
`;
