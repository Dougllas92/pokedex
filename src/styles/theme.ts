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
    size: '16px',
    line: '16px',
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
  pokeball: ['rgba(245,245,245,0.97)', 'rgba(255,255,255,1)']
}

export default { colors, typography, gradient };