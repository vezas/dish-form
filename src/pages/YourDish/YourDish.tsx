import { FC } from 'react';
import { Form } from 'lib/components/Form';
import {
  Button,
  BackButton,
  ButtonsWrapper,
  Heading,
  Paragraph,
  SubPageWrapper as Wrapper
} from 'lib/components/ui';
import { Input } from 'lib/components/Inputs';

export const YourDish: FC = () => {
  return (
    <Wrapper>
      <Heading as='h2'>Your Dish</Heading>
      <Paragraph>Provide name of your dish and enter the preparation time.</Paragraph>
      <Form>
        <Input id='name' label='Dish Name' type='text' placeholder='HexOcean pizza' />
        <Input id='preparation_time' label='Preparation Time' type='time' step={2} />
        <ButtonsWrapper>
          <BackButton type='submit'>Go Back</BackButton>
          <Button type='submit'>Next Step</Button>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};
