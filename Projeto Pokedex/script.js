const pokemonPrincipal=document.getElementById("pokemonPrincipal");
const qtdPokemon=120;
let colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const tiposCor = Object.keys(colors);
const seachPokemon= async ()=> {
    for (let i = 1; i <= qtdPokemon; i++) {
        await urlPokemon(i);
        
 }

}

const urlPokemon = async (id) => {
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    let dados= await resp.json();
    criarPokemon(dados)
    
}

const criarPokemon = (escolher) => {
  const card = document.createElement("div");
  card.classList.add("pokemons")
  const nome = escolher.name[0].toUpperCase() + escolher.name.slice(1);
  const id = escolher.id.toString().padStart(3, "0");
  const pokemontipos = escolher.types.map(type => type.type.name);
  const tipos = tiposCor.find(type => pokemontipos.indexOf(type) > -1)
  const cor = colors[tipos];
  card.style.backgroundColor= cor

  const pokemonHtml = `<div class="imgCard">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${escolher.id}.png" alt="${nome}">
        </div>
    <div class="infor">
     <span class="number" >#${id}</span>
    <h3 class="name">${nome}</h3>
    <small class="tipo">Tipo:<span>${pokemontipos}</span></small>

    </div>`

    card.innerHTML=pokemonHtml;
    pokemonPrincipal.appendChild(card);
}

seachPokemon();