import { FC } from 'react';
import { FormField, StyledInput, StyledLabel } from './Input.styled';

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  step?: number | string;
  value?: string | number;
  min?: number;
  max?: number;
}

export const Input: FC<InputProps> = ({ label, id, type, placeholder, step, value, min, max }) => {
  return (
    <FormField>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        step={step}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
      />
    </FormField>
  );
};
