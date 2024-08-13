export const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';

export const TYPE_INFO = {
    normal: {
        image: '/assets/img/normalDefault.png',
        color: 'gray',
        shadow: 'shadow-md shadow-gray'
    },
    fighting: {
        image: '/assets/img/fighting.png',
        color: 'red',
        shadow: 'shadow-[_0_5px_5px_rgb(248_113_113_/_100%)]'
    },
    flying: {
        image: '/assets/img/flying.png',
        color: 'blue',
        shadow: 'shadow-[_0_5px_5px_rgb(96_165_250_/_100%)]'
    },
    poison: {
        image: '/assets/img/rock.png',
        color: 'purple',
        shadow: 'shadow-[_0_5px_5px_rgb(192_132_252_/_100%)]'
    },
    ground: {
        image: '/assets/img/ground.png',
        color: 'yellow',
        shadow: 'shadow-[_0_5px_5px_rgb(250_204_21_/_100%)]'
    },
    rock: {
        image: '/assets/img/rock.png',
        color: 'gray',
        shadow: 'shadow-[_0_5px_5px_rgb(156_163_175_/_100%)]'
    },
    bug: {
        image: '/assets/img/bug.png',
        color: 'green',
        shadow: 'shadow-[_0_5px_5px_rgb(134_239_172_/_100%)]'
    },
    ghost: {
        image: '/assets/img/ghost.png',
        color: 'indigo',
        shadow: 'shadow-[_0_5px_5px_rgb(129_140_248_/_100%)]'
    },
    steel: {
        image: '/assets/img/steel.png',
        color: 'gray',
        shadow: 'shadow-[_0_5px_5px_rgb(156_163_175_/_100%)]'
    },
    fire: {
        image: '/assets/img/fire.png',
        color: 'red',
        shadow: 'shadow-[_0_5px_5px_rgb(248_113_113_/_100%)]'
    },
    water: {
        image: '/assets/img/water.png',
        color: 'blue',
        shadow: 'shadow-[_0_5px_5px_rgb(96_165_250_/_100%)]'
    },
    grass: {
        image: '/assets/img/grass.png',
        color: 'green',
        shadow: 'shadow-[_0_5px_5px_rgb(134_239_172_/_100%)]'
    },
    electric: {
        image: '/assets/img/electric.png',
        color: 'yellow',
        shadow: 'shadow-[_0_5px_5px_rgb(250_204_21_/_100%)]'
    },
    psychic: {
        image: '/assets/img/psychic.png',
        color: 'pink',
        shadow: 'shadow-[_0_5px_5px_rgb(244_114_182_/_100%)]'
    },
    ice: {
        image: '/assets/img/ice.png',
        color: 'teal',
        shadow: 'shadow-[_0_5px_5px_rgb(45_212_191_/_100%)]'
    },
    dragon: {
        image: '/assets/img/dragon.png',
        color: 'purple',
        shadow: 'shadow-[_0_5px_5px_rgb(192_132_252_/_100%)]'
    },
    dark: {
        image: '/assets/img/dark.png',
        color: 'gray',
        shadow: 'shadow-[_0_5px_5px_rgb(156_163_175_/_100%)]'
    },
    fairy: {
        image: '/assets/img/fairy.png',
        color: 'pink',
        shadow: 'shadow-[_0_5px_5px_rgb(244_114_182_/_100%)]'
    },
    stellar: {
        image: '/assets/img/stellar.png',
        color: 'blue',
        shadow: 'shadow-[_0_5px_5px_rgb(96_165_250_/_100%)]'
    },
    unknown: {
        image: '/assets/img/normalDefault.png',
        color: 'gray',
        shadow: 'shadow-[_0_5px_5px_rgb(156_163_175_/_100%)]'
    },
};

export function getTypeInfo(type) {
    return TYPE_INFO[type] || { image: '/assets/img/normalDefault.png', color: 'gray', shadow: 'shadow-[_0_5px_5px_rgb(156_163_175_/_100%)]' };
}
