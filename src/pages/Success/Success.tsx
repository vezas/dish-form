import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonsWrapper, Heading, Paragraph } from 'lib/components/ui';
import ApprovedIcon from 'assets/approved-icon.svg';
import { Wrapper } from './Success.styled';

export const Success: FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Heading as='h2'>Success</Heading>
      <Paragraph>Your form is sent successfully.</Paragraph>
      <img src={ApprovedIcon} alt='' />
      <ButtonsWrapper>
        <Button type='button' onClick={() => navigate(import.meta.env.BASE_URL)}>
          Go to home page
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
