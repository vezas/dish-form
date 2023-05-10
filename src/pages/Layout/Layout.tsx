import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Card } from 'lib/components/Card';
import { Stepper } from 'lib/components/Stepper';

export const Layout: FC = () => {
  const { pathname } = useLocation();

  return (
    <Card>
      {pathname.length > 1 && <Stepper />}
      <Outlet />
    </Card>
  );
};
