import { FC } from 'react';
import { FormField, StyledLabel } from './RadioInput.styled';

interface RadioInputProps {
  id: string;
  label: string;
  name: string;
  icon?: string;
}

export const RadioInput: FC<RadioInputProps> = ({ label, id, name, icon }) => {
  return (
    <FormField>
      <StyledLabel htmlFor={id}>
        <span>{label}</span>
        {icon && <img src={icon} alt={`${label} image`} />}
      </StyledLabel>
      <input id={id} type='radio' name={name} value={id} />
    </FormField>
  );
};
