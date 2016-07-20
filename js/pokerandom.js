// l'obj pkmn
var pokemon = function(id, name, type, type2, stade){
    this.id = id;
    this.name = name;
    this.type = type;
    this.type2 = type2;
    this.stade = stade;
}


// les obj pkmn instanciés
var pikachu = new pokemon(1, 'Pikachu', 'Foudre', '', 0);
    
var salameche = new pokemon(2, 'Salamèche', 'Feu', '', 0);

var bulbizarre = new pokemon(3, 'Bulbizarre', 'Plante', 'Poison', 0);

var carapuce = new pokemon(4, 'Carapuce', 'Eau', '', 0);


// fonction de selection random d'un pokemon
function clickPokeball() {
    var tabPokedex = document.getElementById('pokedex').innerHTML;
    var PokId = Math.ceil(Math.random(0, 4));
    
    tabPokedex = '<tr><td>' + Object.values(pikachu) + '</td></tr>' + tabPokedex;
    console.log(Object.values(pikachu));
    document.getElementById('pokedex').innerHTML = tabPokedex;
    
    Object.get
}

