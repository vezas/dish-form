import styled from 'styled-components';

export const RadioFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.layout.gapSmall};
  justify-items: center;

  & > span {
    grid-column: 2 / span 1;
  }
`;
