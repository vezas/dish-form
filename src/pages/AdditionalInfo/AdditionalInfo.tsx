import { FC, useContext } from 'react';
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
import { dishTypes } from './data';
import { displaySubForm } from './helper';

export const AdditionalInfo: FC = () => {
  const {
    formData: { type }
  } = useContext(FormContext);

  return (
    <Wrapper>
      <Heading as='h2'>Additional Info</Heading>
      <Paragraph>Choose type of dish and fill additional info.</Paragraph>
      <Form>
        <RadioFieldsWrapper>
          {dishTypes.map(({ id, label, icon }) => (
            <RadioInput key={id} id={id} label={label} name='type' icon={icon} />
          ))}
        </RadioFieldsWrapper>
        {displaySubForm(type)}
        <ButtonsWrapper>
          <BackButton type='submit'>Go Back</BackButton>
          <Button type='submit'>Next Step</Button>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};
