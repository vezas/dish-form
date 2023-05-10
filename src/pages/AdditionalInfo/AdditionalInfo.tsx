import { FC, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Form } from 'lib/components/Form';
import { RadioInput } from 'lib/components/Inputs';
import {
  BackButton,
  Button,
  ButtonsWrapper,
  Heading,
  Paragraph,
  RadioFieldsWrapper,
  SubPageWrapper as Wrapper
} from 'lib/components/ui';
import { FormContext } from 'lib/store';
import { IDataForm } from 'lib/types';
import { paths } from 'lib/constants';
import { dishTypes } from './data';
import { displaySubForm } from './helper';

export const AdditionalInfo: FC = () => {
  const { formData, setFormData } = useContext(FormContext);
  const { control, register, handleSubmit } = useForm<Partial<IDataForm>>({
    defaultValues: { type: formData.type }
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
        <Heading as='h2'>Additional Info</Heading>
        <Paragraph>Choose type of dish and fill additional info.</Paragraph>
        <Form ref={submitRef} onSubmit={handleSubmit(saveData)}>
          <RadioFieldsWrapper>
            {dishTypes.map(({ id, label, icon }) => (
              <RadioInput key={id} id={id} label={label} icon={icon} register={register('type')} />
            ))}
          </RadioFieldsWrapper>
          {displaySubForm(formData.type)}
          <ButtonsWrapper>
            <Button
              type='submit'
              onClick={() => {
                navigateTo(paths.summary);
              }}
            >
              Next Step
            </Button>
            <BackButton type='submit' onClick={() => navigateTo(paths.yourDish)}>
              Go Back
            </BackButton>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
      <DevTool control={control} placement='bottom-right' />
    </>
  );
};
