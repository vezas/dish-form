import { FC } from 'react';
import { Form } from 'lib/components/Form';
import { Heading, Paragraph, SubPageWrapper as Wrapper } from 'lib/components/ui';

export const YourDish: FC = () => {
  return (
    <Wrapper>
      <Heading as='h2'>Your Dish</Heading>
      <Paragraph>Provide name of your dish and enter the preparation time.</Paragraph>
      <Form>
        <></>
      </Form>
    </Wrapper>
  );
};
