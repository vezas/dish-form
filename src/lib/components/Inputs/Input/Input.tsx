import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledErrorMessage } from 'lib/components/ui';
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
  errorMessage?: string | FieldError | undefined;
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
  register,
  errorMessage
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
      <StyledErrorMessage>
        <>{errorMessage}</>
      </StyledErrorMessage>
    </FormField>
  );
};
