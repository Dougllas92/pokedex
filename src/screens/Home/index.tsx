import React, { useEffect, useState } from 'react';

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
  InputSearch,
} from './styles';

//import components
import { SizedBox } from '../../components/SizedBox';
import { Card } from '../../components/Card';
import { Load } from '../../components/Load';


//import svg's
import Generation from '../../assets/icons/generation.svg';
import Sort from '../../assets/icons/sort.svg';
import Filter from '../../assets/icons/filter.svg';
import api from '../../services/api';
import { FlatList } from 'react-native';

interface PokemonProps {
  id: string;
  name: string;
  image: string;
  types: string[];
}

interface DataProps {
  name: string;
  url: string;
}


export function Home() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [nextPage, setNextPage] = useState<string>('pokemon-form?limit=10');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);


  async function fetchData() {
    setLoadingMore(true);

    console.log(nextPage);
    if (loadingMore)
      return;

    const { data } = await api.get(nextPage);
    setNextPage(data.next);
    await loadingPokemon(data.results);
    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  async function loadingPokemon(data: Array<DataProps>) {
    const pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const { data } = await api.get(pokemon.url);
        const newUrl = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon-form/', '').replace('/', '');

        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${newUrl}.svg`;

        const pokemonCard = {
          id: data.id,
          name: data.name,
          types: data.types.map((i: any) => i.type.name),
          image,
        }

        return pokemonCard;
      })
    )
    setPokemons([...pokemons, ...pokemonData]);
  }

  if (loading)
    return <Load width={150} height={106} />

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

      <FlatList
        data={pokemons}
        style={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card data={item} />
          )
        }}
        onEndReachedThreshold={0.1}
        onEndReached={fetchData}
        ListFooterComponent={
          loadingMore ? <Load width={50} height={35} /> : <></>
        }
      />
    </Wrapper >
  )
}