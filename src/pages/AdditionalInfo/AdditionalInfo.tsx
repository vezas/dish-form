import { FC } from 'react';
import { Form } from 'lib/components/Form';
import { Heading, Paragraph, SubPageWrapper as Wrapper } from 'lib/components/ui';

export const AdditionalInfo: FC = () => {
  return (
    <Wrapper>
      <Heading as='h2'>Additional Info</Heading>
      <Paragraph>Choose type of dish and additional info.</Paragraph>
      <Form>
        <></>
      </Form>
    </Wrapper>
  );
};
