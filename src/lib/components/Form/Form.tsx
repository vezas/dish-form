import { FC, ReactNode } from 'react';
import { StyledForm } from './Form.styled';

interface FormProps {
  children: ReactNode;
}

export const Form: FC<FormProps> = ({ children }) => <StyledForm noValidate>{children}</StyledForm>;
