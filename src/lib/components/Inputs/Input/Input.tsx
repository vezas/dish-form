import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
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
  register?: UseFormRegisterReturn;
}

export const Input: FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  step,
  value,
  min,
  max,
  register
}) => {
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
        {...register}
      />
    </FormField>
  );
};
