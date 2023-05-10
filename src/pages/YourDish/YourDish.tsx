import { FC, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { formData, setFormData } = useContext(FormContext);
  const { control, register, handleSubmit } = useForm<Partial<IDataForm>>({
    defaultValues: { name: formData.name, preparation_time: formData.preparation_time }
  });
  const navigate = useNavigate();
  const submitRef = useRef<HTMLInputElement | null>(null);

  const saveData = (data: Partial<IDataForm>) => setFormData({ ...formData, ...data });

  const navigateTo = (to: string) => {
    submitRef.current?.click();
    navigate(`/${to}`);
  };

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
            register={register('name')}
          />
          <Input
            id='preparation_time'
            label='Preparation Time'
            type='time'
            step={2}
            register={register('preparation_time')}
          />
          <ButtonsWrapper>
            <Button type='submit' onClick={() => navigateTo(paths.additionalInfo)}>
              Next Step
            </Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
      <DevTool control={control} placement='bottom-right' />
    </>
  );
};
