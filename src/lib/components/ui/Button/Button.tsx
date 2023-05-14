import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  variant?: 'back-btn';
  onClick?: () => void;
  disabled?: boolean;
}

interface Click {
  click: () => void;
}

export const Button = forwardRef<Click, ButtonProps>(function Button(
  { children, type, variant, disabled, onClick },
  ref
) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef?.current?.click();
    }
  }));

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      variant={variant}
      ref={buttonRef}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
});
