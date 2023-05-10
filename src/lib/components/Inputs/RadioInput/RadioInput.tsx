import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormField, StyledLabel } from './RadioInput.styled';

interface RadioInputProps {
  id: string;
  label: string;
  icon?: string;
  register: UseFormRegisterReturn;
}

export const RadioInput: FC<RadioInputProps> = ({ label, id, icon, register }) => {
  return (
    <FormField>
      <StyledLabel htmlFor={id}>
        <span>{label}</span>
        {icon && <img src={icon} alt={`${label} image`} />}
      </StyledLabel>
      <input {...register} id={id} type='radio' value={id} />
    </FormField>
  );
};
