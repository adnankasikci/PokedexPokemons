
import { POKEMON_API } from "./constants.js";
import { Pokedex } from "./pokedex.js";
import { capitalizeFirstLetter } from "./utils.js";
import { getTypeInfo } from './constants.js';


///?limit=1302
const PokedexBag = new Pokedex(POKEMON_API);

window.addEventListener('load', pokemonsRender);

async function pokemonsRender(){

  const {results: PokedexBagResult} = await PokedexBag.fetchData();
  // console.log(PokedexBagResult);
  PokedexBagResult.forEach((pokemon, index) => { createPokemon(pokemon, index + 1); });

}




// Pokemonları Oluştur

async function createPokemon(pokemonData, index) {
    const pokemonCards = document.querySelector(".pokemonCards_Box");

    const { name, url } = pokemonData;

    const PokedexBags = new Pokedex(url);
    const Pokemon = await PokedexBags.fetchData();

    const { stats, height, weight, sprites, types} = Pokemon;
    const generationVBlackWhite = sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];

    const pokemonType = types[0].type.name;
    const { image, color, shadow } = getTypeInfo(pokemonType);
    // console.log(Pokemon);

    const imagePath = generationVBlackWhite || sprites.front_shiny || "/assets/svg/pokeball.svg";

    function getClassName() {
      if (imagePath === generationVBlackWhite || imagePath === '/assets/svg/pokeball.svg') {
        return 'w-20';
      } else {
        return 'w-36';
      }
    }

    const pokemonCard = document.createElement("div");
    pokemonCard.className = "flex items-center justify-center pokemonCards";

    pokemonCard.innerHTML = `
        <div class="overflow-hidden rounded-md text-slate-800 pokemonHoloWrapper pokemonCard">
          <div class="w-64 h-96"></div>
          <div class="absolute top-0 bottom-0 left-0 right-0">
              <div class="relative w-full h-full overflow-hidden">
                  <div
                      class="absolute top-0 left-0 right-0 w-full py-[1.4rem] bg-gradient-to-l p-5 to-${color}-200 via-${color}-400 from-${color}-300 -z-10 ${shadow}">
                  </div>
                  <div class="flex items-center justify-between pt-[12px] pr-6 text-lg ps-7 ">
                      <div class="text-base font-bold [text-shadow:_1px_0px_0px_rgb(255_255_255_/_1)] line-clamp-1 overflow-hidden">${capitalizeFirstLetter(name)}
                          GX</div>
                      <div class="flex items-center space-x-1">
                          <div class="flex flex-row items-center justify-center gap-2">
                              <div class="text-[.625rem] font-bold "><span>HP</span></div>
                              <span class="text-xl">${stats[0].base_stat}</span>
                          </div>
                          <div
                              class="flex items-center justify-center w-4 h-4  text-white rounded-full bg-gradient-to-t to-rose-500 from-rose-900">
                              <i class="mb-[.015px] text-[.5rem] fas fa-heart"></i>
                          </div>
                      </div>
                  </div>

                  <div class="relative w-full h-full overflow-hidden -z-20">
                      <img class="object-cover w-full h-full" src="${image}" alt="">
                      <div class="absolute top-0 left-0 start-0 w-full flex ${imagePath === generationVBlackWhite ? "pt-4" : "pt-0"}  justify-center mt-6">
                          <div class="inline">
                            <img class="${getClassName()}" src="${imagePath}" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 z-30">
                      <div class="p-5">
                          <div>
                              <div class="relative flex items-center justify-between px-2 text-sm">
                                  <div class="absolute left-0 flex items-center gap-1 px-1">
                                      <div
                                          class="flex items-center justify-center w-4 h-4 mb-1 text-black rounded-full bg-gradient-to-br to-slate-300 from-white border border-slate-500 shadow-[_0px_0px_20px_rgb(255_255_255_/_100%)]">
                                          <i class="mb-[.015px] text-[.5rem] fas fa-atom"></i>
                                      </div>
                                  </div>
                                  <div class="flex items-end justify-end w-full">
                                      <div class="flex justify-between w-8/12">
                                          <div
                                              class="[text-shadow:_2px_0px_2px_rgb(255_255_255_/_1)] openSans font-bold">
                                              Defense
                                          </div>
                                          <div
                                              class="[text-shadow:_2px_0px_2px_rgb(255_255_255_/_1)] openSans font-bold">
                                              ${stats[3].base_stat}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <p class="pt-1 pb-3 text-[.6rem] [text-shadow:_1px_1px_0px_rgb(255_255_255_/_1)]">
                                  This pokemon does ${stats[3].base_stat} defense to itself. </p>
                          </div>
                          <div>
                              <div class="relative flex items-center justify-between px-2 text-sm">
                                  <div class="absolute left-0 flex items-center gap-1 px-1">
                                      <div
                                          class="flex items-center justify-center w-4 h-4 mb-1 text-black rounded-full bg-gradient-to-br to-yellow-500 from-white border border-yellow-500 shadow-[_0px_0px_20px_rgb(255_255_255_/_100%)]">
                                          <i class="mb-[.015px] text-[.5rem] fas fa-sun"></i>
                                      </div>
                                      <div
                                          class="flex items-center justify-center w-4 h-4 mb-1 text-black rounded-full bg-gradient-to-br to-yellow-500 from-white border border-yellow-500 shadow-[_0px_0px_20px_rgb(255_255_255_/_100%)]">
                                          <i class="mb-[.015px] text-[.5rem] fas fa-sun"></i>
                                      </div>
                                  </div>
                                  <div class="flex items-end justify-end w-full">
                                      <div class="flex justify-between w-8/12">
                                          <div
                                              class="[text-shadow:_2px_0px_2px_rgb(255_255_255_/_1)] openSans font-bold">
                                              Attack
                                          </div>
                                          <div
                                              class="[text-shadow:_2px_0px_2px_rgb(255_255_255_/_1)] openSans font-bold">
                                              ${stats[2].base_stat}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <p class="pt-1 pb-3 text-[.6rem] [text-shadow:_1px_1px_0px_rgb(255_255_255_/_1)]">
                                  This attack does ${stats[2].base_stat} damage times the amount to Energy attached to this
                                  Pokemon. </p>
                          </div>
                          <div>
                              <div
                                  class="relative flex items-center justify-between px-2 py-1 text-sm rounded-tl-full rounded-tr-full rounded-br-full bg-gradient-to-r to-black via-cyan-500 from-black shadow-[_1px_1px_3px_rgb(255_255_255_/_100%)]">
                                  <div class="absolute bottom-0 left-0 flex items-center gap-[2px] px-1 py-1">
                                      <div
                                          class="flex items-center justify-center w-4 h-4  text-black rounded-full bg-gradient-to-br to-yellow-500 from-white border border-yellow-500 shadow-[_0px_0px_20px_rgb(255_255_255_/_100%)]">
                                          <i class=" text-[.5rem] fas fa-sun"></i>
                                      </div>
                                      <div
                                          class="flex items-center justify-center w-4 h-4 text-black rounded-full bg-gradient-to-br to-slate-300 from-white border border-slate-500 shadow-[_0px_0px_20px_rgb(255_255_255_/_100%)]">
                                          <i class=" text-[.5rem] fas fa-atom"></i>
                                      </div>
                                  </div>
                                  <div class="flex items-end justify-end w-full text-xs ">
                                      <div class="flex justify-between w-8/12 text-white">
                                          <div class="italic font-semibold openSans">
                                              Tail Break GX
                                          </div>
                                          <div class="openSans">
                                            ${stats[3].base_stat}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <p
                                  class="mt-2 p-2 rounded-sm border font-semibold openSans italic border-white border-opacity-50  text-white text-[.75rem] bg-white bg-opacity-10 backdrop-blur-sm">
                                  - - W ${weight} | Height ${height} | SPEED ${stats[5].base_stat} !</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full h-full p-[5px] ">
              <div
                  class="w-full h-full border-[.20rem] border-black rounded-md shadow-[_0_0_4px_rgb(113_63_18/_100%)] ">
              </div>
          </div>
          <div class="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full rounded-md">
              <div class="w-full h-full border-[.8rem] border-white border-solid">
              </div>
          </div>
            <div class="pokemonHolo">
                <div class="pokemonHoloBefore"></div>
            </div>
            <div class="pokemonHolo"></div>
        </div>
    `;

    pokemonCards.appendChild(pokemonCard);

    // Re-attach the event listeners for the newly added card
    attachEventListenersToCard(pokemonCard);
}



// Pokemonları Ara

const searchInput = document.querySelector("#pokemonSearch");

searchInput.addEventListener("input", async () => {

  document.querySelectorAll(".pokemonCards").forEach(card => card.remove());

  const filteredPokemons = await PokedexBag.findPokemonName(searchInput.value);

  filteredPokemons.forEach(createPokemon);
});


// Yeni Pokemonları Yükle

const loadMoreBtn = document.querySelector("#loadMoreBtn");

loadMoreBtn.addEventListener('click', async () => {

  const pokemonCards = document.querySelector(".pokemonCards_Box");

  const morePokemon = await PokedexBag.loadMore();
  pokemonCards.innerHTML = '';
  pokemonsRender();
  console.log(morePokemon);
});























































