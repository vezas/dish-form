import { FC, useContext } from 'react';
import {
  AccentedParagraph as Span,
  Button,
  ButtonsWrapper,
  Heading,
  Paragraph,
  SubPageWrapper as Wrapper,
  SummaryWrapper
} from 'lib/components/ui';
import { FormContext } from 'lib/store';

export const Summary: FC = () => {
  const { formData } = useContext(FormContext);

  return (
    <Wrapper>
      <Heading as='h2'>Summary</Heading>
      <Paragraph>Check provided data before confirming.</Paragraph>
      <SummaryWrapper>
        <>
          <Paragraph>
            Name: <Span as='span'>{formData.name || 'Not provided yet!'}</Span>
          </Paragraph>
          <Paragraph>
            Preparation Time:{' '}
            <Span as='span'>{formData.preparation_time || 'Not provided yet!'}</Span>
          </Paragraph>
          <Paragraph>
            Type: <Span as='span'>{formData.type || 'Not provided yet!'}</Span>
          </Paragraph>
          {formData.type === 'pizza' && (
            <>
              <Paragraph>
                Number of Slices:{' '}
                <Span as='span'>{formData.no_of_slices || 'Not provided yet!'}</Span>
              </Paragraph>
              <Paragraph>
                Diameter: <Span as='span'>{formData.diameter || 'Not provided yet!'}</Span>
              </Paragraph>
            </>
          )}
          {formData.type === 'soup' && (
            <Paragraph>
              Spiciness Level (1 - 10):{' '}
              <Span as='span'>{formData.spiciness_scale || 'Not provided yet!'}</Span>
            </Paragraph>
          )}
          {formData.type === 'sandwich' && (
            <Paragraph>
              Number of Slices of Bread:{' '}
              <Span as='span'>{formData.slices_of_bread || 'Not provided yet!'}</Span>
            </Paragraph>
          )}
        </>
      </SummaryWrapper>
      <ButtonsWrapper>
        <Button type='button'>Confirm</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
