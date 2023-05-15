import { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from 'lib/constants';
import { FormContext } from 'lib/store';
import { List, StyledNavLink, StyledNumeration } from './Stepper.styled';

interface StepperProps {
  onRouteChange: () => void;
}

export const Stepper: FC<StepperProps> = ({ onRouteChange }) => {
  const {
    formData: { name, preparation_time, type }
  } = useContext(FormContext);

  const steps = Object.values(paths);

  const checkPaths = (step: string) => {
    const { pathname } = useLocation();

    if (
      ((!name || !preparation_time) &&
        step !== paths.yourDish &&
        pathname === `${paths.yourDish}`) ||
      (!type &&
        step !== paths.additionalInfo &&
        step !== paths.yourDish &&
        (pathname === `${paths.yourDish}` || pathname === `${paths.additionalInfo}`))
    ) {
      return 'disabled';
    }
  };

  return (
    <List>
      {steps.map((step, i) => (
        <li key={step}>
          <StyledNavLink
            to={`${step}`}
            className={checkPaths(step)}
            onClick={() => onRouteChange()}
          >
            <StyledNumeration>{i + 1}</StyledNumeration>
            {step.replace('/', '').split('/').reverse()[0].replace('-', ' ').toUpperCase()}
          </StyledNavLink>
        </li>
      ))}
    </List>
  );
};
