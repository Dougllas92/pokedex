import React from 'react';
import {
  Wrapper,
  Gradient,
  Header,
  GrandientPokeball,
  Pokeball,
  Icons,
  Title,
  Text,
  InputView,
  InputSearch
} from './styles';

import theme from '../../styles/theme';

//import components
import { SizedBox } from '../../components/SizedBox';

//import svg's
import Generation from '../../assets/icons/generation.svg';
import Sort from '../../assets/icons/sort.svg';
import Filter from '../../assets/icons/filter.svg';
import Search from '../../assets/icons/search.svg';

export function Home() {
  return (
    <Wrapper>
      <Pokeball />
      <GrandientPokeball>
        <Gradient>
          <Header>
            <SizedBox height={40} />
            <Icons>
              <Generation />
              <SizedBox width={20} />
              <Sort />
              <SizedBox width={20} />
              <Filter />
            </Icons>

            <SizedBox height={35} />
            <Title>Pokédex</Title>

            <SizedBox height={10} />
            <Text>Search for Pokémon by name or using the National Pokédex number.</Text>

            <SizedBox height={25} />

            <InputView>
              <InputSearch
                placeholder='What Pokémon are you looking for?'
                placeholderTextColor='#747476'
                inlineImageLeft='search_icon'
                inlineImagePadding={25}
              />
            </InputView>

          </Header>
        </Gradient>
      </GrandientPokeball>
    </Wrapper>
  )
}