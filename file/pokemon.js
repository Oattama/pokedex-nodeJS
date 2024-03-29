const pokemon = [ 
{ id: 1, name: 'bulbasaur', type: { slot1: 'grass', slot2: 'poison' } },
{ id: 2, name: 'ivysaur', type: { slot1: 'grass', slot2: 'poison' } },
{ id: 3, name: 'venusaur', type: { slot1: 'grass', slot2: 'poison' } },
{ id: 4, name: 'charmander', type: { slot1: 'fire' } },
{ id: 5, name: 'charmeleon', type: { slot1: 'fire' } },
{ id: 6, name: 'charizard', type: { slot1: 'fire', slot2: 'flying' } },
{ id: 7, name: 'squirtle', type: { slot1: 'water' } },
{ id: 8, name: 'wartortle', type: { slot1: 'water' } },
{ id: 9, name: 'blastoise', type: { slot1: 'water' } },
{ id: 10, name: 'caterpie', type: { slot1: 'bug' } },
{ id: 11, name: 'metapod', type: { slot1: 'bug' } },
{ id: 12, name: 'butterfree', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 13, name: 'weedle', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 14, name: 'kakuna', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 15, name: 'beedrill', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 16, name: 'pidgey', type: { slot1: 'normal', slot2: 'flying' } },
{
  id: 17,
  name: 'pidgeotto',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 18, name: 'pidgeot', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 19, name: 'rattata', type: { slot1: 'normal' } },
{ id: 20, name: 'raticate', type: { slot1: 'normal' } },
{ id: 21, name: 'spearow', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 22, name: 'fearow', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 23, name: 'ekans', type: { slot1: 'poison' } },
{ id: 24, name: 'arbok', type: { slot1: 'poison' } },
{ id: 25, name: 'pikachu', type: { slot1: 'electric' } },
{ id: 26, name: 'raichu', type: { slot1: 'electric' } },
{ id: 27, name: 'sandshrew', type: { slot1: 'ground' } },
{ id: 28, name: 'sandslash', type: { slot1: 'ground' } },
{ id: 29, name: 'nidoran-f', type: { slot1: 'poison' } },
{ id: 30, name: 'nidorina', type: { slot1: 'poison' } },
{
  id: 31,
  name: 'nidoqueen',
  type: { slot1: 'poison', slot2: 'ground' }
},
{ id: 32, name: 'nidoran-m', type: { slot1: 'poison' } },
{ id: 33, name: 'nidorino', type: { slot1: 'poison' } },
{
  id: 34,
  name: 'nidoking',
  type: { slot1: 'poison', slot2: 'ground' }
},
{ id: 35, name: 'clefairy', type: { slot1: 'fairy' } },
{ id: 36, name: 'clefable', type: { slot1: 'fairy' } },
{ id: 37, name: 'vulpix', type: { slot1: 'fire' } },
{ id: 38, name: 'ninetales', type: { slot1: 'fire' } },
{
  id: 39,
  name: 'jigglypuff',
  type: { slot1: 'normal', slot2: 'fairy' }
},
{
  id: 40,
  name: 'wigglytuff',
  type: { slot1: 'normal', slot2: 'fairy' }
},
{ id: 41, name: 'zubat', type: { slot1: 'poison', slot2: 'flying' } },
{ id: 42, name: 'golbat', type: { slot1: 'poison', slot2: 'flying' } },
{ id: 43, name: 'oddish', type: { slot1: 'grass', slot2: 'poison' } },
{ id: 44, name: 'gloom', type: { slot1: 'grass', slot2: 'poison' } },
{
  id: 45,
  name: 'vileplume',
  type: { slot1: 'grass', slot2: 'poison' }
},
{ id: 46, name: 'paras', type: { slot1: 'bug', slot2: 'grass' } },
{ id: 47, name: 'parasect', type: { slot1: 'bug', slot2: 'grass' } },
{ id: 48, name: 'venonat', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 49, name: 'venomoth', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 50, name: 'diglett', type: { slot1: 'ground' } },
{ id: 51, name: 'dugtrio', type: { slot1: 'ground' } },
{ id: 52, name: 'meowth', type: { slot1: 'normal' } },
{ id: 53, name: 'persian', type: { slot1: 'normal' } },
{ id: 54, name: 'psyduck', type: { slot1: 'water' } },
{ id: 55, name: 'golduck', type: { slot1: 'water' } },
{ id: 56, name: 'mankey', type: { slot1: 'fighting' } },
{ id: 57, name: 'primeape', type: { slot1: 'fighting' } },
{ id: 58, name: 'growlithe', type: { slot1: 'fire' } },
{ id: 59, name: 'arcanine', type: { slot1: 'fire' } },
{ id: 60, name: 'poliwag', type: { slot1: 'water' } },
{ id: 61, name: 'poliwhirl', type: { slot1: 'water' } },
{
  id: 62,
  name: 'poliwrath',
  type: { slot1: 'water', slot2: 'fighting' }
},
{ id: 63, name: 'abra', type: { slot1: 'psychic' } },
{ id: 64, name: 'kadabra', type: { slot1: 'psychic' } },
{ id: 65, name: 'alakazam', type: { slot1: 'psychic' } },
{ id: 66, name: 'machop', type: { slot1: 'fighting' } },
{ id: 67, name: 'machoke', type: { slot1: 'fighting' } },
{ id: 68, name: 'machamp', type: { slot1: 'fighting' } },
{
  id: 69,
  name: 'bellsprout',
  type: { slot1: 'grass', slot2: 'poison' }
},
{
  id: 70,
  name: 'weepinbell',
  type: { slot1: 'grass', slot2: 'poison' }
},
{
  id: 71,
  name: 'victreebel',
  type: { slot1: 'grass', slot2: 'poison' }
},
{
  id: 72,
  name: 'tentacool',
  type: { slot1: 'water', slot2: 'poison' }
},
{
  id: 73,
  name: 'tentacruel',
  type: { slot1: 'water', slot2: 'poison' }
},
{ id: 74, name: 'geodude', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 75, name: 'graveler', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 76, name: 'golem', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 77, name: 'ponyta', type: { slot1: 'fire' } },
{ id: 78, name: 'rapidash', type: { slot1: 'fire' } },
{
  id: 79,
  name: 'slowpoke',
  type: { slot1: 'water', slot2: 'psychic' }
},
{ id: 80, name: 'slowbro', type: { slot1: 'water', slot2: 'psychic' } },
{
  id: 81,
  name: 'magnemite',
  type: { slot1: 'electric', slot2: 'steel' }
},
{
  id: 82,
  name: 'magneton',
  type: { slot1: 'electric', slot2: 'steel' }
},
{
  id: 83,
  name: 'farfetchd',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 84, name: 'doduo', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 85, name: 'dodrio', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 86, name: 'seel', type: { slot1: 'water' } },
{ id: 87, name: 'dewgong', type: { slot1: 'water', slot2: 'ice' } },
{ id: 88, name: 'grimer', type: { slot1: 'poison' } },
{ id: 89, name: 'muk', type: { slot1: 'poison' } },
{ id: 90, name: 'shellder', type: { slot1: 'water' } },
{ id: 91, name: 'cloyster', type: { slot1: 'water', slot2: 'ice' } },
{ id: 92, name: 'gastly', type: { slot1: 'ghost', slot2: 'poison' } },
{ id: 93, name: 'haunter', type: { slot1: 'ghost', slot2: 'poison' } },
{ id: 94, name: 'gengar', type: { slot1: 'ghost', slot2: 'poison' } },
{ id: 95, name: 'onix', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 96, name: 'drowzee', type: { slot1: 'psychic' } },
{ id: 97, name: 'hypno', type: { slot1: 'psychic' } },
{ id: 98, name: 'krabby', type: { slot1: 'water' } },
{ id: 99, name: 'kingler', type: { slot1: 'water' } },
{ id: 100, name: 'voltorb', type: { slot1: 'electric' } },
{ id: 101, name: 'electrode', type: { slot1: 'electric' } },
{
  id: 102,
  name: 'exeggcute',
  type: { slot1: 'grass', slot2: 'psychic' }
},
{
  id: 103,
  name: 'exeggutor',
  type: { slot1: 'grass', slot2: 'psychic' }
},
{ id: 104, name: 'cubone', type: { slot1: 'ground' } },
{ id: 105, name: 'marowak', type: { slot1: 'ground' } },
{ id: 106, name: 'hitmonlee', type: { slot1: 'fighting' } },
{ id: 107, name: 'hitmonchan', type: { slot1: 'fighting' } },
{ id: 108, name: 'lickitung', type: { slot1: 'normal' } },
{ id: 109, name: 'koffing', type: { slot1: 'poison' } },
{ id: 110, name: 'weezing', type: { slot1: 'poison' } },
{ id: 111, name: 'rhyhorn', type: { slot1: 'ground', slot2: 'rock' } },
{ id: 112, name: 'rhydon', type: { slot1: 'ground', slot2: 'rock' } },
{ id: 113, name: 'chansey', type: { slot1: 'normal' } },
{ id: 114, name: 'tangela', type: { slot1: 'grass' } },
{ id: 115, name: 'kangaskhan', type: { slot1: 'normal' } },
{ id: 116, name: 'horsea', type: { slot1: 'water' } },
{ id: 117, name: 'seadra', type: { slot1: 'water' } },
{ id: 118, name: 'goldeen', type: { slot1: 'water' } },
{ id: 119, name: 'seaking', type: { slot1: 'water' } },
{ id: 120, name: 'staryu', type: { slot1: 'water' } },
{
  id: 121,
  name: 'starmie',
  type: { slot1: 'water', slot2: 'psychic' }
},
{
  id: 122,
  name: 'mr-mime',
  type: { slot1: 'psychic', slot2: 'fairy' }
},
{ id: 123, name: 'scyther', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 124, name: 'jynx', type: { slot1: 'ice', slot2: 'psychic' } },
{ id: 125, name: 'electabuzz', type: { slot1: 'electric' } },
{ id: 126, name: 'magmar', type: { slot1: 'fire' } },
{ id: 127, name: 'pinsir', type: { slot1: 'bug' } },
{ id: 128, name: 'tauros', type: { slot1: 'normal' } },
{ id: 129, name: 'magikarp', type: { slot1: 'water' } },
{
  id: 130,
  name: 'gyarados',
  type: { slot1: 'water', slot2: 'flying' }
},
{ id: 131, name: 'lapras', type: { slot1: 'water', slot2: 'ice' } },
{ id: 132, name: 'ditto', type: { slot1: 'normal' } },
{ id: 133, name: 'eevee', type: { slot1: 'normal' } },
{ id: 134, name: 'vaporeon', type: { slot1: 'water' } },
{ id: 135, name: 'jolteon', type: { slot1: 'electric' } },
{ id: 136, name: 'flareon', type: { slot1: 'fire' } },
{ id: 137, name: 'porygon', type: { slot1: 'normal' } },
{ id: 138, name: 'omanyte', type: { slot1: 'rock', slot2: 'water' } },
{ id: 139, name: 'omastar', type: { slot1: 'rock', slot2: 'water' } },
{ id: 140, name: 'kabuto', type: { slot1: 'rock', slot2: 'water' } },
{ id: 141, name: 'kabutops', type: { slot1: 'rock', slot2: 'water' } },
{
  id: 142,
  name: 'aerodactyl',
  type: { slot1: 'rock', slot2: 'flying' }
},
{ id: 143, name: 'snorlax', type: { slot1: 'normal' } },
{ id: 144, name: 'articuno', type: { slot1: 'ice', slot2: 'flying' } },
{
  id: 145,
  name: 'zapdos',
  type: { slot1: 'electric', slot2: 'flying' }
},
{ id: 146, name: 'moltres', type: { slot1: 'fire', slot2: 'flying' } },
{ id: 147, name: 'dratini', type: { slot1: 'dragon' } },
{ id: 148, name: 'dragonair', type: { slot1: 'dragon' } },
{
  id: 149,
  name: 'dragonite',
  type: { slot1: 'dragon', slot2: 'flying' }
},
{ id: 150, name: 'mewtwo', type: { slot1: 'psychic' } },
{ id: 151, name: 'mew', type: { slot1: 'psychic' } },
{ id: 152, name: 'chikorita', type: { slot1: 'grass' } },
{ id: 153, name: 'bayleef', type: { slot1: 'grass' } },
{ id: 154, name: 'meganium', type: { slot1: 'grass' } },
{ id: 155, name: 'cyndaquil', type: { slot1: 'fire' } },
{ id: 156, name: 'quilava', type: { slot1: 'fire' } },
{ id: 157, name: 'typhlosion', type: { slot1: 'fire' } },
{ id: 158, name: 'totodile', type: { slot1: 'water' } },
{ id: 159, name: 'croconaw', type: { slot1: 'water' } },
{ id: 160, name: 'feraligatr', type: { slot1: 'water' } },
{ id: 161, name: 'sentret', type: { slot1: 'normal' } },
{ id: 162, name: 'furret', type: { slot1: 'normal' } },
{
  id: 163,
  name: 'hoothoot',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 164,
  name: 'noctowl',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 165, name: 'ledyba', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 166, name: 'ledian', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 167, name: 'spinarak', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 168, name: 'ariados', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 169, name: 'crobat', type: { slot1: 'poison', slot2: 'flying' } },
{
  id: 170,
  name: 'chinchou',
  type: { slot1: 'water', slot2: 'electric' }
},
{
  id: 171,
  name: 'lanturn',
  type: { slot1: 'water', slot2: 'electric' }
},
{ id: 172, name: 'pichu', type: { slot1: 'electric' } },
{ id: 173, name: 'cleffa', type: { slot1: 'fairy' } },
{
  id: 174,
  name: 'igglybuff',
  type: { slot1: 'normal', slot2: 'fairy' }
},
{ id: 175, name: 'togepi', type: { slot1: 'fairy' } },
{ id: 176, name: 'togetic', type: { slot1: 'fairy', slot2: 'flying' } },
{ id: 177, name: 'natu', type: { slot1: 'psychic', slot2: 'flying' } },
{ id: 178, name: 'xatu', type: { slot1: 'psychic', slot2: 'flying' } },
{ id: 179, name: 'mareep', type: { slot1: 'electric' } },
{ id: 180, name: 'flaaffy', type: { slot1: 'electric' } },
{ id: 181, name: 'ampharos', type: { slot1: 'electric' } },
{ id: 182, name: 'bellossom', type: { slot1: 'grass' } },
{ id: 183, name: 'marill', type: { slot1: 'water', slot2: 'fairy' } },
{
  id: 184,
  name: 'azumarill',
  type: { slot1: 'water', slot2: 'fairy' }
},
{ id: 185, name: 'sudowoodo', type: { slot1: 'rock' } },
{ id: 186, name: 'politoed', type: { slot1: 'water' } },
{ id: 187, name: 'hoppip', type: { slot1: 'grass', slot2: 'flying' } },
{
  id: 188,
  name: 'skiploom',
  type: { slot1: 'grass', slot2: 'flying' }
},
{
  id: 189,
  name: 'jumpluff',
  type: { slot1: 'grass', slot2: 'flying' }
},
{ id: 190, name: 'aipom', type: { slot1: 'normal' } },
{ id: 191, name: 'sunkern', type: { slot1: 'grass' } },
{ id: 192, name: 'sunflora', type: { slot1: 'grass' } },
{ id: 193, name: 'yanma', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 194, name: 'wooper', type: { slot1: 'water', slot2: 'ground' } },
{
  id: 195,
  name: 'quagsire',
  type: { slot1: 'water', slot2: 'ground' }
},
{ id: 196, name: 'espeon', type: { slot1: 'psychic' } },
{ id: 197, name: 'umbreon', type: { slot1: 'dark' } },
{ id: 198, name: 'murkrow', type: { slot1: 'dark', slot2: 'flying' } },
{
  id: 199,
  name: 'slowking',
  type: { slot1: 'water', slot2: 'psychic' }
},
{ id: 200, name: 'misdreavus', type: { slot1: 'ghost' } },
{ id: 201, name: 'unown', type: { slot1: 'psychic' } },
{ id: 202, name: 'wobbuffet', type: { slot1: 'psychic' } },
{
  id: 203,
  name: 'girafarig',
  type: { slot1: 'normal', slot2: 'psychic' }
},
{ id: 204, name: 'pineco', type: { slot1: 'bug' } },
{ id: 205, name: 'forretress', type: { slot1: 'bug', slot2: 'steel' } },
{ id: 206, name: 'dunsparce', type: { slot1: 'normal' } },
{ id: 207, name: 'gligar', type: { slot1: 'ground', slot2: 'flying' } },
{ id: 208, name: 'steelix', type: { slot1: 'steel', slot2: 'ground' } },
{ id: 209, name: 'snubbull', type: { slot1: 'fairy' } },
{ id: 210, name: 'granbull', type: { slot1: 'fairy' } },
{
  id: 211,
  name: 'qwilfish',
  type: { slot1: 'water', slot2: 'poison' }
},
{ id: 212, name: 'scizor', type: { slot1: 'bug', slot2: 'steel' } },
{ id: 213, name: 'shuckle', type: { slot1: 'bug', slot2: 'rock' } },
{
  id: 214,
  name: 'heracross',
  type: { slot1: 'bug', slot2: 'fighting' }
},
{ id: 215, name: 'sneasel', type: { slot1: 'dark', slot2: 'ice' } },
{ id: 216, name: 'teddiursa', type: { slot1: 'normal' } },
{ id: 217, name: 'ursaring', type: { slot1: 'normal' } },
{ id: 218, name: 'slugma', type: { slot1: 'fire' } },
{ id: 219, name: 'magcargo', type: { slot1: 'fire', slot2: 'rock' } },
{ id: 220, name: 'swinub', type: { slot1: 'ice', slot2: 'ground' } },
{ id: 221, name: 'piloswine', type: { slot1: 'ice', slot2: 'ground' } },
{ id: 222, name: 'corsola', type: { slot1: 'water', slot2: 'rock' } },
{ id: 223, name: 'remoraid', type: { slot1: 'water' } },
{ id: 224, name: 'octillery', type: { slot1: 'water' } },
{ id: 225, name: 'delibird', type: { slot1: 'ice', slot2: 'flying' } },
{ id: 226, name: 'mantine', type: { slot1: 'water', slot2: 'flying' } },
{
  id: 227,
  name: 'skarmory',
  type: { slot1: 'steel', slot2: 'flying' }
},
{ id: 228, name: 'houndour', type: { slot1: 'dark', slot2: 'fire' } },
{ id: 229, name: 'houndoom', type: { slot1: 'dark', slot2: 'fire' } },
{ id: 230, name: 'kingdra', type: { slot1: 'water', slot2: 'dragon' } },
{ id: 231, name: 'phanpy', type: { slot1: 'ground' } },
{ id: 232, name: 'donphan', type: { slot1: 'ground' } },
{ id: 233, name: 'porygon2', type: { slot1: 'normal' } },
{ id: 234, name: 'stantler', type: { slot1: 'normal' } },
{ id: 235, name: 'smeargle', type: { slot1: 'normal' } },
{ id: 236, name: 'tyrogue', type: { slot1: 'fighting' } },
{ id: 237, name: 'hitmontop', type: { slot1: 'fighting' } },
{ id: 238, name: 'smoochum', type: { slot1: 'ice', slot2: 'psychic' } },
{ id: 239, name: 'elekid', type: { slot1: 'electric' } },
{ id: 240, name: 'magby', type: { slot1: 'fire' } },
{ id: 241, name: 'miltank', type: { slot1: 'normal' } },
{ id: 242, name: 'blissey', type: { slot1: 'normal' } },
{ id: 243, name: 'raikou', type: { slot1: 'electric' } },
{ id: 244, name: 'entei', type: { slot1: 'fire' } },
{ id: 245, name: 'suicune', type: { slot1: 'water' } },
{ id: 246, name: 'larvitar', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 247, name: 'pupitar', type: { slot1: 'rock', slot2: 'ground' } },
{ id: 248, name: 'tyranitar', type: { slot1: 'rock', slot2: 'dark' } },
{ id: 249, name: 'lugia', type: { slot1: 'psychic', slot2: 'flying' } },
{ id: 250, name: 'ho-oh', type: { slot1: 'fire', slot2: 'flying' } },
{ id: 251, name: 'celebi', type: { slot1: 'psychic', slot2: 'grass' } },
{ id: 252, name: 'treecko', type: { slot1: 'grass' } },
{ id: 253, name: 'grovyle', type: { slot1: 'grass' } },
{ id: 254, name: 'sceptile', type: { slot1: 'grass' } },
{ id: 255, name: 'torchic', type: { slot1: 'fire' } },
{
  id: 256,
  name: 'combusken',
  type: { slot1: 'fire', slot2: 'fighting' }
},
{
  id: 257,
  name: 'blaziken',
  type: { slot1: 'fire', slot2: 'fighting' }
},
{ id: 258, name: 'mudkip', type: { slot1: 'water' } },
{
  id: 259,
  name: 'marshtomp',
  type: { slot1: 'water', slot2: 'ground' }
},
{
  id: 260,
  name: 'swampert',
  type: { slot1: 'water', slot2: 'ground' }
},
{ id: 261, name: 'poochyena', type: { slot1: 'dark' } },
{ id: 262, name: 'mightyena', type: { slot1: 'dark' } },
{ id: 263, name: 'zigzagoon', type: { slot1: 'normal' } },
{ id: 264, name: 'linoone', type: { slot1: 'normal' } },
{ id: 265, name: 'wurmple', type: { slot1: 'bug' } },
{ id: 266, name: 'silcoon', type: { slot1: 'bug' } },
{ id: 267, name: 'beautifly', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 268, name: 'cascoon', type: { slot1: 'bug' } },
{ id: 269, name: 'dustox', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 270, name: 'lotad', type: { slot1: 'water', slot2: 'grass' } },
{ id: 271, name: 'lombre', type: { slot1: 'water', slot2: 'grass' } },
{ id: 272, name: 'ludicolo', type: { slot1: 'water', slot2: 'grass' } },
{ id: 273, name: 'seedot', type: { slot1: 'grass' } },
{ id: 274, name: 'nuzleaf', type: { slot1: 'grass', slot2: 'dark' } },
{ id: 275, name: 'shiftry', type: { slot1: 'grass', slot2: 'dark' } },
{
  id: 276,
  name: 'taillow',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 277,
  name: 'swellow',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 278, name: 'wingull', type: { slot1: 'water', slot2: 'flying' } },
{
  id: 279,
  name: 'pelipper',
  type: { slot1: 'water', slot2: 'flying' }
},
{ id: 280, name: 'ralts', type: { slot1: 'psychic', slot2: 'fairy' } },
{ id: 281, name: 'kirlia', type: { slot1: 'psychic', slot2: 'fairy' } },
{
  id: 282,
  name: 'gardevoir',
  type: { slot1: 'psychic', slot2: 'fairy' }
},
{ id: 283, name: 'surskit', type: { slot1: 'bug', slot2: 'water' } },
{
  id: 284,
  name: 'masquerain',
  type: { slot1: 'bug', slot2: 'flying' }
},
{ id: 285, name: 'shroomish', type: { slot1: 'grass' } },
{
  id: 286,
  name: 'breloom',
  type: { slot1: 'grass', slot2: 'fighting' }
},
{ id: 287, name: 'slakoth', type: { slot1: 'normal' } },
{ id: 288, name: 'vigoroth', type: { slot1: 'normal' } },
{ id: 289, name: 'slaking', type: { slot1: 'normal' } },
{ id: 290, name: 'nincada', type: { slot1: 'bug', slot2: 'ground' } },
{ id: 291, name: 'ninjask', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 292, name: 'shedinja', type: { slot1: 'bug', slot2: 'ghost' } },
{ id: 293, name: 'whismur', type: { slot1: 'normal' } },
{ id: 294, name: 'loudred', type: { slot1: 'normal' } },
{ id: 295, name: 'exploud', type: { slot1: 'normal' } },
{ id: 296, name: 'makuhita', type: { slot1: 'fighting' } },
{ id: 297, name: 'hariyama', type: { slot1: 'fighting' } },
{ id: 298, name: 'azurill', type: { slot1: 'normal', slot2: 'fairy' } },
{ id: 299, name: 'nosepass', type: { slot1: 'rock' } },
{ id: 300, name: 'skitty', type: { slot1: 'normal' } },
{ id: 301, name: 'delcatty', type: { slot1: 'normal' } },
{ id: 302, name: 'sableye', type: { slot1: 'dark', slot2: 'ghost' } },
{ id: 303, name: 'mawile', type: { slot1: 'steel', slot2: 'fairy' } },
{ id: 304, name: 'aron', type: { slot1: 'steel', slot2: 'rock' } },
{ id: 305, name: 'lairon', type: { slot1: 'steel', slot2: 'rock' } },
{ id: 306, name: 'aggron', type: { slot1: 'steel', slot2: 'rock' } },
{
  id: 307,
  name: 'meditite',
  type: { slot1: 'fighting', slot2: 'psychic' }
},
{
  id: 308,
  name: 'medicham',
  type: { slot1: 'fighting', slot2: 'psychic' }
},
{ id: 309, name: 'electrike', type: { slot1: 'electric' } },
{ id: 310, name: 'manectric', type: { slot1: 'electric' } },
{ id: 311, name: 'plusle', type: { slot1: 'electric' } },
{ id: 312, name: 'minun', type: { slot1: 'electric' } },
{ id: 313, name: 'volbeat', type: { slot1: 'bug' } },
{ id: 314, name: 'illumise', type: { slot1: 'bug' } },
{ id: 315, name: 'roselia', type: { slot1: 'grass', slot2: 'poison' } },
{ id: 316, name: 'gulpin', type: { slot1: 'poison' } },
{ id: 317, name: 'swalot', type: { slot1: 'poison' } },
{ id: 318, name: 'carvanha', type: { slot1: 'water', slot2: 'dark' } },
{ id: 319, name: 'sharpedo', type: { slot1: 'water', slot2: 'dark' } },
{ id: 320, name: 'wailmer', type: { slot1: 'water' } },
{ id: 321, name: 'wailord', type: { slot1: 'water' } },
{ id: 322, name: 'numel', type: { slot1: 'fire', slot2: 'ground' } },
{ id: 323, name: 'camerupt', type: { slot1: 'fire', slot2: 'ground' } },
{ id: 324, name: 'torkoal', type: { slot1: 'fire' } },
{ id: 325, name: 'spoink', type: { slot1: 'psychic' } },
{ id: 326, name: 'grumpig', type: { slot1: 'psychic' } },
{ id: 327, name: 'spinda', type: { slot1: 'normal' } },
{ id: 328, name: 'trapinch', type: { slot1: 'ground' } },
{
  id: 329,
  name: 'vibrava',
  type: { slot1: 'ground', slot2: 'dragon' }
},
{ id: 330, name: 'flygon', type: { slot1: 'ground', slot2: 'dragon' } },
{ id: 331, name: 'cacnea', type: { slot1: 'grass' } },
{ id: 332, name: 'cacturne', type: { slot1: 'grass', slot2: 'dark' } },
{ id: 333, name: 'swablu', type: { slot1: 'normal', slot2: 'flying' } },
{
  id: 334,
  name: 'altaria',
  type: { slot1: 'dragon', slot2: 'flying' }
},
{ id: 335, name: 'zangoose', type: { slot1: 'normal' } },
{ id: 336, name: 'seviper', type: { slot1: 'poison' } },
{
  id: 337,
  name: 'lunatone',
  type: { slot1: 'rock', slot2: 'psychic' }
},
{ id: 338, name: 'solrock', type: { slot1: 'rock', slot2: 'psychic' } },
{
  id: 339,
  name: 'barboach',
  type: { slot1: 'water', slot2: 'ground' }
},
{
  id: 340,
  name: 'whiscash',
  type: { slot1: 'water', slot2: 'ground' }
},
{ id: 341, name: 'corphish', type: { slot1: 'water' } },
{ id: 342, name: 'crawdaunt', type: { slot1: 'water', slot2: 'dark' } },
{
  id: 343,
  name: 'baltoy',
  type: { slot1: 'ground', slot2: 'psychic' }
},
{
  id: 344,
  name: 'claydol',
  type: { slot1: 'ground', slot2: 'psychic' }
},
{ id: 345, name: 'lileep', type: { slot1: 'rock', slot2: 'grass' } },
{ id: 346, name: 'cradily', type: { slot1: 'rock', slot2: 'grass' } },
{ id: 347, name: 'anorith', type: { slot1: 'rock', slot2: 'bug' } },
{ id: 348, name: 'armaldo', type: { slot1: 'rock', slot2: 'bug' } },
{ id: 349, name: 'feebas', type: { slot1: 'water' } },
{ id: 350, name: 'milotic', type: { slot1: 'water' } },
{ id: 351, name: 'castform', type: { slot1: 'normal' } },
{ id: 352, name: 'kecleon', type: { slot1: 'normal' } },
{ id: 353, name: 'shuppet', type: { slot1: 'ghost' } },
{ id: 354, name: 'banette', type: { slot1: 'ghost' } },
{ id: 355, name: 'duskull', type: { slot1: 'ghost' } },
{ id: 356, name: 'dusclops', type: { slot1: 'ghost' } },
{ id: 357, name: 'tropius', type: { slot1: 'grass', slot2: 'flying' } },
{ id: 358, name: 'chimecho', type: { slot1: 'psychic' } },
{ id: 359, name: 'absol', type: { slot1: 'dark' } },
{ id: 360, name: 'wynaut', type: { slot1: 'psychic' } },
{ id: 361, name: 'snorunt', type: { slot1: 'ice' } },
{ id: 362, name: 'glalie', type: { slot1: 'ice' } },
{ id: 363, name: 'spheal', type: { slot1: 'ice', slot2: 'water' } },
{ id: 364, name: 'sealeo', type: { slot1: 'ice', slot2: 'water' } },
{ id: 365, name: 'walrein', type: { slot1: 'ice', slot2: 'water' } },
{ id: 366, name: 'clamperl', type: { slot1: 'water' } },
{ id: 367, name: 'huntail', type: { slot1: 'water' } },
{ id: 368, name: 'gorebyss', type: { slot1: 'water' } },
{ id: 369, name: 'relicanth', type: { slot1: 'water', slot2: 'rock' } },
{ id: 370, name: 'luvdisc', type: { slot1: 'water' } },
{ id: 371, name: 'bagon', type: { slot1: 'dragon' } },
{ id: 372, name: 'shelgon', type: { slot1: 'dragon' } },
{
  id: 373,
  name: 'salamence',
  type: { slot1: 'dragon', slot2: 'flying' }
},
{ id: 374, name: 'beldum', type: { slot1: 'steel', slot2: 'psychic' } },
{ id: 375, name: 'metang', type: { slot1: 'steel', slot2: 'psychic' } },
{
  id: 376,
  name: 'metagross',
  type: { slot1: 'steel', slot2: 'psychic' }
},
{ id: 377, name: 'regirock', type: { slot1: 'rock' } },
{ id: 378, name: 'regice', type: { slot1: 'ice' } },
{ id: 379, name: 'registeel', type: { slot1: 'steel' } },
{
  id: 380,
  name: 'latias',
  type: { slot1: 'dragon', slot2: 'psychic' }
},
{
  id: 381,
  name: 'latios',
  type: { slot1: 'dragon', slot2: 'psychic' }
},
{ id: 382, name: 'kyogre', type: { slot1: 'water' } },
{ id: 383, name: 'groudon', type: { slot1: 'ground' } },
{
  id: 384,
  name: 'rayquaza',
  type: { slot1: 'dragon', slot2: 'flying' }
},
{
  id: 385,
  name: 'jirachi',
  type: { slot1: 'steel', slot2: 'psychic' }
},
{ id: 386, name: 'deoxys-normal', type: { slot1: 'psychic' } },
{ id: 387, name: 'turtwig', type: { slot1: 'grass' } },
{ id: 388, name: 'grotle', type: { slot1: 'grass' } },
{
  id: 389,
  name: 'torterra',
  type: { slot1: 'grass', slot2: 'ground' }
},
{ id: 390, name: 'chimchar', type: { slot1: 'fire' } },
{
  id: 391,
  name: 'monferno',
  type: { slot1: 'fire', slot2: 'fighting' }
},
{
  id: 392,
  name: 'infernape',
  type: { slot1: 'fire', slot2: 'fighting' }
},
{ id: 393, name: 'piplup', type: { slot1: 'water' } },
{ id: 394, name: 'prinplup', type: { slot1: 'water' } },
{ id: 395, name: 'empoleon', type: { slot1: 'water', slot2: 'steel' } },
{ id: 396, name: 'starly', type: { slot1: 'normal', slot2: 'flying' } },
{
  id: 397,
  name: 'staravia',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 398,
  name: 'staraptor',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 399, name: 'bidoof', type: { slot1: 'normal' } },
{ id: 400, name: 'bibarel', type: { slot1: 'normal', slot2: 'water' } },
{ id: 401, name: 'kricketot', type: { slot1: 'bug' } },
{ id: 402, name: 'kricketune', type: { slot1: 'bug' } },
{ id: 403, name: 'shinx', type: { slot1: 'electric' } },
{ id: 404, name: 'luxio', type: { slot1: 'electric' } },
{ id: 405, name: 'luxray', type: { slot1: 'electric' } },
{ id: 406, name: 'budew', type: { slot1: 'grass', slot2: 'poison' } },
{
  id: 407,
  name: 'roserade',
  type: { slot1: 'grass', slot2: 'poison' }
},
{ id: 408, name: 'cranidos', type: { slot1: 'rock' } },
{ id: 409, name: 'rampardos', type: { slot1: 'rock' } },
{ id: 410, name: 'shieldon', type: { slot1: 'rock', slot2: 'steel' } },
{ id: 411, name: 'bastiodon', type: { slot1: 'rock', slot2: 'steel' } },
{ id: 412, name: 'burmy', type: { slot1: 'bug' } },
{
  id: 413,
  name: 'wormadam-plant',
  type: { slot1: 'bug', slot2: 'grass' }
},
{ id: 414, name: 'mothim', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 415, name: 'combee', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 416, name: 'vespiquen', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 417, name: 'pachirisu', type: { slot1: 'electric' } },
{ id: 418, name: 'buizel', type: { slot1: 'water' } },
{ id: 419, name: 'floatzel', type: { slot1: 'water' } },
{ id: 420, name: 'cherubi', type: { slot1: 'grass' } },
{ id: 421, name: 'cherrim', type: { slot1: 'grass' } },
{ id: 422, name: 'shellos', type: { slot1: 'water' } },
{
  id: 423,
  name: 'gastrodon',
  type: { slot1: 'water', slot2: 'ground' }
},
{ id: 424, name: 'ambipom', type: { slot1: 'normal' } },
{
  id: 425,
  name: 'drifloon',
  type: { slot1: 'ghost', slot2: 'flying' }
},
{
  id: 426,
  name: 'drifblim',
  type: { slot1: 'ghost', slot2: 'flying' }
},
{ id: 427, name: 'buneary', type: { slot1: 'normal' } },
{ id: 428, name: 'lopunny', type: { slot1: 'normal' } },
{ id: 429, name: 'mismagius', type: { slot1: 'ghost' } },
{
  id: 430,
  name: 'honchkrow',
  type: { slot1: 'dark', slot2: 'flying' }
},
{ id: 431, name: 'glameow', type: { slot1: 'normal' } },
{ id: 432, name: 'purugly', type: { slot1: 'normal' } },
{ id: 433, name: 'chingling', type: { slot1: 'psychic' } },
{ id: 434, name: 'stunky', type: { slot1: 'poison', slot2: 'dark' } },
{ id: 435, name: 'skuntank', type: { slot1: 'poison', slot2: 'dark' } },
{
  id: 436,
  name: 'bronzor',
  type: { slot1: 'steel', slot2: 'psychic' }
},
{
  id: 437,
  name: 'bronzong',
  type: { slot1: 'steel', slot2: 'psychic' }
},
{ id: 438, name: 'bonsly', type: { slot1: 'rock' } },
{
  id: 439,
  name: 'mime-jr',
  type: { slot1: 'psychic', slot2: 'fairy' }
},
{ id: 440, name: 'happiny', type: { slot1: 'normal' } },
{ id: 441, name: 'chatot', type: { slot1: 'normal', slot2: 'flying' } },
{ id: 442, name: 'spiritomb', type: { slot1: 'ghost', slot2: 'dark' } },
{ id: 443, name: 'gible', type: { slot1: 'dragon', slot2: 'ground' } },
{ id: 444, name: 'gabite', type: { slot1: 'dragon', slot2: 'ground' } },
{
  id: 445,
  name: 'garchomp',
  type: { slot1: 'dragon', slot2: 'ground' }
},
{ id: 446, name: 'munchlax', type: { slot1: 'normal' } },
{ id: 447, name: 'riolu', type: { slot1: 'fighting' } },
{
  id: 448,
  name: 'lucario',
  type: { slot1: 'fighting', slot2: 'steel' }
},
{ id: 449, name: 'hippopotas', type: { slot1: 'ground' } },
{ id: 450, name: 'hippowdon', type: { slot1: 'ground' } },
{ id: 451, name: 'skorupi', type: { slot1: 'poison', slot2: 'bug' } },
{ id: 452, name: 'drapion', type: { slot1: 'poison', slot2: 'dark' } },
{
  id: 453,
  name: 'croagunk',
  type: { slot1: 'poison', slot2: 'fighting' }
},
{
  id: 454,
  name: 'toxicroak',
  type: { slot1: 'poison', slot2: 'fighting' }
},
{ id: 455, name: 'carnivine', type: { slot1: 'grass' } },
{ id: 456, name: 'finneon', type: { slot1: 'water' } },
{ id: 457, name: 'lumineon', type: { slot1: 'water' } },
{ id: 458, name: 'mantyke', type: { slot1: 'water', slot2: 'flying' } },
{ id: 459, name: 'snover', type: { slot1: 'grass', slot2: 'ice' } },
{ id: 460, name: 'abomasnow', type: { slot1: 'grass', slot2: 'ice' } },
{ id: 461, name: 'weavile', type: { slot1: 'dark', slot2: 'ice' } },
{
  id: 462,
  name: 'magnezone',
  type: { slot1: 'electric', slot2: 'steel' }
},
{ id: 463, name: 'lickilicky', type: { slot1: 'normal' } },
{
  id: 464,
  name: 'rhyperior',
  type: { slot1: 'ground', slot2: 'rock' }
},
{ id: 465, name: 'tangrowth', type: { slot1: 'grass' } },
{ id: 466, name: 'electivire', type: { slot1: 'electric' } },
{ id: 467, name: 'magmortar', type: { slot1: 'fire' } },
{
  id: 468,
  name: 'togekiss',
  type: { slot1: 'fairy', slot2: 'flying' }
},
{ id: 469, name: 'yanmega', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 470, name: 'leafeon', type: { slot1: 'grass' } },
{ id: 471, name: 'glaceon', type: { slot1: 'ice' } },
{
  id: 472,
  name: 'gliscor',
  type: { slot1: 'ground', slot2: 'flying' }
},
{ id: 473, name: 'mamoswine', type: { slot1: 'ice', slot2: 'ground' } },
{ id: 474, name: 'porygon-z', type: { slot1: 'normal' } },
{
  id: 475,
  name: 'gallade',
  type: { slot1: 'psychic', slot2: 'fighting' }
},
{ id: 476, name: 'probopass', type: { slot1: 'rock', slot2: 'steel' } },
{ id: 477, name: 'dusknoir', type: { slot1: 'ghost' } },
{ id: 478, name: 'froslass', type: { slot1: 'ice', slot2: 'ghost' } },
{ id: 479, name: 'rotom', type: { slot1: 'electric', slot2: 'ghost' } },
{ id: 480, name: 'uxie', type: { slot1: 'psychic' } },
{ id: 481, name: 'mesprit', type: { slot1: 'psychic' } },
{ id: 482, name: 'azelf', type: { slot1: 'psychic' } },
{ id: 483, name: 'dialga', type: { slot1: 'steel', slot2: 'dragon' } },
{ id: 484, name: 'palkia', type: { slot1: 'water', slot2: 'dragon' } },
{ id: 485, name: 'heatran', type: { slot1: 'fire', slot2: 'steel' } },
{ id: 486, name: 'regigigas', type: { slot1: 'normal' } },
{
  id: 487,
  name: 'giratina-altered',
  type: { slot1: 'ghost', slot2: 'dragon' }
},
{ id: 488, name: 'cresselia', type: { slot1: 'psychic' } },
{ id: 489, name: 'phione', type: { slot1: 'water' } },
{ id: 490, name: 'manaphy', type: { slot1: 'water' } },
{ id: 491, name: 'darkrai', type: { slot1: 'dark' } },
{ id: 492, name: 'shaymin-land', type: { slot1: 'grass' } },
{ id: 493, name: 'arceus', type: { slot1: 'normal' } },
{ id: 494, name: 'victini', type: { slot1: 'psychic', slot2: 'fire' } },
{ id: 495, name: 'snivy', type: { slot1: 'grass' } },
{ id: 496, name: 'servine', type: { slot1: 'grass' } },
{ id: 497, name: 'serperior', type: { slot1: 'grass' } },
{ id: 498, name: 'tepig', type: { slot1: 'fire' } },
{
  id: 499,
  name: 'pignite',
  type: { slot1: 'fire', slot2: 'fighting' }
},
{ id: 500, name: 'emboar', type: { slot1: 'fire', slot2: 'fighting' } },
{ id: 501, name: 'oshawott', type: { slot1: 'water' } },
{ id: 502, name: 'dewott', type: { slot1: 'water' } },
{ id: 503, name: 'samurott', type: { slot1: 'water' } },
{ id: 504, name: 'patrat', type: { slot1: 'normal' } },
{ id: 505, name: 'watchog', type: { slot1: 'normal' } },
{ id: 506, name: 'lillipup', type: { slot1: 'normal' } },
{ id: 507, name: 'herdier', type: { slot1: 'normal' } },
{ id: 508, name: 'stoutland', type: { slot1: 'normal' } },
{ id: 509, name: 'purrloin', type: { slot1: 'dark' } },
{ id: 510, name: 'liepard', type: { slot1: 'dark' } },
{ id: 511, name: 'pansage', type: { slot1: 'grass' } },
{ id: 512, name: 'simisage', type: { slot1: 'grass' } },
{ id: 513, name: 'pansear', type: { slot1: 'fire' } },
{ id: 514, name: 'simisear', type: { slot1: 'fire' } },
{ id: 515, name: 'panpour', type: { slot1: 'water' } },
{ id: 516, name: 'simipour', type: { slot1: 'water' } },
{ id: 517, name: 'munna', type: { slot1: 'psychic' } },
{ id: 518, name: 'musharna', type: { slot1: 'psychic' } },
{ id: 519, name: 'pidove', type: { slot1: 'normal', slot2: 'flying' } },
{
  id: 520,
  name: 'tranquill',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 521,
  name: 'unfezant',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 522, name: 'blitzle', type: { slot1: 'electric' } },
{ id: 523, name: 'zebstrika', type: { slot1: 'electric' } },
{ id: 524, name: 'roggenrola', type: { slot1: 'rock' } },
{ id: 525, name: 'boldore', type: { slot1: 'rock' } },
{ id: 526, name: 'gigalith', type: { slot1: 'rock' } },
{
  id: 527,
  name: 'woobat',
  type: { slot1: 'psychic', slot2: 'flying' }
},
{
  id: 528,
  name: 'swoobat',
  type: { slot1: 'psychic', slot2: 'flying' }
},
{ id: 529, name: 'drilbur', type: { slot1: 'ground' } },
{
  id: 530,
  name: 'excadrill',
  type: { slot1: 'ground', slot2: 'steel' }
},
{ id: 531, name: 'audino', type: { slot1: 'normal' } },
{ id: 532, name: 'timburr', type: { slot1: 'fighting' } },
{ id: 533, name: 'gurdurr', type: { slot1: 'fighting' } },
{ id: 534, name: 'conkeldurr', type: { slot1: 'fighting' } },
{ id: 535, name: 'tympole', type: { slot1: 'water' } },
{
  id: 536,
  name: 'palpitoad',
  type: { slot1: 'water', slot2: 'ground' }
},
{
  id: 537,
  name: 'seismitoad',
  type: { slot1: 'water', slot2: 'ground' }
},
{ id: 538, name: 'throh', type: { slot1: 'fighting' } },
{ id: 539, name: 'sawk', type: { slot1: 'fighting' } },
{ id: 540, name: 'sewaddle', type: { slot1: 'bug', slot2: 'grass' } },
{ id: 541, name: 'swadloon', type: { slot1: 'bug', slot2: 'grass' } },
{ id: 542, name: 'leavanny', type: { slot1: 'bug', slot2: 'grass' } },
{ id: 543, name: 'venipede', type: { slot1: 'bug', slot2: 'poison' } },
{
  id: 544,
  name: 'whirlipede',
  type: { slot1: 'bug', slot2: 'poison' }
},
{ id: 545, name: 'scolipede', type: { slot1: 'bug', slot2: 'poison' } },
{ id: 546, name: 'cottonee', type: { slot1: 'grass', slot2: 'fairy' } },
{
  id: 547,
  name: 'whimsicott',
  type: { slot1: 'grass', slot2: 'fairy' }
},
{ id: 548, name: 'petilil', type: { slot1: 'grass' } },
{ id: 549, name: 'lilligant', type: { slot1: 'grass' } },
{ id: 550, name: 'basculin-red-striped', type: { slot1: 'water' } },
{ id: 551, name: 'sandile', type: { slot1: 'ground', slot2: 'dark' } },
{ id: 552, name: 'krokorok', type: { slot1: 'ground', slot2: 'dark' } },
{
  id: 553,
  name: 'krookodile',
  type: { slot1: 'ground', slot2: 'dark' }
},
{ id: 554, name: 'darumaka', type: { slot1: 'fire' } },
{ id: 555, name: 'darmanitan-standard', type: { slot1: 'fire' } },
{ id: 556, name: 'maractus', type: { slot1: 'grass' } },
{ id: 557, name: 'dwebble', type: { slot1: 'bug', slot2: 'rock' } },
{ id: 558, name: 'crustle', type: { slot1: 'bug', slot2: 'rock' } },
{
  id: 559,
  name: 'scraggy',
  type: { slot1: 'dark', slot2: 'fighting' }
},
{
  id: 560,
  name: 'scrafty',
  type: { slot1: 'dark', slot2: 'fighting' }
},
{
  id: 561,
  name: 'sigilyph',
  type: { slot1: 'psychic', slot2: 'flying' }
},
{ id: 562, name: 'yamask', type: { slot1: 'ghost' } },
{ id: 563, name: 'cofagrigus', type: { slot1: 'ghost' } },
{ id: 564, name: 'tirtouga', type: { slot1: 'water', slot2: 'rock' } },
{
  id: 565,
  name: 'carracosta',
  type: { slot1: 'water', slot2: 'rock' }
},
{ id: 566, name: 'archen', type: { slot1: 'rock', slot2: 'flying' } },
{ id: 567, name: 'archeops', type: { slot1: 'rock', slot2: 'flying' } },
{ id: 568, name: 'trubbish', type: { slot1: 'poison' } },
{ id: 569, name: 'garbodor', type: { slot1: 'poison' } },
{ id: 570, name: 'zorua', type: { slot1: 'dark' } },
{ id: 571, name: 'zoroark', type: { slot1: 'dark' } },
{ id: 572, name: 'minccino', type: { slot1: 'normal' } },
{ id: 573, name: 'cinccino', type: { slot1: 'normal' } },
{ id: 574, name: 'gothita', type: { slot1: 'psychic' } },
{ id: 575, name: 'gothorita', type: { slot1: 'psychic' } },
{ id: 576, name: 'gothitelle', type: { slot1: 'psychic' } },
{ id: 577, name: 'solosis', type: { slot1: 'psychic' } },
{ id: 578, name: 'duosion', type: { slot1: 'psychic' } },
{ id: 579, name: 'reuniclus', type: { slot1: 'psychic' } },
{
  id: 580,
  name: 'ducklett',
  type: { slot1: 'water', slot2: 'flying' }
},
{ id: 581, name: 'swanna', type: { slot1: 'water', slot2: 'flying' } },
{ id: 582, name: 'vanillite', type: { slot1: 'ice' } },
{ id: 583, name: 'vanillish', type: { slot1: 'ice' } },
{ id: 584, name: 'vanilluxe', type: { slot1: 'ice' } },
{
  id: 585,
  name: 'deerling',
  type: { slot1: 'normal', slot2: 'grass' }
},
{
  id: 586,
  name: 'sawsbuck',
  type: { slot1: 'normal', slot2: 'grass' }
},
{
  id: 587,
  name: 'emolga',
  type: { slot1: 'electric', slot2: 'flying' }
},
{ id: 588, name: 'karrablast', type: { slot1: 'bug' } },
{ id: 589, name: 'escavalier', type: { slot1: 'bug', slot2: 'steel' } },
{ id: 590, name: 'foongus', type: { slot1: 'grass', slot2: 'poison' } },
{
  id: 591,
  name: 'amoonguss',
  type: { slot1: 'grass', slot2: 'poison' }
},
{ id: 592, name: 'frillish', type: { slot1: 'water', slot2: 'ghost' } },
{
  id: 593,
  name: 'jellicent',
  type: { slot1: 'water', slot2: 'ghost' }
},
{ id: 594, name: 'alomomola', type: { slot1: 'water' } },
{ id: 595, name: 'joltik', type: { slot1: 'bug', slot2: 'electric' } },
{
  id: 596,
  name: 'galvantula',
  type: { slot1: 'bug', slot2: 'electric' }
},
{
  id: 597,
  name: 'ferroseed',
  type: { slot1: 'grass', slot2: 'steel' }
},
{
  id: 598,
  name: 'ferrothorn',
  type: { slot1: 'grass', slot2: 'steel' }
},
{ id: 599, name: 'klink', type: { slot1: 'steel' } },
{ id: 600, name: 'klang', type: { slot1: 'steel' } },
{ id: 601, name: 'klinklang', type: { slot1: 'steel' } },
{ id: 602, name: 'tynamo', type: { slot1: 'electric' } },
{ id: 603, name: 'eelektrik', type: { slot1: 'electric' } },
{ id: 604, name: 'eelektross', type: { slot1: 'electric' } },
{ id: 605, name: 'elgyem', type: { slot1: 'psychic' } },
{ id: 606, name: 'beheeyem', type: { slot1: 'psychic' } },
{ id: 607, name: 'litwick', type: { slot1: 'ghost', slot2: 'fire' } },
{ id: 608, name: 'lampent', type: { slot1: 'ghost', slot2: 'fire' } },
{
  id: 609,
  name: 'chandelure',
  type: { slot1: 'ghost', slot2: 'fire' }
},
{ id: 610, name: 'axew', type: { slot1: 'dragon' } },
{ id: 611, name: 'fraxure', type: { slot1: 'dragon' } },
{ id: 612, name: 'haxorus', type: { slot1: 'dragon' } },
{ id: 613, name: 'cubchoo', type: { slot1: 'ice' } },
{ id: 614, name: 'beartic', type: { slot1: 'ice' } },
{ id: 615, name: 'cryogonal', type: { slot1: 'ice' } },
{ id: 616, name: 'shelmet', type: { slot1: 'bug' } },
{ id: 617, name: 'accelgor', type: { slot1: 'bug' } },
{
  id: 618,
  name: 'stunfisk',
  type: { slot1: 'ground', slot2: 'electric' }
},
{ id: 619, name: 'mienfoo', type: { slot1: 'fighting' } },
{ id: 620, name: 'mienshao', type: { slot1: 'fighting' } },
{ id: 621, name: 'druddigon', type: { slot1: 'dragon' } },
{ id: 622, name: 'golett', type: { slot1: 'ground', slot2: 'ghost' } },
{ id: 623, name: 'golurk', type: { slot1: 'ground', slot2: 'ghost' } },
{ id: 624, name: 'pawniard', type: { slot1: 'dark', slot2: 'steel' } },
{ id: 625, name: 'bisharp', type: { slot1: 'dark', slot2: 'steel' } },
{ id: 626, name: 'bouffalant', type: { slot1: 'normal' } },
{
  id: 627,
  name: 'rufflet',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 628,
  name: 'braviary',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 629, name: 'vullaby', type: { slot1: 'dark', slot2: 'flying' } },
{
  id: 630,
  name: 'mandibuzz',
  type: { slot1: 'dark', slot2: 'flying' }
},
{ id: 631, name: 'heatmor', type: { slot1: 'fire' } },
{ id: 632, name: 'durant', type: { slot1: 'bug', slot2: 'steel' } },
{ id: 633, name: 'deino', type: { slot1: 'dark', slot2: 'dragon' } },
{ id: 634, name: 'zweilous', type: { slot1: 'dark', slot2: 'dragon' } },
{
  id: 635,
  name: 'hydreigon',
  type: { slot1: 'dark', slot2: 'dragon' }
},
{ id: 636, name: 'larvesta', type: { slot1: 'bug', slot2: 'fire' } },
{ id: 637, name: 'volcarona', type: { slot1: 'bug', slot2: 'fire' } },
{
  id: 638,
  name: 'cobalion',
  type: { slot1: 'steel', slot2: 'fighting' }
},
{
  id: 639,
  name: 'terrakion',
  type: { slot1: 'rock', slot2: 'fighting' }
},
{
  id: 640,
  name: 'virizion',
  type: { slot1: 'grass', slot2: 'fighting' }
},
{ id: 641, name: 'tornadus-incarnate', type: { slot1: 'flying' } },
{
  id: 642,
  name: 'thundurus-incarnate',
  type: { slot1: 'electric', slot2: 'flying' }
},
{ id: 643, name: 'reshiram', type: { slot1: 'dragon', slot2: 'fire' } },
{
  id: 644,
  name: 'zekrom',
  type: { slot1: 'dragon', slot2: 'electric' }
},
{
  id: 645,
  name: 'landorus-incarnate',
  type: { slot1: 'ground', slot2: 'flying' }
},
{ id: 646, name: 'kyurem', type: { slot1: 'dragon', slot2: 'ice' } },
{
  id: 647,
  name: 'keldeo-ordinary',
  type: { slot1: 'water', slot2: 'fighting' }
},
{
  id: 648,
  name: 'meloetta-aria',
  type: { slot1: 'normal', slot2: 'psychic' }
},
{ id: 649, name: 'genesect', type: { slot1: 'bug', slot2: 'steel' } },
{ id: 650, name: 'chespin', type: { slot1: 'grass' } },
{ id: 651, name: 'quilladin', type: { slot1: 'grass' } },
{
  id: 652,
  name: 'chesnaught',
  type: { slot1: 'grass', slot2: 'fighting' }
},
{ id: 653, name: 'fennekin', type: { slot1: 'fire' } },
{ id: 654, name: 'braixen', type: { slot1: 'fire' } },
{ id: 655, name: 'delphox', type: { slot1: 'fire', slot2: 'psychic' } },
{ id: 656, name: 'froakie', type: { slot1: 'water' } },
{ id: 657, name: 'frogadier', type: { slot1: 'water' } },
{ id: 658, name: 'greninja', type: { slot1: 'water', slot2: 'dark' } },
{ id: 659, name: 'bunnelby', type: { slot1: 'normal' } },
{
  id: 660,
  name: 'diggersby',
  type: { slot1: 'normal', slot2: 'ground' }
},
{
  id: 661,
  name: 'fletchling',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 662,
  name: 'fletchinder',
  type: { slot1: 'fire', slot2: 'flying' }
},
{
  id: 663,
  name: 'talonflame',
  type: { slot1: 'fire', slot2: 'flying' }
},
{ id: 664, name: 'scatterbug', type: { slot1: 'bug' } },
{ id: 665, name: 'spewpa', type: { slot1: 'bug' } },
{ id: 666, name: 'vivillon', type: { slot1: 'bug', slot2: 'flying' } },
{ id: 667, name: 'litleo', type: { slot1: 'fire', slot2: 'normal' } },
{ id: 668, name: 'pyroar', type: { slot1: 'fire', slot2: 'normal' } },
{ id: 669, name: 'flabebe', type: { slot1: 'fairy' } },
{ id: 670, name: 'floette', type: { slot1: 'fairy' } },
{ id: 671, name: 'florges', type: { slot1: 'fairy' } },
{ id: 672, name: 'skiddo', type: { slot1: 'grass' } },
{ id: 673, name: 'gogoat', type: { slot1: 'grass' } },
{ id: 674, name: 'pancham', type: { slot1: 'fighting' } },
{
  id: 675,
  name: 'pangoro',
  type: { slot1: 'fighting', slot2: 'dark' }
},
{ id: 676, name: 'furfrou', type: { slot1: 'normal' } },
{ id: 677, name: 'espurr', type: { slot1: 'psychic' } },
{ id: 678, name: 'meowstic-male', type: { slot1: 'psychic' } },
{ id: 679, name: 'honedge', type: { slot1: 'steel', slot2: 'ghost' } },
{ id: 680, name: 'doublade', type: { slot1: 'steel', slot2: 'ghost' } },
{
  id: 681,
  name: 'aegislash-shield',
  type: { slot1: 'steel', slot2: 'ghost' }
},
{ id: 682, name: 'spritzee', type: { slot1: 'fairy' } },
{ id: 683, name: 'aromatisse', type: { slot1: 'fairy' } },
{ id: 684, name: 'swirlix', type: { slot1: 'fairy' } },
{ id: 685, name: 'slurpuff', type: { slot1: 'fairy' } },
{ id: 686, name: 'inkay', type: { slot1: 'dark', slot2: 'psychic' } },
{ id: 687, name: 'malamar', type: { slot1: 'dark', slot2: 'psychic' } },
{ id: 688, name: 'binacle', type: { slot1: 'rock', slot2: 'water' } },
{
  id: 689,
  name: 'barbaracle',
  type: { slot1: 'rock', slot2: 'water' }
},
{ id: 690, name: 'skrelp', type: { slot1: 'poison', slot2: 'water' } },
{
  id: 691,
  name: 'dragalge',
  type: { slot1: 'poison', slot2: 'dragon' }
},
{ id: 692, name: 'clauncher', type: { slot1: 'water' } },
{ id: 693, name: 'clawitzer', type: { slot1: 'water' } },
{
  id: 694,
  name: 'helioptile',
  type: { slot1: 'electric', slot2: 'normal' }
},
{
  id: 695,
  name: 'heliolisk',
  type: { slot1: 'electric', slot2: 'normal' }
},
{ id: 696, name: 'tyrunt', type: { slot1: 'rock', slot2: 'dragon' } },
{
  id: 697,
  name: 'tyrantrum',
  type: { slot1: 'rock', slot2: 'dragon' }
},
{ id: 698, name: 'amaura', type: { slot1: 'rock', slot2: 'ice' } },
{ id: 699, name: 'aurorus', type: { slot1: 'rock', slot2: 'ice' } },
{ id: 700, name: 'sylveon', type: { slot1: 'fairy' } },
{
  id: 701,
  name: 'hawlucha',
  type: { slot1: 'fighting', slot2: 'flying' }
},
{
  id: 702,
  name: 'dedenne',
  type: { slot1: 'electric', slot2: 'fairy' }
},
{ id: 703, name: 'carbink', type: { slot1: 'rock', slot2: 'fairy' } },
{ id: 704, name: 'goomy', type: { slot1: 'dragon' } },
{ id: 705, name: 'sliggoo', type: { slot1: 'dragon' } },
{ id: 706, name: 'goodra', type: { slot1: 'dragon' } },
{ id: 707, name: 'klefki', type: { slot1: 'steel', slot2: 'fairy' } },
{ id: 708, name: 'phantump', type: { slot1: 'ghost', slot2: 'grass' } },
{
  id: 709,
  name: 'trevenant',
  type: { slot1: 'ghost', slot2: 'grass' }
},
{
  id: 710,
  name: 'pumpkaboo-average',
  type: { slot1: 'ghost', slot2: 'grass' }
},
{
  id: 711,
  name: 'gourgeist-average',
  type: { slot1: 'ghost', slot2: 'grass' }
},
{ id: 712, name: 'bergmite', type: { slot1: 'ice' } },
{ id: 713, name: 'avalugg', type: { slot1: 'ice' } },
{ id: 714, name: 'noibat', type: { slot1: 'flying', slot2: 'dragon' } },
{
  id: 715,
  name: 'noivern',
  type: { slot1: 'flying', slot2: 'dragon' }
},
{ id: 716, name: 'xerneas', type: { slot1: 'fairy' } },
{ id: 717, name: 'yveltal', type: { slot1: 'dark', slot2: 'flying' } },
{
  id: 718,
  name: 'zygarde-50',
  type: { slot1: 'dragon', slot2: 'ground' }
},
{ id: 719, name: 'diancie', type: { slot1: 'rock', slot2: 'fairy' } },
{ id: 720, name: 'hoopa', type: { slot1: 'psychic', slot2: 'ghost' } },
{ id: 721, name: 'volcanion', type: { slot1: 'fire', slot2: 'water' } },
{ id: 722, name: 'rowlet', type: { slot1: 'grass', slot2: 'flying' } },
{ id: 723, name: 'dartrix', type: { slot1: 'grass', slot2: 'flying' } },
{
  id: 724,
  name: 'decidueye',
  type: { slot1: 'grass', slot2: 'ghost' }
},
{ id: 725, name: 'litten', type: { slot1: 'fire' } },
{ id: 726, name: 'torracat', type: { slot1: 'fire' } },
{ id: 727, name: 'incineroar', type: { slot1: 'fire', slot2: 'dark' } },
{ id: 728, name: 'popplio', type: { slot1: 'water' } },
{ id: 729, name: 'brionne', type: { slot1: 'water' } },
{
  id: 730,
  name: 'primarina',
  type: { slot1: 'water', slot2: 'fairy' }
},
{
  id: 731,
  name: 'pikipek',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 732,
  name: 'trumbeak',
  type: { slot1: 'normal', slot2: 'flying' }
},
{
  id: 733,
  name: 'toucannon',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 734, name: 'yungoos', type: { slot1: 'normal' } },
{ id: 735, name: 'gumshoos', type: { slot1: 'normal' } },
{ id: 736, name: 'grubbin', type: { slot1: 'bug' } },
{
  id: 737,
  name: 'charjabug',
  type: { slot1: 'bug', slot2: 'electric' }
},
{
  id: 738,
  name: 'vikavolt',
  type: { slot1: 'bug', slot2: 'electric' }
},
{ id: 739, name: 'crabrawler', type: { slot1: 'fighting' } },
{
  id: 740,
  name: 'crabominable',
  type: { slot1: 'fighting', slot2: 'ice' }
},
{
  id: 741,
  name: 'oricorio-baile',
  type: { slot1: 'fire', slot2: 'flying' }
},
{ id: 742, name: 'cutiefly', type: { slot1: 'bug', slot2: 'fairy' } },
{ id: 743, name: 'ribombee', type: { slot1: 'bug', slot2: 'fairy' } },
{ id: 744, name: 'rockruff', type: { slot1: 'rock' } },
{ id: 745, name: 'lycanroc-midday', type: { slot1: 'rock' } },
{ id: 746, name: 'wishiwashi-solo', type: { slot1: 'water' } },
{
  id: 747,
  name: 'mareanie',
  type: { slot1: 'poison', slot2: 'water' }
},
{ id: 748, name: 'toxapex', type: { slot1: 'poison', slot2: 'water' } },
{ id: 749, name: 'mudbray', type: { slot1: 'ground' } },
{ id: 750, name: 'mudsdale', type: { slot1: 'ground' } },
{ id: 751, name: 'dewpider', type: { slot1: 'water', slot2: 'bug' } },
{ id: 752, name: 'araquanid', type: { slot1: 'water', slot2: 'bug' } },
{ id: 753, name: 'fomantis', type: { slot1: 'grass' } },
{ id: 754, name: 'lurantis', type: { slot1: 'grass' } },
{ id: 755, name: 'morelull', type: { slot1: 'grass', slot2: 'fairy' } },
{
  id: 756,
  name: 'shiinotic',
  type: { slot1: 'grass', slot2: 'fairy' }
},
{ id: 757, name: 'salandit', type: { slot1: 'poison', slot2: 'fire' } },
{ id: 758, name: 'salazzle', type: { slot1: 'poison', slot2: 'fire' } },
{
  id: 759,
  name: 'stufful',
  type: { slot1: 'normal', slot2: 'fighting' }
},
{
  id: 760,
  name: 'bewear',
  type: { slot1: 'normal', slot2: 'fighting' }
},
{ id: 761, name: 'bounsweet', type: { slot1: 'grass' } },
{ id: 762, name: 'steenee', type: { slot1: 'grass' } },
{ id: 763, name: 'tsareena', type: { slot1: 'grass' } },
{ id: 764, name: 'comfey', type: { slot1: 'fairy' } },
{
  id: 765,
  name: 'oranguru',
  type: { slot1: 'normal', slot2: 'psychic' }
},
{ id: 766, name: 'passimian', type: { slot1: 'fighting' } },
{ id: 767, name: 'wimpod', type: { slot1: 'bug', slot2: 'water' } },
{ id: 768, name: 'golisopod', type: { slot1: 'bug', slot2: 'water' } },
{
  id: 769,
  name: 'sandygast',
  type: { slot1: 'ghost', slot2: 'ground' }
},
{
  id: 770,
  name: 'palossand',
  type: { slot1: 'ghost', slot2: 'ground' }
},
{ id: 771, name: 'pyukumuku', type: { slot1: 'water' } },
{ id: 772, name: 'type-null', type: { slot1: 'normal' } },
{ id: 773, name: 'silvally', type: { slot1: 'normal' } },
{
  id: 774,
  name: 'minior-red-meteor',
  type: { slot1: 'rock', slot2: 'flying' }
},
{ id: 775, name: 'komala', type: { slot1: 'normal' } },
{
  id: 776,
  name: 'turtonator',
  type: { slot1: 'fire', slot2: 'dragon' }
},
{
  id: 777,
  name: 'togedemaru',
  type: { slot1: 'electric', slot2: 'steel' }
},
{
  id: 778,
  name: 'mimikyu-disguised',
  type: { slot1: 'ghost', slot2: 'fairy' }
},
{
  id: 779,
  name: 'bruxish',
  type: { slot1: 'water', slot2: 'psychic' }
},
{ id: 780, name: 'drampa', type: { slot1: 'normal', slot2: 'dragon' } },
{ id: 781, name: 'dhelmise', type: { slot1: 'ghost', slot2: 'grass' } },
{ id: 782, name: 'jangmo-o', type: { slot1: 'dragon' } },
{
  id: 783,
  name: 'hakamo-o',
  type: { slot1: 'dragon', slot2: 'fighting' }
},
{
  id: 784,
  name: 'kommo-o',
  type: { slot1: 'dragon', slot2: 'fighting' }
},
{
  id: 785,
  name: 'tapu-koko',
  type: { slot1: 'electric', slot2: 'fairy' }
},
{
  id: 786,
  name: 'tapu-lele',
  type: { slot1: 'psychic', slot2: 'fairy' }
},
{
  id: 787,
  name: 'tapu-bulu',
  type: { slot1: 'grass', slot2: 'fairy' }
},
{
  id: 788,
  name: 'tapu-fini',
  type: { slot1: 'water', slot2: 'fairy' }
},
{ id: 789, name: 'cosmog', type: { slot1: 'psychic' } },
{ id: 790, name: 'cosmoem', type: { slot1: 'psychic' } },
{
  id: 791,
  name: 'solgaleo',
  type: { slot1: 'psychic', slot2: 'steel' }
},
{ id: 792, name: 'lunala', type: { slot1: 'psychic', slot2: 'ghost' } },
{ id: 793, name: 'nihilego', type: { slot1: 'rock', slot2: 'poison' } },
{
  id: 794,
  name: 'buzzwole',
  type: { slot1: 'bug', slot2: 'fighting' }
},
{
  id: 795,
  name: 'pheromosa',
  type: { slot1: 'bug', slot2: 'fighting' }
},
{ id: 796, name: 'xurkitree', type: { slot1: 'electric' } },
{
  id: 797,
  name: 'celesteela',
  type: { slot1: 'steel', slot2: 'flying' }
},
{ id: 798, name: 'kartana', type: { slot1: 'grass', slot2: 'steel' } },
{ id: 799, name: 'guzzlord', type: { slot1: 'dark', slot2: 'dragon' } },
{ id: 800, name: 'necrozma', type: { slot1: 'psychic' } },
{ id: 801, name: 'magearna', type: { slot1: 'steel', slot2: 'fairy' } },
{
  id: 802,
  name: 'marshadow',
  type: { slot1: 'fighting', slot2: 'ghost' }
},
{ id: 803, name: 'poipole', type: { slot1: 'poison' } },
{
  id: 804,
  name: 'naganadel',
  type: { slot1: 'poison', slot2: 'dragon' }
},
{ id: 805, name: 'stakataka', type: { slot1: 'rock', slot2: 'steel' } },
{
  id: 806,
  name: 'blacephalon',
  type: { slot1: 'fire', slot2: 'ghost' }
},
{ id: 807, name: 'zeraora', type: { slot1: 'electric' } },
{ id: 808, name: 'meltan', type: { slot1: 'steel' } },
{ id: 809, name: 'melmetal', type: { slot1: 'steel' } },
{ id: 810, name: 'grookey', type: { slot1: 'grass' } },
{ id: 811, name: 'thwackey', type: { slot1: 'grass' } },
{ id: 812, name: 'rillaboom', type: { slot1: 'grass' } },
{ id: 813, name: 'scorbunny', type: { slot1: 'fire' } },
{ id: 814, name: 'raboot', type: { slot1: 'fire' } },
{ id: 815, name: 'cinderace', type: { slot1: 'fire' } },
{ id: 816, name: 'sobble', type: { slot1: 'water' } },
{ id: 817, name: 'drizzile', type: { slot1: 'water' } },
{ id: 818, name: 'inteleon', type: { slot1: 'water' } },
{ id: 819, name: 'skwovet', type: { slot1: 'normal' } },
{ id: 820, name: 'greedent', type: { slot1: 'normal' } },
{ id: 821, name: 'rookidee', type: { slot1: 'flying' } },
{ id: 822, name: 'corvisquire', type: { slot1: 'flying' } },
{
  id: 823,
  name: 'corviknight',
  type: { slot1: 'flying', slot2: 'steel' }
},
{ id: 824, name: 'blipbug', type: { slot1: 'bug' } },
{ id: 825, name: 'dottler', type: { slot1: 'bug', slot2: 'psychic' } },
{ id: 826, name: 'orbeetle', type: { slot1: 'bug', slot2: 'psychic' } },
{ id: 827, name: 'nickit', type: { slot1: 'dark' } },
{ id: 828, name: 'thievul', type: { slot1: 'dark' } },
{ id: 829, name: 'gossifleur', type: { slot1: 'grass' } },
{ id: 830, name: 'eldegoss', type: { slot1: 'grass' } },
{ id: 831, name: 'wooloo', type: { slot1: 'normal' } },
{ id: 832, name: 'dubwool', type: { slot1: 'normal' } },
{ id: 833, name: 'chewtle', type: { slot1: 'water' } },
{ id: 834, name: 'drednaw', type: { slot1: 'water', slot2: 'rock' } },
{ id: 835, name: 'yamper', type: { slot1: 'electric' } },
{ id: 836, name: 'boltund', type: { slot1: 'electric' } },
{ id: 837, name: 'rolycoly', type: { slot1: 'rock' } },
{ id: 838, name: 'carkol', type: { slot1: 'rock', slot2: 'fire' } },
{ id: 839, name: 'coalossal', type: { slot1: 'rock', slot2: 'fire' } },
{ id: 840, name: 'applin', type: { slot1: 'grass', slot2: 'dragon' } },
{ id: 841, name: 'flapple', type: { slot1: 'grass', slot2: 'dragon' } },
{
  id: 842,
  name: 'appletun',
  type: { slot1: 'grass', slot2: 'dragon' }
},
{ id: 843, name: 'silicobra', type: { slot1: 'ground' } },
{ id: 844, name: 'sandaconda', type: { slot1: 'ground' } },
{
  id: 845,
  name: 'cramorant',
  type: { slot1: 'flying', slot2: 'water' }
},
{ id: 846, name: 'arrokuda', type: { slot1: 'water' } },
{ id: 847, name: 'barraskewda', type: { slot1: 'water' } },
{
  id: 848,
  name: 'toxel',
  type: { slot1: 'electric', slot2: 'poison' }
},
{
  id: 849,
  name: 'toxtricity-amped',
  type: { slot1: 'electric', slot2: 'poison' }
},
{ id: 850, name: 'sizzlipede', type: { slot1: 'fire', slot2: 'bug' } },
{ id: 851, name: 'centiskorch', type: { slot1: 'fire', slot2: 'bug' } },
{ id: 852, name: 'clobbopus', type: { slot1: 'fighting' } },
{ id: 853, name: 'grapploct', type: { slot1: 'fighting' } },
{ id: 854, name: 'sinistea', type: { slot1: 'ghost' } },
{ id: 855, name: 'polteageist', type: { slot1: 'ghost' } },
{ id: 856, name: 'hatenna', type: { slot1: 'psychic' } },
{ id: 857, name: 'hattrem', type: { slot1: 'psychic' } },
{
  id: 858,
  name: 'hatterene',
  type: { slot1: 'psychic', slot2: 'fairy' }
},
{ id: 859, name: 'impidimp', type: { slot1: 'dark', slot2: 'fairy' } },
{ id: 860, name: 'morgrem', type: { slot1: 'dark', slot2: 'fairy' } },
{
  id: 861,
  name: 'grimmsnarl',
  type: { slot1: 'dark', slot2: 'fairy' }
},
{
  id: 862,
  name: 'obstagoon',
  type: { slot1: 'dark', slot2: 'normal' }
},
{ id: 863, name: 'perrserker', type: { slot1: 'steel' } },
{ id: 864, name: 'cursola', type: { slot1: 'ghost' } },
{ id: 865, name: 'sirfetchd', type: { slot1: 'fighting' } },
{ id: 866, name: 'mr-rime', type: { slot1: 'ice', slot2: 'psychic' } },
{
  id: 867,
  name: 'runerigus',
  type: { slot1: 'ground', slot2: 'ghost' }
},
{ id: 868, name: 'milcery', type: { slot1: 'fairy' } },
{ id: 869, name: 'alcremie', type: { slot1: 'fairy' } },
{ id: 870, name: 'falinks', type: { slot1: 'fighting' } },
{ id: 871, name: 'pincurchin', type: { slot1: 'electric' } },
{ id: 872, name: 'snom', type: { slot1: 'ice', slot2: 'bug' } },
{ id: 873, name: 'frosmoth', type: { slot1: 'ice', slot2: 'bug' } },
{ id: 874, name: 'stonjourner', type: { slot1: 'rock' } },
{ id: 875, name: 'eiscue-ice', type: { slot1: 'ice' } },
{
  id: 876,
  name: 'indeedee-male',
  type: { slot1: 'psychic', slot2: 'normal' }
},
{
  id: 877,
  name: 'morpeko-full-belly',
  type: { slot1: 'electric', slot2: 'dark' }
},
{ id: 878, name: 'cufant', type: { slot1: 'steel' } },
{ id: 879, name: 'copperajah', type: { slot1: 'steel' } },
{
  id: 880,
  name: 'dracozolt',
  type: { slot1: 'electric', slot2: 'dragon' }
},
{
  id: 881,
  name: 'arctozolt',
  type: { slot1: 'electric', slot2: 'ice' }
},
{
  id: 882,
  name: 'dracovish',
  type: { slot1: 'water', slot2: 'dragon' }
},
{ id: 883, name: 'arctovish', type: { slot1: 'water', slot2: 'ice' } },
{
  id: 884,
  name: 'duraludon',
  type: { slot1: 'steel', slot2: 'dragon' }
},
{ id: 885, name: 'dreepy', type: { slot1: 'dragon', slot2: 'ghost' } },
{
  id: 886,
  name: 'drakloak',
  type: { slot1: 'dragon', slot2: 'ghost' }
},
{
  id: 887,
  name: 'dragapult',
  type: { slot1: 'dragon', slot2: 'ghost' }
},
{ id: 888, name: 'zacian', type: { slot1: 'fairy' } },
{ id: 889, name: 'zamazenta', type: { slot1: 'fighting' } },
{
  id: 890,
  name: 'eternatus',
  type: { slot1: 'poison', slot2: 'dragon' }
},
{ id: 891, name: 'kubfu', type: { slot1: 'fighting' } },
{
  id: 892,
  name: 'urshifu-single-strike',
  type: { slot1: 'fighting', slot2: 'dark' }
},
{ id: 893, name: 'zarude', type: { slot1: 'dark', slot2: 'grass' } },
{ id: 894, name: 'regieleki', type: { slot1: 'electric' } },
{ id: 895, name: 'regidrago', type: { slot1: 'dragon' } },
{ id: 896, name: 'glastrier', type: { slot1: 'ice' } },
{ id: 897, name: 'spectrier', type: { slot1: 'ghost' } },
{
  id: 898,
  name: 'calyrex',
  type: { slot1: 'psychic', slot2: 'grass' }
},
{
  id: 899,
  name: 'wyrdeer',
  type: { slot1: 'normal', slot2: 'psychic' }
},
{ id: 900, name: 'kleavor', type: { slot1: 'bug', slot2: 'rock' } },
{
  id: 901,
  name: 'ursaluna',
  type: { slot1: 'ground', slot2: 'normal' }
},
{
  id: 902,
  name: 'basculegion-male',
  type: { slot1: 'water', slot2: 'ghost' }
},
{
  id: 903,
  name: 'sneasler',
  type: { slot1: 'fighting', slot2: 'poison' }
},
{ id: 904, name: 'overqwil', type: { slot1: 'dark', slot2: 'poison' } },
{
  id: 905,
  name: 'enamorus-incarnate',
  type: { slot1: 'fairy', slot2: 'flying' }
},
{ id: 906, name: 'sprigatito', type: { slot1: 'grass' } },
{ id: 907, name: 'floragato', type: { slot1: 'grass' } },
{
  id: 908,
  name: 'meowscarada',
  type: { slot1: 'grass', slot2: 'dark' }
},
{ id: 909, name: 'fuecoco', type: { slot1: 'fire' } },
{ id: 910, name: 'crocalor', type: { slot1: 'fire' } },
{
  id: 911,
  name: 'skeledirge',
  type: { slot1: 'fire', slot2: 'ghost' }
},
{ id: 912, name: 'quaxly', type: { slot1: 'water' } },
{ id: 913, name: 'quaxwell', type: { slot1: 'water' } },
{
  id: 914,
  name: 'quaquaval',
  type: { slot1: 'water', slot2: 'fighting' }
},
{ id: 915, name: 'lechonk', type: { slot1: 'normal' } },
{ id: 916, name: 'oinkologne', type: { slot1: 'normal' } },
{ id: 917, name: 'tarountula', type: { slot1: 'bug' } },
{ id: 918, name: 'spidops', type: { slot1: 'bug' } },
{ id: 919, name: 'nymble', type: { slot1: 'bug' } },
{ id: 920, name: 'lokix', type: { slot1: 'bug', slot2: 'dark' } },
{ id: 921, name: 'pawmi', type: { slot1: 'electric' } },
{
  id: 922,
  name: 'pawmo',
  type: { slot1: 'electric', slot2: 'fighting' }
},
{
  id: 923,
  name: 'pawmot',
  type: { slot1: 'electric', slot2: 'fighting' }
},
{ id: 924, name: 'tandemaus', type: { slot1: 'normal' } },
{ id: 925, name: 'maushold', type: { slot1: 'normal' } },
{ id: 926, name: 'fidough', type: { slot1: 'fairy' } },
{ id: 927, name: 'dachsbun', type: { slot1: 'fairy' } },
{ id: 928, name: 'smoliv', type: { slot1: 'grass', slot2: 'normal' } },
{ id: 929, name: 'dolliv', type: { slot1: 'grass', slot2: 'normal' } },
{
  id: 930,
  name: 'arboliva',
  type: { slot1: 'grass', slot2: 'normal' }
},
{
  id: 931,
  name: 'squawkabilly',
  type: { slot1: 'normal', slot2: 'flying' }
},
{ id: 932, name: 'nacli', type: { slot1: 'rock' } },
{ id: 933, name: 'naclstack', type: { slot1: 'rock' } },
{ id: 934, name: 'garganacl', type: { slot1: 'rock' } },
{ id: 935, name: 'charcadet', type: { slot1: 'fire' } },
{
  id: 936,
  name: 'armarouge',
  type: { slot1: 'fire', slot2: 'psychic' }
},
{ id: 937, name: 'ceruledge', type: { slot1: 'fire', slot2: 'ghost' } },
{ id: 938, name: 'tadbulb', type: { slot1: 'electric' } },
{ id: 939, name: 'bellibolt', type: { slot1: 'electric' } },
{
  id: 940,
  name: 'wattrel',
  type: { slot1: 'electric', slot2: 'flying' }
},
{
  id: 941,
  name: 'kilowattrel',
  type: { slot1: 'electric', slot2: 'flying' }
},
{ id: 942, name: 'maschiff', type: { slot1: 'dark' } },
{ id: 943, name: 'mabosstiff', type: { slot1: 'dark' } },
{
  id: 944,
  name: 'shroodle',
  type: { slot1: 'poison', slot2: 'normal' }
},
{
  id: 945,
  name: 'grafaiai',
  type: { slot1: 'poison', slot2: 'normal' }
},
{ id: 946, name: 'bramblin', type: { slot1: 'grass', slot2: 'ghost' } },
{
  id: 947,
  name: 'brambleghast',
  type: { slot1: 'grass', slot2: 'ghost' }
},
{
  id: 948,
  name: 'toedscool',
  type: { slot1: 'ground', slot2: 'grass' }
},
{
  id: 949,
  name: 'toedscruel',
  type: { slot1: 'ground', slot2: 'grass' }
},
{ id: 950, name: 'klawf', type: { slot1: 'rock' } },
{ id: 951, name: 'capsakid', type: { slot1: 'grass' } },
{
  id: 952,
  name: 'scovillain',
  type: { slot1: 'grass', slot2: 'fire' }
},
{ id: 953, name: 'rellor', type: { slot1: 'bug' } },
{ id: 954, name: 'rabsca', type: { slot1: 'bug', slot2: 'psychic' } },
{ id: 955, name: 'flittle', type: { slot1: 'psychic' } },
{ id: 956, name: 'espathra', type: { slot1: 'psychic' } },
{
  id: 957,
  name: 'tinkatink',
  type: { slot1: 'fairy', slot2: 'steel' }
},
{
  id: 958,
  name: 'tinkatuff',
  type: { slot1: 'fairy', slot2: 'steel' }
},
{ id: 959, name: 'tinkaton', type: { slot1: 'fairy', slot2: 'steel' } },
{ id: 960, name: 'wiglett', type: { slot1: 'water' } },
{ id: 961, name: 'wugtrio', type: { slot1: 'water' } },
{
  id: 962,
  name: 'bombirdier',
  type: { slot1: 'flying', slot2: 'dark' }
},
{ id: 963, name: 'finizen', type: { slot1: 'water' } },
{ id: 964, name: 'palafin', type: { slot1: 'water' } },
{ id: 965, name: 'varoom', type: { slot1: 'steel', slot2: 'poison' } },
{
  id: 966,
  name: 'revavroom',
  type: { slot1: 'steel', slot2: 'poison' }
},
{
  id: 967,
  name: 'cyclizar',
  type: { slot1: 'dragon', slot2: 'normal' }
},
{ id: 968, name: 'orthworm', type: { slot1: 'steel' } },
{ id: 969, name: 'glimmet', type: { slot1: 'rock', slot2: 'poison' } },
{ id: 970, name: 'glimmora', type: { slot1: 'rock', slot2: 'poison' } },
{ id: 971, name: 'greavard', type: { slot1: 'ghost' } },
{ id: 972, name: 'houndstone', type: { slot1: 'ghost' } },
{
  id: 973,
  name: 'flamigo',
  type: { slot1: 'flying', slot2: 'fighting' }
},
{ id: 974, name: 'cetoddle', type: { slot1: 'ice' } },
{ id: 975, name: 'cetitan', type: { slot1: 'ice' } },
{ id: 976, name: 'veluza', type: { slot1: 'water', slot2: 'psychic' } },
{ id: 977, name: 'dondozo', type: { slot1: 'water' } },
{
  id: 978,
  name: 'tatsugiri',
  type: { slot1: 'dragon', slot2: 'water' }
},
{
  id: 979,
  name: 'annihilape',
  type: { slot1: 'fighting', slot2: 'ghost' }
},
{
  id: 980,
  name: 'clodsire',
  type: { slot1: 'poison', slot2: 'ground' }
},
{
  id: 981,
  name: 'farigiraf',
  type: { slot1: 'normal', slot2: 'psychic' }
},
{ id: 982, name: 'dudunsparce', type: { slot1: 'normal' } },
{ id: 983, name: 'kingambit', type: { slot1: 'dark', slot2: 'steel' } },
{
  id: 984,
  name: 'great-tusk',
  type: { slot1: 'ground', slot2: 'fighting' }
},
{
  id: 985,
  name: 'scream-tail',
  type: { slot1: 'fairy', slot2: 'psychic' }
},
{
  id: 986,
  name: 'brute-bonnet',
  type: { slot1: 'grass', slot2: 'dark' }
},
{
  id: 987,
  name: 'flutter-mane',
  type: { slot1: 'ghost', slot2: 'fairy' }
},
{
  id: 988,
  name: 'slither-wing',
  type: { slot1: 'bug', slot2: 'fighting' }
},
{
  id: 989,
  name: 'sandy-shocks',
  type: { slot1: 'electric', slot2: 'ground' }
},
{
  id: 990,
  name: 'iron-treads',
  type: { slot1: 'ground', slot2: 'steel' }
},
{
  id: 991,
  name: 'iron-bundle',
  type: { slot1: 'ice', slot2: 'water' }
},
{
  id: 992,
  name: 'iron-hands',
  type: { slot1: 'fighting', slot2: 'electric' }
},
{
  id: 993,
  name: 'iron-jugulis',
  type: { slot1: 'dark', slot2: 'flying' }
},
{
  id: 994,
  name: 'iron-moth',
  type: { slot1: 'fire', slot2: 'poison' }
},
{
  id: 995,
  name: 'iron-thorns',
  type: { slot1: 'rock', slot2: 'electric' }
},
{ id: 996, name: 'frigibax', type: { slot1: 'dragon', slot2: 'ice' } },
{ id: 997, name: 'arctibax', type: { slot1: 'dragon', slot2: 'ice' } },
{
  id: 998,
  name: 'baxcalibur',
  type: { slot1: 'dragon', slot2: 'ice' }
},
{ id: 999, name: 'gimmighoul', type: { slot1: 'ghost' } },
{
  id: 1000,
  name: 'gholdengo',
  type: { slot1: 'steel', slot2: 'ghost' }
},
{ id: 1001, name: 'wo-chien', type: { slot1: 'dark', slot2: 'grass' } },
{ id: 1002, name: 'chien-pao', type: { slot1: 'dark', slot2: 'ice' } },
{ id: 1003, name: 'ting-lu', type: { slot1: 'dark', slot2: 'ground' } },
{ id: 1004, name: 'chi-yu', type: { slot1: 'dark', slot2: 'fire' } },
{
  id: 1005,
  name: 'roaring-moon',
  type: { slot1: 'dragon', slot2: 'dark' }
},
{
  id: 1006,
  name: 'iron-valiant',
  type: { slot1: 'fairy', slot2: 'fighting' }
},
{
  id: 1007,
  name: 'koraidon',
  type: { slot1: 'fighting', slot2: 'dragon' }
},
{
  id: 1008,
  name: 'miraidon',
  type: { slot1: 'electric', slot2: 'dragon' }
},
{
  id: 1009,
  name: 'walking-wake',
  type: { slot1: 'water', slot2: 'dragon' }
},
{
  id: 1010,
  name: 'iron-leaves',
  type: { slot1: 'grass', slot2: 'psychic' }
},
{
  id: 1011,
  name: 'dipplin',
  type: { slot1: 'grass', slot2: 'dragon' }
},
{
  id: 1012,
  name: 'poltchageist',
  type: { slot1: 'grass', slot2: 'ghost' }
},
{
  id: 1013,
  name: 'sinistcha',
  type: { slot1: 'grass', slot2: 'ghost' }
},
{
  id: 1014,
  name: 'okidogi',
  type: { slot1: 'poison', slot2: 'fighting' }
},
{
  id: 1015,
  name: 'munkidori',
  type: { slot1: 'poison', slot2: 'psychic' }
},
{
  id: 1016,
  name: 'fezandipiti',
  type: { slot1: 'poison', slot2: 'fairy' }
},
{ id: 1017, name: 'ogerpon', type: { slot1: 'grass' } },
{
  id: 1018,
  name: 'archaludon',
  type: { slot1: 'steel', slot2: 'dragon' }
},
{
  id: 1019,
  name: 'hydrapple',
  type: { slot1: 'grass', slot2: 'dragon' }
},
{
  id: 1020,
  name: 'gouging-fire',
  type: { slot1: 'fire', slot2: 'dragon' }
},
{
  id: 1021,
  name: 'raging-bolt',
  type: { slot1: 'electric', slot2: 'dragon' }
},
{
  id: 1022,
  name: 'iron-boulder',
  type: { slot1: 'rock', slot2: 'psychic' }
},
{
  id: 1023,
  name: 'iron-crown',
  type: { slot1: 'steel', slot2: 'psychic' }
},
{ id: 1024, name: 'terapagos', type: { slot1: 'normal' } },
{
  id: 1025,
  name: 'pecharunt',
  type: { slot1: 'poison', slot2: 'ghost' }
},
]; 
 
 module.exports = pokemon;