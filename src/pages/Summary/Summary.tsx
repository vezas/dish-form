import { FC } from 'react';
import { Heading, Paragraph, SubPageWrapper as Wrapper } from 'lib/components/ui';

export const Summary: FC = () => {
  return (
    <Wrapper>
      <Heading as='h2'>Summary</Heading>
      <Paragraph>Check provided data before confirming.</Paragraph>
    </Wrapper>
  );
};
