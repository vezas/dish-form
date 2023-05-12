import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  variant?: 'back-btn';
  onClick?: () => void;
}

interface Click {
  click: () => void;
}

export const Button = forwardRef<Click, ButtonProps>(function Button(
  { children, type, variant, onClick },
  ref
) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef?.current?.click();
    }
  }));

  return (
    <StyledButton type={type} variant={variant} ref={buttonRef} onClick={onClick}>
      {children}
    </StyledButton>
  );
});
