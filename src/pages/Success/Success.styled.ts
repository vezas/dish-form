import styled from 'styled-components';
import { SubPageWrapper } from 'lib/components/ui';

export const Wrapper = styled(SubPageWrapper)`
  & > img {
    display: block;
    margin: ${({ theme }) => theme.layout.gapSmall} auto;
    width: 100px;
    max-width: 100%;
  }
`;
