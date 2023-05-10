import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Input } from 'lib/components/Inputs';

interface FieldsProps {
  //eslint-disable-next-line
  register: UseFormRegister<any>;
}

const PizzaFields: FC<FieldsProps> = ({ register }) => (
  <>
    <Input
      id='no_of_slices'
      label='Number of Slices'
      type='number'
      step='1'
      min={0}
      placeholder='4'
      register={register('no_of_slices', { valueAsNumber: true })}
    />
    <Input
      id='diameter'
      label='Diameter'
      type='number'
      step='0.1'
      min={0}
      placeholder='33.4'
      register={register('diameter', { valueAsNumber: true })}
    />
  </>
);

const SoupFields: FC<FieldsProps> = ({ register }) => (
  <Input
    id='spiciness_scale'
    label='Spiciness Scale (1-10)'
    type='range'
    step='1'
    min={0}
    max={10}
    register={register('spiciness_scale', { valueAsNumber: true })}
  />
);

const SandwichFields: FC<FieldsProps> = ({ register }) => (
  <Input
    id='slices_of_bread'
    label='Number of Slices of Bread'
    type='number'
    step='1'
    min={0}
    placeholder='2'
    register={register('slices_of_bread', { valueAsNumber: true })}
  />
);

//eslint-disable-next-line
export const displaySubForm = (type: string | null, register: UseFormRegister<any>) => {
  if (type === 'pizza') return <PizzaFields register={register} />;
  if (type === 'soup') return <SoupFields register={register} />;
  if (type === 'sandwich') return <SandwichFields register={register} />;
};
