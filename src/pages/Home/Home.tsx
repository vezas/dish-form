import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Paragraph } from 'lib/components/Typography';
import { Button } from 'lib/components/Button';
import { paths } from 'lib/constants';
import { Wrapper } from './Home.styled';

export const Home: FC = () => {
  const navigate = useNavigate();
  const goToNextStep = () => navigate(paths.yourDish);

  return (
    <Wrapper>
      <Heading as='h2'>Welcome!</Heading>
      <Paragraph>To fill out the form about dish, please click the button bellow</Paragraph>
      <Button onClick={goToNextStep}>Fill out the form</Button>
    </Wrapper>
  );
};
