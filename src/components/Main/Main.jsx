import { MainBg } from './Main.styled';
import { HelloTitle, Text, TextBox } from './Main.styled';

const Main = () => {
  return (
    <MainBg>
      <TextBox>
        <HelloTitle>Hello!</HelloTitle>
        <Text>
          I am your faithful assistant , your phone book!
        </Text>
      </TextBox>
    </MainBg>
  );
};

export default Main;