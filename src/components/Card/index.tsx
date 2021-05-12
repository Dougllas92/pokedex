import React from 'react';
import { TouchableOpacityProps, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { SizedBox } from '../SizedBox';

import { gradient } from '../../styles/theme';

import {
  Info,
  Pokeball,
  Wrapper,
  Ball,
  GrandientPokeball,
  PokemonNumber,
  PokemonName,
  PokemonTypes,
  Types,
  TypesText
} from './styles';

interface PokemonProps extends TouchableOpacityProps {
  data: {
    id: string;
    name: string;
    image: string;
    types: string[];
  }
}

const images = {
  badges: {
    bug: require(`../../assets/types/Badge/bug.png`),
    dragon: require(`../../assets/types/Badge/dragon.png`),
    electric: require(`../../assets/types/Badge/electric.png`),
    fairy: require(`../../assets/types/Badge/fairy.png`),
    fighting: require(`../../assets/types/Badge/fighting.png`),
    fire: require(`../../assets/types/Badge/fire.png`),
    flying: require(`../../assets/types/Badge/flying.png`),
    ghost: require(`../../assets/types/Badge/ghost.png`),
    grass: require(`../../assets/types/Badge/grass.png`),
    ground: require(`../../assets/types/Badge/ground.png`),
    ice: require(`../../assets/types/Badge/ice.png`),
    normal: require(`../../assets/types/Badge/normal.png`),
    poison: require(`../../assets/types/Badge/poison.png`),
    psychic: require(`../../assets/types/Badge/psychic.png`),
    rock: require(`../../assets/types/Badge/rock.png`),
    steel: require(`../../assets/types/Badge/steel.png`),
    vector: require(`../../assets/types/Badge/vector.png`),
    water: require(`../../assets/types/Badge/water.png`),
  }
}

export function Card({ data }: PokemonProps) {
  return (
    <>
      <SizedBox height={30} />
      <Wrapper bgType={data.types[0]} activeOpacity={1}>
        <Pokeball />
        <GrandientPokeball colors={gradient.[data.types[0]]} />
        <Ball />

        <Info>
          <PokemonNumber>{("#00" + data.id).slice(-4, -1) + ("#0" + data.id).slice(-1)}</PokemonNumber>
          <PokemonName>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</PokemonName>
          <PokemonTypes>
            {data.types.map((i, k) => (
              <Types bgType={i} key={k}>
                <Image source={images.badges.[i]} />
                <SizedBox width={5} />
                <TypesText >{i.charAt(0).toUpperCase() + i.slice(1)}</TypesText>
              </Types>
            ))
            }
          </PokemonTypes>
        </Info>
        <SvgFromUri
          uri={data.image}
          width={120}
          height={120}
          style={{
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}
        />
      </Wrapper>
    </>
  )
}