import styled from 'styled-components';

export const FormField = styled.div`
  width: 100%;
  max-width: 150px;
`;

export const StyledLabel = styled.label`
  padding: ${({ theme }) => theme.layout.gapLittle};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.layout.radius};
  cursor: pointer;
  display: grid;
  grid-auto-rows: min-content;
  place-items: center;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.font.weight700};

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightBlue};
  }

  &:has(+ input:checked) {
    border-color: ${({ theme }) => theme.colors.lightBlue};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  & > img {
    max-width: 100%;
    height: 3rem;
    aspect-ratio: 1;
  }

  & + input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
`;
