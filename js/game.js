/* Doc
    - pokeTab = array avec tout les poke
    - pokemon = objet pour définir tout les pokemons avec toutes leurs caractéristiques.
    - tabPokedex = var permettant d'enregistrer les pokemons dans le pokedex.
    - pokeTemp = var temporaire permettant de gérer le pokemon générer aléatoirement en clicuant sur la pokeball. 
*/


// tableau qui repertoris tout les pokemons
var pokeTab = ['Pikachu', 'Bulbizar', 'Salameche', 'Carapuce', 'Roucool', 'Aspicot', 'Electrode', 'Magneton', 'Chenipan', 'Rattata', 'Piafabec', 'Abo', 'Sabelette', 'Nidoran', 'Melofee', 'Goupix', 'Rondoudou', 'Nosferapti', 'Mystherbe', 'Paras', 'Mimitoss', 'Taupikeur', 'Miaouss', 'Psykokwak', 'Ferosinge', 'Caninos', 'Ptitard', 'Abra', 'machoc', 'Chetiflor', 'Tentacool', 'Racaillou', 'Ponyta', 'Ramoloss', 'Canarticho', 'Doduo', 'Otaria', 'Stari', 'Kokyas', 'Fantominus', 'Onix', 'Soporifik', 'Krabby', 'Voltorbe', 'Noeunoeuf', 'Osselait', 'Kicklee', 'Tygnon', 'Smogo', 'Excelangue'];
var pokeTemp = 'PokemonTemporaire';


// Les objets pokemon !
var pokemon = {id:0, name:"name", type:"type"}; //ajouter les famille et les tailles etc. plus tard

//EXAMPLE !!!
//var bulbizard = {id:1, name:"Bulbizard", type:["Plante", "Poison"]};



// on sélectionne un pokémon au hasard dans le tableau et on l'ajoute dans le pokédex ! :D
function clickPokeball() {
    var tabPokedex = document.getElementById('pokedex').innerHTML;
    var pokeTemp = pokeTab[Math.floor(Math.random() * pokeTab.length)];
    
    // incrémentation du pokédex
    tabPokedex = '<tr><td>' + pokeTemp + '</td></tr>' + tabPokedex;
    document.getElementById('pokedex').innerHTML = tabPokedex;
}