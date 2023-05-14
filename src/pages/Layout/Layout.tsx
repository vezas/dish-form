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

  const baseURL = import.meta.env.BASE_URL || '/';

  return (
    <Card>
      {pathname.length > 1 && pathname !== baseURL && <Stepper onRouteChange={onRouteChange} />}
      <Outlet context={{ buttonRef: buttonRef }} />
    </Card>
  );
};
