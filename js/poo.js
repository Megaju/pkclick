
///////////////////////////////////////////////// JS & POO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/*
// premier exemple simple
var objPokemonTest {
    //propriété de l'objet
    id : 0,
    name : "name",
    type : "type",
        // ex de propriété en fonction
    cri : function cri() {
        return this.cri;
    },
        // ex d'objet dans un objet
    carac : {
        taille : 0.75,
        odeur : "smell good",
        poid : "15kg",
    }
}
*/
    
// c'est sympa, mais ce que je veux maintenant c'est créer des instances ! ! ! !

////////// LES CONSTRUCTEURS EN JS ! \\\\\\\\\\
var pokemon = function(name){
    this.id = 0;
    this.name = name;
    this.type = '?????';
    this.type2 = '????';
    this.stade = 0;
}
   
// et voici comment instancier un objet
var pikachu = new pokemon('Pikachu');
pikachu.id = 25;
pikachu.type = 'foudre';
pikachu.stade = 0;
    
var salameche = new pokemon('Salamèche');
salameche.id = 7;
salameche.type = 'feu';
salameche.stade = 0;

var bulbizarre = new pokemon('Bulbizarre');
bulbizarre.id = 1;
bulbizarre.type = 'plante';
bulbizarre.type2 = 'poison';
bulbizarre.stade = 0;

var carapuce = new pokemon('Carapuce');
carapuce.id = 4;
carapuce.type = 'eau';
carapuce.stade = 0;