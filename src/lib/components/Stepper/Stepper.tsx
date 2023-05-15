import { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DishTypes, paths } from 'lib/constants';
import { FormContext } from 'lib/store';
import { hasEmptyValues } from 'lib/helpers';
import { List, StyledNavLink, StyledNumeration } from './Stepper.styled';

interface StepperProps {
  onRouteChange: () => void;
}

export const Stepper: FC<StepperProps> = ({ onRouteChange }) => {
  const {
    formData: {
      name,
      preparation_time,
      type,
      spiciness_scale,
      slices_of_bread,
      diameter,
      no_of_slices
    }
  } = useContext(FormContext);

  const steps = Object.values(paths).slice(0, -1);

  const hasEmptyTypeDetails = () => {
    if (type === DishTypes.Soup) {
      return hasEmptyValues({ spiciness_scale });
    }

    if (type === DishTypes.Sandwich) {
      return hasEmptyValues({ slices_of_bread });
    }

    if (type === DishTypes.Pizza) {
      return hasEmptyValues({ diameter, no_of_slices });
    }
  };

  const checkStep = (step: number) => {
    const { pathname } = useLocation();

    if (step !== 0 && pathname === paths.yourDish && hasEmptyValues({ name, preparation_time })) {
      return true;
    }

    if (
      step === 2 &&
      pathname !== paths.summary &&
      (hasEmptyValues({ name, preparation_time, type }) || hasEmptyTypeDetails())
    ) {
      return true;
    }
  };

  return (
    <List>
      {steps.map((step, index) => (
        <li key={step}>
          <StyledNavLink
            to={`${step}`}
            className={checkStep(index) ? 'disabled' : ''}
            onClick={() => onRouteChange()}
          >
            <StyledNumeration>{index + 1}</StyledNumeration>
            {step.replace('/', '').split('/').reverse()[0].replace('-', ' ').toUpperCase()}
          </StyledNavLink>
        </li>
      ))}
    </List>
  );
};
