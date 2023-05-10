import { FC } from 'react';
import { Input } from 'lib/components/Inputs';

const PizzaFields: FC = () => (
  <>
    <Input
      id='no_of_slices'
      label='Number of Slices'
      type='number'
      step='1'
      min={0}
      placeholder='4'
    />
    <Input id='diameter' label='Diameter' type='number' step='0.1' min={0} placeholder='33.4' />
  </>
);

const SoupFields: FC = () => (
  <Input
    id='spiciness_scale'
    label='Spiciness Scale (1-10)'
    type='range'
    step='1'
    min={0}
    max={10}
  />
);

const SandwichFields: FC = () => (
  <Input
    id='slices_of_bread'
    label='Number of Slices of Bread'
    type='number'
    step='1'
    min={0}
    placeholder='2'
  />
);

export const displaySubForm = (type: string) => {
  if (type === 'pizza') return <PizzaFields />;
  if (type === 'soup') return <SoupFields />;
  if (type === 'sandwich') return <SandwichFields />;
};
