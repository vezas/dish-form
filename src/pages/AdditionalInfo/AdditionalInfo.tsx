import { FC, RefObject, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Form } from 'lib/components/Form';
import { RadioInput } from 'lib/components/Inputs';
import {
  Button,
  ButtonsWrapper,
  Heading,
  Paragraph,
  RadioFieldsWrapper,
  StyledErrorMessage,
  SubPageWrapper as Wrapper
} from 'lib/components/ui';
import { FormContext } from 'lib/store';
import { IDataForm } from 'lib/types';
import { DishTypes, paths } from 'lib/constants';
import { dishTypes } from './data';
import { displaySubForm } from './helper';

export const AdditionalInfo: FC = () => {
  const { buttonRef }: { buttonRef: RefObject<HTMLButtonElement> } = useOutletContext();
  const { formData, setFormData } = useContext(FormContext);
  const [type, setType] = useState<string | null>(null);
  const {
    control,
    register,
    unregister,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm<Partial<IDataForm>>({
    defaultValues: {
      type: formData.type,
      no_of_slices: formData.no_of_slices,
      diameter: formData.diameter,
      spiciness_scale: formData.spiciness_scale,
      slices_of_bread: formData.slices_of_bread
    },
    mode: 'onChange'
  });
  const navigate = useNavigate();
  const submitRef = useRef<HTMLInputElement | null>(null);

  const saveData = (data: Partial<IDataForm>) => {
    setFormData({
      ...formData,
      ...data
    });
  };

  const navigateTo = (to: string) => {
    submitRef.current?.click();
    navigate(to);
  };

  const hasEmptyTypeDetails = () => {
    if (type === DishTypes.Pizza) {
      return !watch('no_of_slices') || !watch('diameter');
    }

    if (type === DishTypes.Soup) {
      return !watch('spiciness_scale');
    }

    if (type === DishTypes.Sandwich) {
      return !watch('slices_of_bread');
    }
  };

  const buttonDisabled =
    !watch('type') || hasEmptyTypeDetails() || Boolean(Object.keys(errors).length);

  const changeType = (newType: string) => {
    setType(newType);
    setValue('type', newType);

    if (formData.type !== newType) {
      delete formData.diameter;
      delete formData.no_of_slices;
      delete formData.spiciness_scale;
      delete formData.slices_of_bread;

      unregister('no_of_slices');
      unregister('diameter');
      unregister('spiciness_scale');
      unregister('slices_of_bread');

      if (newType === DishTypes.Soup) {
        setValue('spiciness_scale', 1);
      }
    }
  };

  useEffect(() => {
    setType(formData.type);
  }, []);

  return (
    <>
      <Wrapper>
        <Heading as='h2'>Additional Info</Heading>
        <Paragraph>Choose type of dish and fill additional info.</Paragraph>
        <Form ref={submitRef} onSubmit={handleSubmit(saveData)}>
          <RadioFieldsWrapper>
            {dishTypes.map(({ id, label, icon }) => (
              <RadioInput
                key={id}
                id={id}
                label={label}
                icon={icon}
                register={register('type', {
                  required: { value: true, message: 'Type of dish is required' }
                })}
                onChange={() => changeType(id)}
              />
            ))}
            <StyledErrorMessage>{errors.type?.message}</StyledErrorMessage>
          </RadioFieldsWrapper>
          {displaySubForm(type, register, errors)}
          <ButtonsWrapper>
            <Button
              disabled={buttonDisabled}
              ref={buttonRef}
              type='submit'
              onClick={() => {
                navigateTo(paths.summary);
              }}
            >
              Next Step
            </Button>
            <Button
              ref={buttonRef}
              type='submit'
              variant='back-btn'
              onClick={() => navigateTo(paths.yourDish)}
            >
              Go Back
            </Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
      <DevTool control={control} placement='bottom-right' />
    </>
  );
};
