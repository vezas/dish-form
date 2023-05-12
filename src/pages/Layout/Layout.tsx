import { FC, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Card } from 'lib/components/ui';
import { Stepper } from 'lib/components/Stepper';

export const Layout: FC = () => {
  const { pathname } = useLocation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const onRouteChange = () => {
    buttonRef.current?.click();
  };

  return (
    <Card>
      {pathname.length > 1 && <Stepper onRouteChange={onRouteChange} />}
      <Outlet context={{ buttonRef: buttonRef }} />
    </Card>
  );
};
