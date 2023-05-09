import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Card } from 'lib/components/Card';

export const Layout: FC = () => {
  return (
    <Card>
      <Outlet />
    </Card>
  );
};
