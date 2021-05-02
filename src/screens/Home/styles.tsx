import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import theme from '../../styles/theme';


import PokeballSvg from '../../assets/patterns/pokeball.svg';




export const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
`;


export const Gradient = styled.View``;

export const GrandientPokeball = styled(LinearGradient).attrs({
  colors: theme.gradient.pokeball
})``;

export const Pokeball = styled(PokeballSvg).attrs({
  width: '100%',
  height: '100%',
  position: 'absolute',
  bottom: '50%'
})``;

export const Header = styled.View`
  padding: 0px 40px;
`;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${theme.typography.title.size};
  line-height: ${theme.typography.title.line};
  font-family: ${theme.typography.title.style};
  color: ${theme.colors.text.black};
`;

export const Text = styled.Text`
  font-size: ${theme.typography.description.size};
  line-height: ${theme.typography.description.line};
  font-family: ${theme.typography.description.style};
  color: ${theme.colors.text.gray};
`;

export const InputView = styled.View`
  flex-direction: row;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  background-color: ${theme.colors.background.defaultInput};
  border-radius: 10px;
  padding: 20px 25px;
  font-size: ${theme.typography.description.size};
  line-height: ${theme.typography.description.line};
  font-family: ${theme.typography.description.style};
  color: ${theme.colors.text.black};
`;


