import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading, Paragraph } from 'lib/components/ui';
import { paths } from 'lib/constants';
import { Wrapper } from './Home.styled';

export const Home: FC = () => {
  const navigate = useNavigate();
  const goToNextStep = () => navigate(paths.yourDish);

  return (
    <Wrapper>
      <Heading as='h2'>Welcome!</Heading>
      <Paragraph>To fill out the form about dish, please click the button bellow</Paragraph>
      <Button type='button' onClick={goToNextStep}>
        Fill out the form
      </Button>
    </Wrapper>
  );
};
