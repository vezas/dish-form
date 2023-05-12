import { FC } from 'react';
import { paths } from 'lib/constants';
import { List, StyledNavLink, StyledNumeration } from './Stepper.styled';

interface StepperProps {
  onRouteChange: () => void;
}

export const Stepper: FC<StepperProps> = ({ onRouteChange }) => {
  const steps = Object.values(paths);

  return (
    <List>
      {steps.map((step, i) => (
        <li key={step}>
          <StyledNavLink to={`/${step}`} onClick={() => onRouteChange()}>
            <StyledNumeration>{i + 1}</StyledNumeration>
            {step.replace('-', ' ').toUpperCase()}
          </StyledNavLink>
        </li>
      ))}
    </List>
  );
};
