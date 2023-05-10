import { FC } from 'react';
import { paths } from 'lib/constants';
import { List, StyledNavLink, StyledNumeration } from './Stepper.styled';

export const Stepper: FC = () => {
  const steps = Object.values(paths);

  return (
    <List>
      {steps.map((step, i) => (
        <li key={step}>
          <StyledNavLink to={`/${step}`}>
            <StyledNumeration>{i + 1}</StyledNumeration>
            {step.replace('-', ' ').toUpperCase()}
          </StyledNavLink>
        </li>
      ))}
    </List>
  );
};
