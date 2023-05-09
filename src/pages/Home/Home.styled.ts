import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.layout.gapMedium};

  & > button {
    margin-top: auto;
    margin-left: auto;
  }
`;
