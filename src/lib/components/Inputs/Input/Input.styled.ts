import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapLittle};
`;

export const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.font.weight700};
  cursor: pointer;
`;

export const StyledInput = styled.input`
  padding-inline: ${({ theme }) => theme.layout.gapSmall};
  padding-block: ${({ theme }) => theme.layout.gapLittle};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.layout.radius};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.font.weight700};
  cursor: pointer;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: ${({ theme }) => theme.font.weight500};
  }

  &:focus,
  &:hover {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
