import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, gradient, typography } from '../../styles/theme';
import PokeballSvg from '../../assets/patterns/pokeball-black.svg';


interface CardProps {
  bgType: string;
}

export const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Gradient = styled.View``;

export const GrandientPokeball = styled(LinearGradient).attrs({
  colors: gradient.pokeball
})``;

export const Pokeball = styled(PokeballSvg).attrs({
  width: '100%',
  height: '100%',
  position: 'absolute',
  bottom: '50%'
})``;

export const Header = styled.View`
  padding: 0px 20px;
`;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${typography.title.size};
  line-height: ${typography.title.line};
  font-family: ${typography.title.style};
  color: ${colors.text.black};
`;

export const Text = styled.Text`
  font-size: ${typography.description.size};
  line-height: ${typography.description.line};
  font-family: ${typography.description.style};
  color: ${colors.text.gray};
`;

export const InputView = styled.View`
  flex-direction: row;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  background-color: ${colors.background.defaultInput};
  border-radius: 10px;
  padding: 20px 20px;
  font-size: ${typography.description.size};
  line-height: ${typography.description.line};
  font-family: ${typography.description.style};
  color: ${colors.text.black};
`;

export const CardPokemon = styled.View<CardProps>`
  width: 100%;
  border-radius: 10px;
  background-color: ${props => colors.primary.[props.bgType].backgroundType};
  padding: 20px;

`;

export const CardInfo = styled.View`
  padding: 20px;
`;

export const CardNumber = styled.Text`
  font-size: ${typography.pokemonNumber.size};
  font-family: ${typography.pokemonNumber.style};
  color: ${colors.text.black};
`;

export const CardTitle = styled.Text`
  font-size: ${typography.name.size};
  font-family: ${typography.name.style};
  color: ${colors.text.white};
`;

export const Sprites = styled.View`
  flex-direction: row;
`

export const SpritesCard = styled.View<CardProps>`
  flex-direction: row;
  background-color: ${props => colors.primary.[props.bgType].type};
  padding: 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

export const SpritesText = styled.Text`
  font-size: ${typography.pokemonType.size};
  font-family: ${typography.pokemonType.style};
  color: ${colors.text.white};
`;

export const CardImg = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const CardViewPokeball = styled.View``;

export const CardGrandientPokeball = styled(LinearGradient).attrs({
  colors: gradient.pokeball
})``;