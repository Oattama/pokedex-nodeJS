const pokemon = require("../../file/pokemon");

module.exports = {
  countPokemon: async (calSkip, size) => {
    let checkAPI = true;
    let total = 0;
    let max = calSkip + size;
    const box = [];
    calSkip += 1;
    if (max > pokemon.length) {
      max = pokemon.length;
    }

    for (let i = calSkip; i <= max; i++) {
      const api = await fetch(`${process.env.POKEMONAPI_HOST}/pokemon/${i}`);

      const data = await api.json();
      if (api.ok) {
        try {
          let pokemon = {};
          total += 1;
          if (data.sprites.other.home.front_default !== null) {
            pokemon = {
              id: data.id,
              name: data.name,
              sprites: data.sprites.other.home.front_default,
            };
          } else {
            pokemon = {
              id: data.id,
              name: data.name,
            };
          }

          box.push(pokemon);
        } catch (error) {
          checkAPI = false;
          break;
        }
      } else {
        checkAPI = false;
        break;
      }
    }
    return {
      api: checkAPI,
      box: box,
      total: total,
    };
  },
  filterPokemon: async (calSkip, size, keyword, type) => {
    let total = 0;
    let checkAPI = false;
    let max = calSkip + size;
    const filterPokemon = [];
    const box = [];
    for (let i = 0; i < pokemon.length; i++) {
      if (keyword !== undefined) {
        if (
          keyword
            .toLowerCase()
            .includes(pokemon[i].name.slice(0, keyword.length))
        ) {
          filterPokemon.push(pokemon[i].id);
        }
      } else if (type !== undefined) {
        if (type.length > 1) {
          if (
            type[0].toLowerCase().includes(pokemon[i].type.slot1) &&
            type[1].toLowerCase().includes(pokemon[i].type.slot2)
          ) {
            console.log("1");
            filterPokemon.push(pokemon[i].id);
          }
        } else {
          for (let j = 0; j < type.length; j++) {
            let typeCheck = type[j];
            if (
              typeCheck.toLowerCase().includes(pokemon[i].type.slot1) ||
              typeCheck.toLowerCase().includes(pokemon[i].type.slot2)
            ) {
              filterPokemon.push(pokemon[i].id);
            }
          }
        }
      }
    }
    for (let j = calSkip; j < max; j++) {
      if (j >= filterPokemon.length) {
        break;
      } else {
        const api = await fetch(
          `${process.env.POKEMONAPI_HOST}/pokemon/${filterPokemon[j]}`
        );

        const data = await api.json();

        if (api.ok) {
          try {
            let pokemon = {};
            total += 1;
            if (data.sprites.other.home.front_default !== null) {
              pokemon = {
                id: data.id,
                name: data.name,
                sprites: data.sprites.other.home.front_default,
              };
            } else {
              pokemon = {
                id: data.id,
                name: data.name,
              };
            }
            checkAPI = true;
            box.push(pokemon);
          } catch (error) {
            checkAPI = false;
            console.log(error);
          }
        } else {
          checkAPI = false;
        }
      }
    }
    return {
      api: checkAPI,
      box: box,
      currentCount: total,
      total: filterPokemon.length,
    };
  },

  countItem: async (calSkip, size) => {
    let checkApi = true;
    let total = 0;
    let max = calSkip + size;
    calSkip += 1;
    const box = [];

    for (let i = calSkip; i <= max; i++) {
      const api = await fetch(`${process.env.POKEMONAPI_HOST}/item/${i}`);

      const data = await api.json();
      if (api.ok) {
        try {
          let item = {};
          total += 1;
          if (data.sprites.default !== null) {
            item = {
              name: data.name,
              sprites: data.sprites.default,
            };
          } else {
            item = {
              name: data.name,
            };
          }
          box.push(item);
        } catch (err) {
          checkApi = false;
          break;
        }
      } else {
        checkApi = false;
        break;
      }
    }
    return {
      api: checkApi,
      box: box,
      total: total,
    };
  },
  countFavorite: async (calSkip, size, favorite) => {
    let checkAPI = true;
    let total = 0;
    let max = calSkip + size;
    const box = [];
    if (max > favorite.length) {
      max = favorite.length;
    } else if (favorite.length < size) {
      max = favorite.length;
    } else if (favorite.length > size) {
      max = calSkip + size;
    } else if (favorite.length > size && calSkip > 0) {
      max = favorite.length;
    }

    for (let i = calSkip; i < max; i++) {
      const api = await fetch(
        `${process.env.POKEMONAPI_HOST}/pokemon/${favorite[i].poke_id}`
      );

      const data = await api.json();

      if (api.ok) {
        try {
          let pokemon = {};
          total += 1;
          if (data.sprites.other.home.front_default !== null) {
            pokemon = {
              id: data.id,
              name: data.name,
              sprites: data.sprites.other.home.front_default,
            };
          } else {
            pokemon = {
              id: data.id,
              name: data.name,
            };
          }

          box.push(pokemon);
        } catch (error) {
          checkAPI = false;
          break;
        }
      } else {
        checkAPI = false;
        break;
      }
    }

    return {
      api: checkAPI,
      box: box,
      total: total,
    };
  },
};
