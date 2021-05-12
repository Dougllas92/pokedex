import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import PokeballSvg from '../../assets/patterns/pokeball.svg';
import BallSvg from '../../assets/patterns/6x3.svg';
import { colors, typography, backgroundType } from '../../styles/theme';

interface CardProps {
  bgType: string;
}

export const Wrapper = styled.TouchableOpacity<CardProps>`
  background-color: ${props => backgroundType.[props.bgType]};
  width: 100%;
  height: 115px;
  border-radius: 10px;
`;

export const Ball = styled(BallSvg).attrs({
  position: 'absolute',
  width: '25%',
  right: '55%',
  top: -10
})``;



//#region gradient pokeball
export const Pokeball = styled(PokeballSvg).attrs({
  width: '100%',
  height: '100%',
  position: 'absolute',
  right: '-35%',
})``;


export const Gradient = styled.View``;

export const GrandientPokeball = styled(LinearGradient).attrs<CardProps>({
  start: { x: 3, y: 0 },
  end: { x: 0, y: 1 }
})`
  flex:1;
  width: 36%;
  position: relative;
  left: 64%;
  border-radius: 10px;
`;
//#endregion

export const Info = styled.View`
  position: absolute;
  padding: 20px;
`;

export const PokemonNumber = styled.Text`
  font-size: ${typography.pokemonNumber.size};
  font-family: ${typography.pokemonNumber.style};
  color: #00000060;
`;

export const PokemonName = styled.Text`
  font-size: ${typography.name.size};
  font-family: ${typography.name.style};
  color: ${colors.text.white};
`;

export const PokemonTypes = styled.View`
  flex-direction: row;
`;

export const Types = styled.View<CardProps>`
  flex-direction: row;
  background-color: ${props => colors.primary.[props.bgType].type};
  padding: 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

export const TypesText = styled.Text`
  font-size: ${typography.pokemonType.size};
  font-family: ${typography.pokemonType.style};
  color: ${colors.text.white};
`;

export const Image = styled.View``;