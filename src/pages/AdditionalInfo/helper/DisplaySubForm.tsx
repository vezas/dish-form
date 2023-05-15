import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Input } from 'lib/components/Inputs';
import { IDataForm } from 'lib/types';
import { DishTypes } from 'lib/constants';

interface FieldsProps {
  //eslint-disable-next-line
  register: UseFormRegister<any>;
  errors: FieldErrors<Partial<IDataForm>>;
}

const PizzaFields: FC<FieldsProps> = ({ register, errors }) => (
  <>
    <Input
      id='no_of_slices'
      label='Number of Slices'
      type='number'
      step='1'
      min={0}
      placeholder='4'
      errorMessage={errors.no_of_slices?.message}
      register={register('no_of_slices', {
        valueAsNumber: true,
        required: { value: true, message: 'Number of pizza slices is required' },
        min: { value: 1, message: 'Number of pizza slices should be at least 1' },
        max: { value: 100, message: 'Number of pizza slices should not be higher than 100' }
      })}
    />
    <Input
      id='diameter'
      label='Diameter'
      type='number'
      step='0.1'
      min={0}
      placeholder='33.4'
      errorMessage={errors.diameter?.message}
      register={register('diameter', {
        valueAsNumber: true,
        required: { value: true, message: 'Diameter of pizza is required' },
        min: { value: 10, message: 'Diameter of pizza should be at least 10' },
        max: { value: 100, message: 'Diameter of pizza should not be higher than 100' }
      })}
    />
  </>
);

const SoupFields: FC<FieldsProps> = ({ register, errors }) => (
  <Input
    id='spiciness_scale'
    label='Spiciness Scale (1-10)'
    type='range'
    step='1'
    min={1}
    max={10}
    errorMessage={errors.spiciness_scale?.message}
    register={register('spiciness_scale', {
      valueAsNumber: true,
      required: { value: true, message: 'Level of spiciness is required' },
      min: { value: 1, message: 'Spiciness level should be 1 at least' },
      max: { value: 10, message: 'Spiciness level should not be higher than 10' }
    })}
  />
);

const SandwichFields: FC<FieldsProps> = ({ register, errors }) => (
  <Input
    id='slices_of_bread'
    label='Number of Slices of Bread'
    type='number'
    step='1'
    min={0}
    placeholder='2'
    errorMessage={errors.slices_of_bread?.message}
    register={register('slices_of_bread', {
      valueAsNumber: true,
      required: { value: true, message: 'Number of bread slices is required' },
      min: { value: 1, message: 'Number of pizza slices should be at least 1' },
      max: { value: 100, message: 'Number of pizza slices should not be higher than 100' }
    })}
  />
);

export const displaySubForm = (
  type: string | null,
  //eslint-disable-next-line
  register: UseFormRegister<any>,
  errors: FieldErrors<Partial<IDataForm>>
) => {
  if (type === DishTypes.Pizza) {
    return <PizzaFields register={register} errors={errors} />;
  }

  if (type === DishTypes.Soup) {
    return <SoupFields register={register} errors={errors} />;
  }

  if (type === DishTypes.Sandwich) {
    return <SandwichFields register={register} errors={errors} />;
  }
};
