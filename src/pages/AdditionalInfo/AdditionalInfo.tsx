import { FC } from 'react';
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
import { dishTypes } from './data';

export const AdditionalInfo: FC = () => {
  return (
    <Wrapper>
      <Heading as='h2'>Additional Info</Heading>
      <Paragraph>Choose type of dish and additional info.</Paragraph>
      <Form>
        <RadioFieldsWrapper>
          {dishTypes.map(({ id, label, icon }) => (
            <RadioInput key={id} id={id} label={label} name='type' icon={icon} />
          ))}
        </RadioFieldsWrapper>
        <ButtonsWrapper>
          <BackButton type='submit'>Go Back</BackButton>
          <Button type='submit'>Next Step</Button>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};
