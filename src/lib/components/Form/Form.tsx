import { FC, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export const Form: FC<FormProps> = ({ children }) => <form noValidate>{children}</form>;
