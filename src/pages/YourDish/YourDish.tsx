import { FC, RefObject, useContext, useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Form } from 'lib/components/Form';
import {
  Button,
  ButtonsWrapper,
  Heading,
  Paragraph,
  SubPageWrapper as Wrapper
} from 'lib/components/ui';
import { Input } from 'lib/components/Inputs';
import { FormContext } from 'lib/store';
import { IDataForm } from 'lib/types';
import { paths } from 'lib/constants';

export const YourDish: FC = () => {
  const { buttonRef }: { buttonRef: RefObject<HTMLButtonElement> } = useOutletContext();
  const { formData, setFormData } = useContext(FormContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<Partial<IDataForm>>({
    defaultValues: { name: formData.name, preparation_time: formData.preparation_time },
    mode: 'onChange'
  });
  const navigate = useNavigate();
  const submitRef = useRef<HTMLInputElement | null>(null);

  const saveData = (data: Partial<IDataForm>) => setFormData({ ...formData, ...data });

  const navigateTo = (to: string) => {
    submitRef.current?.click();
    navigate(`/${to}`);
  };

  const buttonDisabled =
    !watch('name') || !watch('preparation_time') || Boolean(Object.keys(errors).length);

  return (
    <>
      <Wrapper>
        <Heading as='h2'>Your Dish</Heading>
        <Paragraph>Provide name of your dish and enter the preparation time.</Paragraph>
        <Form ref={submitRef} onSubmit={handleSubmit(saveData)}>
          <Input
            id='name'
            label='Dish Name'
            type='text'
            placeholder='HexOcean pizza'
            register={register('name', {
              required: { value: true, message: 'Name of dish is requried' },
              minLength: { value: 2, message: 'Name of dish should be at least 2' },
              maxLength: { value: 20, message: 'Name of dish should not be longer than 20' }
            })}
            errorMessage={errors.name?.message}
          />
          <Input
            id='preparation_time'
            label='Preparation Time'
            type='time'
            step={2}
            register={register('preparation_time', {
              required: { value: true, message: 'Preparation time is requried' }
            })}
            errorMessage={errors.preparation_time?.message}
          />
          <ButtonsWrapper>
            <Button
              disabled={buttonDisabled}
              ref={buttonRef}
              type='submit'
              onClick={() => navigateTo(paths.additionalInfo)}
            >
              Next Step
            </Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
      <DevTool control={control} placement='bottom-right' />
    </>
  );
};
