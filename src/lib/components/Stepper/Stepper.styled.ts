import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from 'lib/styles';

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: ${({ theme }) => theme.layout.gapSmall};
  justify-content: space-evenly;
  gap: ${({ theme }) => theme.layout.gapMedium};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.layout.radiusCard};
`;

export const StyledNavLink = styled(NavLink)`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.layout.gapLittle};
  font-size: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;

  &.active > span {
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.blue};
  }

  &.disabled {
    pointer-events: none;
  }

  &.disabled > span {
    border-color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.blue};
    transform: scale(0.8);
  }

  @media ${devices.mobileL} {
    font-size: 1.25rem;
  }
`;

export const StyledNumeration = styled.span`
  font-size: 1.5rem;
  height: 2em;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.layout.gapLittle};
  border: 2px solid currentColor;
  border-radius: 50%;
`;
