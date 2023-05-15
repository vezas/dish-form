import { FC, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AccentedParagraph as Span,
  Button,
  ButtonsWrapper,
  Heading,
  Paragraph,
  StyledErrorMessage,
  SubPageWrapper as Wrapper,
  SummaryWrapper
} from 'lib/components/ui';
import { FormContext } from 'lib/store';
import { usePostForm } from 'lib/hooks';
import { hasEmptyValues } from 'lib/helpers';
import { DishTypes } from 'lib/constants';

export const Summary: FC = () => {
  const { mutate, isLoading, isError, error } = usePostForm();
  const { formData } = useContext(FormContext);
  const { name, preparation_time, type, spiciness_scale, slices_of_bread, diameter, no_of_slices } =
    formData;

  if (isError && error instanceof Error) {
    toast.error(error.message);
  }

  //eslint-disable-next-line
  const customError: any = isError && error;
  console.log(customError);

  const typeDetailsValidation = () => {
    if (type === DishTypes.Soup) {
      return hasEmptyValues({ spiciness_scale });
    }

    if (type === DishTypes.Sandwich) {
      return hasEmptyValues({ slices_of_bread });
    }

    if (type === DishTypes.Pizza) {
      return hasEmptyValues({ diameter, no_of_slices });
    }
  };

  const buttonDisabled =
    hasEmptyValues({ name, preparation_time, type }) || typeDetailsValidation();

  return (
    <>
      <Wrapper>
        <Heading as='h2'>Summary</Heading>
        <Paragraph>Check provided data before confirming.</Paragraph>
        <SummaryWrapper>
          <>
            <Paragraph>
              Name: <Span as='span'>{name || 'Not provided yet!'}</Span>
            </Paragraph>
            <Paragraph>
              Preparation Time: <Span as='span'>{preparation_time || 'Not provided yet!'}</Span>
            </Paragraph>
            <Paragraph>
              Type: <Span as='span'>{type || 'Not provided yet!'}</Span>
            </Paragraph>
            {type === DishTypes.Pizza && (
              <>
                <Paragraph>
                  Number of Slices: <Span as='span'>{no_of_slices || 'Not provided yet!'}</Span>
                </Paragraph>
                <Paragraph>
                  Diameter: <Span as='span'>{diameter || 'Not provided yet!'}</Span>
                </Paragraph>
              </>
            )}
            {type === DishTypes.Soup && (
              <Paragraph>
                Spiciness Level (1 - 10):{' '}
                <Span as='span'>{spiciness_scale || 'Not provided yet!'}</Span>
              </Paragraph>
            )}
            {type === DishTypes.Sandwich && (
              <Paragraph>
                Number of Slices of Bread:{' '}
                <Span as='span'>{slices_of_bread || 'Not provided yet!'}</Span>
              </Paragraph>
            )}
          </>
        </SummaryWrapper>
        {customError &&
          customError.response &&
          //eslint-disable-next-line
          Object.entries(customError.response.data).map((error: any) => (
            <StyledErrorMessage key={error[0]}>
              {error[0]} - {error[1]}
            </StyledErrorMessage>
          ))}
        <ButtonsWrapper>
          <Button
            type='button'
            disabled={buttonDisabled || isLoading}
            onClick={() => mutate(formData)}
          >
            {!isLoading ? 'Confirm' : 'Sending'}
          </Button>
        </ButtonsWrapper>
      </Wrapper>
      <ToastContainer position='bottom-center' />
    </>
  );
};
