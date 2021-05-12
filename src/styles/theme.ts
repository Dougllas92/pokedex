const colors = {
  primary:
  {
    bug: {
      type: '#8CB330',
      backgroundType: '#8BD674'
    },
    dark: {
      type: '#58575F',
      backgroundType: '#6F6E78'
    },
    dragon: {
      type: '#0F6AC0',
      backgroundType: '#7383B9'
    },
    electric: {
      type: '#EED535',
      backgroundType: '#F2CB55'
    },
    fairy: {
      type: '#ED6EC7',
      backgroundType: '#EBA8C3'
    },
    fighting: {
      type: '#D04164',
      backgroundType: '#EB4971'
    },
    fire: {
      type: '#FD7D24',
      backgroundType: '#FFA756'
    },
    flying: {
      type: '#748FC9',
      backgroundType: '#83A2E3'
    },
    ghost: {
      type: '#556AAE',
      backgroundType: '#8571BE'
    },
    grass: {
      type: '#62B957',
      backgroundType: '#8BBE8A'
    },
    ground: {
      type: '#DD7748',
      backgroundType: '#F78551'
    },
    ice: {
      type: '#61CEC0',
      backgroundType: '#91D8DF'
    },
    normal: {
      type: '#9DA0AA',
      backgroundType: '#B5B9C4'
    },
    poison: {
      type: '#A552CC',
      backgroundType: '#9F6E97'
    },
    psychic: {
      type: '#EA5D60',
      backgroundType: '#FF6568'
    },
    rock: {
      type: '#BAAB82',
      backgroundType: '#D4C294'
    },
    steel: {
      type: '#417D9A',
      backgroundType: '#4C91B2'
    },
    water: {
      type: '#4A90DA',
      backgroundType: '#58ABF6'
    }
  },
  background: {
    white: '#FFFFFF',
    defaultInput: '#F2F2F2',
    pressedInput: '#E2E2E2',
    modal: '0,0,0,0.25'
  },
  text: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#747476',
    number: '23,23,27,0.6'
  }
}

const backgroundType = {
  bug: '#8BD674',
  dark: '#6F6E78',
  dragon: '#7383B9',
  electric: '#F2CB55',
  fairy: '#EBA8C3',
  fighting: '#EB4971',
  fire: '#FFA756',
  flying: '#83A2E3',
  ghost: '#8571BE',
  grass: '#8BBE8A',
  ground: '#F78551',
  ice: '#91D8DF',
  normal: '#B5B9C4',
  poison: '#9F6E97',
  psychic: '#FF6568',
  rock: '#D4C294',
  steel: '#4C91B2',
  water: '#58ABF6'
}

const typography = {
  title: {
    size: '32px',
    line: '32px',
    style: 'sf-pro-display-bold'
  },
  name: {
    size: '26px',
    line: '26px',
    style: 'sf-pro-display-bold'
  },
  filterTitle: {
    size: '16px',
    line: '16px',
    style: 'sf-pro-display-bold'
  },
  description: {
    size: '14px',
    line: '14px',
    style: 'sf-pro-display-regular'
  },
  pokemonNumber: {
    size: '12px',
    line: '12px',
    style: 'sf-pro-display-bold'
  },
  pokemonType: {
    size: '12px',
    line: '12px',
    style: 'sf-pro-display-medium'
  },
}

const gradient = {
  pokeball: ['rgba(245,245,245,0.97)', 'rgba(255,255,255,1)'],
  bug: ['#8BD67499', '#8BD674'],
  dark: ['#6F6E7899', '#6F6E78'],
  dragon: ['#7383B999', '#7383B9'],
  electric: ['#F2CB5599', '#F2CB55'],
  fairy: ['#EBA8C399', '#EBA8C3'],
  fighting: ['#EB497199', '#EB4971'],
  fire: ['#FFA75699', '#FFA756'],
  flying: ['#83A2E399', '#83A2E3'],
  ghost: ['#8571BE99', '#8571BE'],
  grass: ['#8BBE8A99', '#8BBE8A'],
  ground: ['#F7855199', '#F78551'],
  ice: ['#91D8DF99', '#91D8DF'],
  normal: ['#B5B9C499', '#B5B9C4'],
  poison: ['#9F6E9799', '#9F6E97'],
  psychic: ['#FF656899', '#FF6568'],
  rock: ['#D4C29499', '#D4C294'],
  steel: ['#4C91B299', '#4C91B2'],
  water: ['#58ABF699', '#58ABF6']
}

export { colors, typography, gradient, backgroundType };