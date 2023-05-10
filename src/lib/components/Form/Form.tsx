import { BaseSyntheticEvent, forwardRef, FormEvent, ReactNode } from 'react';
import { StyledForm } from './Form.styled';

interface FormProps {
  children: ReactNode;
  //eslint-disable-next-line
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

export const Form = forwardRef<HTMLInputElement, FormProps>(function Form(
  { children, onSubmit },
  ref
) {
  const submitFn = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSubmit();
  };

  return (
    <StyledForm noValidate onSubmit={submitFn}>
      {children}
      <input type='submit' ref={ref} />
    </StyledForm>
  );
});
